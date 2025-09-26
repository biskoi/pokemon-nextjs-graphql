import { Pokemon } from "@/types/types";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { fetchPokemon } from "@/graphql/graphqlClient";

export const revalidate = 60;

export async function generateStaticParams() {
   const prerender = ["Bulbasaur", "Charizard"];
   return prerender.map((pokemon) => ({ pokemon }));
}


interface PageProps {
   params: { pokemon: string };
}

export default async function PokemonPage({ params }: PageProps) {

   const resolvedParams = await params
   const query = resolvedParams.pokemon ?? "Pikachu";
   const pokemon: Pokemon | null = await fetchPokemon(query);

   return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
