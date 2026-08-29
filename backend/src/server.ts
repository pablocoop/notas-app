import fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";

const app = fastify();

app.register(cors);
app.register(rateLimit, { max: 100 });

app.get("/api/health", async () => ({ status: "ok" }));

const start = async () => {
    try {
        await app.listen({ port: 3001, host: "0.0.0.0" });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();