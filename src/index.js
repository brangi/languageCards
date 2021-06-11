import express from "express";
import { ApolloServer, gql} from "apollo-server-express";
import cors from "cors";
import {resolvers} from "../graphql/resolver";
import { typeDefs } from "../graphql/typeDefs";
import initDB from "../db/mongo"

const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
   });

    app.use(cors());
    server.applyMiddleware({app});
    await initDB();

    app.listen({port: 4001}, ()=> {
        console.log('==============API Running=============')
    })

};

server().then(() => console.log('Start'));