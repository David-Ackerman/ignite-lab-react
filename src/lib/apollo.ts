import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl4soz79y2dgr01wg0fm71cl0/master",
  cache: new InMemoryCache(),
});
