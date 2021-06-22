import 'source-map-support/register';
import type { Handler, ScheduledEvent, Context, Callback } from "aws-lambda"
import axios from "axios"


export const main: Handler<ScheduledEvent> = async (_event:ScheduledEvent, _context:Context, callback:Callback) => {
  
  const symbols = ['ADAUSD_PERP', 'ETHUSD_PERP']
  const url = 'https://testnet.binancefuture.com/dapi/v1/premiumIndex'
  const requests = symbols.map((value) => axios.get(`${url}?symbol=${value}`))
  
  try {
    const result = await Promise.all(requests)
    result.forEach((value) => console.log(value.data))
  } catch(error) {
    callback(error)
  }
}
