import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cljvo2axo047d01uq4fm8fi9l/master",
    cache: new InMemoryCache()
});

export default client;