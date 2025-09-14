import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import connectDB from "./config/db.js";
import "dotenv/config";

async function startServer() {
  await connectDB();

  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.port | 4000 },
  });

  console.log(`Server running at ${url}`);
}

startServer();
