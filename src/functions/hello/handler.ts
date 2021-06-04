import 'source-map-support/register';

import type { Handler, ScheduledEvent, Context, Callback } from "aws-lambda"


const hello: Handler<ScheduledEvent> = async (event:ScheduledEvent, context:Context, callback:Callback) => {
  console.log(event)
  console.log('Hello world!')
  //callback(null, 'ok')
}

export const main = hello;
