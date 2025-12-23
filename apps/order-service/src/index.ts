import { clerkPlugin, getAuth } from "@clerk/fastify";
import Fastify from "fastify"
import { shouldBeUser } from "./middleware/authmiddleware.js";

const fastify = Fastify();

fastify.register(clerkPlugin)

fastify.get(('/health'), (request, reply) => {
    return reply.status(200).send({
        status: "ok",
        uptime: process.uptime(),
        timeStamp: Date.now(),
    })
})

fastify.get(('/test'), {preHandler: shouldBeUser}, (request, reply) => {
  
    return reply.send({message:"Order service is authenticated👌B!", userId: request.userId })
   
})

const start = async () => {
    try{
        await fastify.listen({port: 4200});
        console.log("Order service is running on port 4200")
    } catch(err) {
        fastify.log.error(err);
        process.exit()
    }
}

start()