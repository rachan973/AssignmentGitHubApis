import express from 'express';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import resolvers from './server/resolvers';
import typeDefs from './server/typeDefs';

const PORT = 5003;

async function startApolloServer(typeDefs: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema: buildSubgraphSchema({ typeDefs, resolvers, })        
    });
    await server.start();
    server.applyMiddleware({ app });
    app.use(express.json()); 
    await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
