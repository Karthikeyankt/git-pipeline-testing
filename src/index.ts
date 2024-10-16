import { FastifyInstance } from "fastify";

import fastify = require("fastify");

const app: FastifyInstance = fastify();

app.get("/", async (request, reply) => {

    reply.send( {message: "hello world"});
});

app.listen(3000, (err, address) => {
    if(err)
    {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`server listening on ${address}`);
});