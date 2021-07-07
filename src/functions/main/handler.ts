import type { Handler, ScheduledEvent, Context, Callback } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import 'source-map-support/register';
import * as nodemailer from 'nodemailer';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const main: Handler<ScheduledEvent> = async (
  _event: ScheduledEvent,
  _context: Context,
  callback: Callback
) => {
  const symbols = ['ADAUSD_PERP', 'ETHUSD_PERP'];
  const url = 'https://testnet.binancefuture.com/dapi/v1/premiumIndex'
  const requests = symbols.map((value) => axios.get(`${url}?symbol=${value}`));
  try {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    const result = await Promise.all(requests);

    documentClient.put(
      { TableName: 'crypto-alerts-dev-main', Item: { id: '1', threshold: 3000 } },
      (err, data) => {
        if (err != null) {
          console.log(err);
        }
        if (data != null) {
          console.log(data);
        }
      }
    );

    result.forEach((value) => {
      // https://edigleyssonsilva.medium.com/how-to-send-emails-securely-using-gmail-and-nodejs-eef757525324
      /* const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cryptoalertjs@gmail.com',
          pass: 'cryptoalert123',
        },
      });
      transporter.verify().then(console.log).catch(console.error); */
    });
  } catch (error) {
    callback(error);
  }
};
