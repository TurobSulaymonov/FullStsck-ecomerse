import {serve} from "@hono/node-server"
import { timeStamp } from "console"
import {Hono} from "hono"

const app = new Hono()

app.get('/health', (c) => {
  return c.json({
    status: "ok",
    uptime: process.uptime(),
    timeStamp: Date.now(),
  })
})

const start  = async () => {
  try{
    serve(
      {
        fetch: app.fetch,
        port: 4300,
      },
      (info) => {
        console.log('Payment service is running on port 4300');
      }
    )
  }catch(error){
    console.log(error)
    process.exit(1)
  }

}
start()