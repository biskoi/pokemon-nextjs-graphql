import { Suspense } from "react";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { fetchPokemon } from "@/graphql/graphqlClient";

export const revalidate = 60;

interface PageProps {
  searchParams?: {
    pokemon?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.pokemon ?? "Pikachu";

  return (
    <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
      <Suspense fallback={<div>Loading Pokémon...</div>}>
        <PokemonCard pokemon={await fetchPokemon(query)} />
      </Suspense>
    </div>
  );
}
