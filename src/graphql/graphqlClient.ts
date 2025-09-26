import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import { Pokemon } from "@/types/types";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/" }),
  cache: new InMemoryCache(),
});

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
      image
      evolutions { id name }
      attacks {
        fast { name type damage }
        special { name type damage }
      }
    }
  }
`;

export async function fetchPokemon(name: string): Promise<Pokemon | null> {
  const { data } = await client.query<{pokemon: Pokemon | null}>({
    query: GET_POKEMON,
    variables: { name },
    fetchPolicy: "cache-first",
  });

  if (!data) return null

  return data.pokemon;
}
