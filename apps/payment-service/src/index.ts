import {serve} from "@hono/node-server"
import {Hono} from "hono"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
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