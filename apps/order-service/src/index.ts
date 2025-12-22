import Fastify from "fastify"

const fastify = Fastify();


fastify.get(('/health'), (request, reply) => {
    return reply.status(200).send({
        status: "ok",
        uptime: process.uptime(),
        timeStamp: Date.now(),
    })
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