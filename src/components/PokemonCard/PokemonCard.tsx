"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/types"
import styles from "./PokemonCard.module.css";


interface PokemonCardProps {
  pokemon: Pokemon | null;
}

const PokemonCard: FC<PokemonCardProps> = ({pokemon}) => {


   return pokemon ? (
      <div>
         {pokemon.image ? (
            <Image src={pokemon.image} alt={pokemon.name} width={200} height={200}/>
         ) : (
            <p>No image</p>
         )}
         <div className={styles.pokemonWrapper}>
            <h2>{pokemon.name}</h2>
            <p>ID: {pokemon.id}</p>
            <p>Type: {pokemon.types.map((type, i) => (i === pokemon.types.length - 1? type : type + ", " ))}</p> 

            {pokemon.attacks?.fast && pokemon.attacks.fast.length > 0 && (
               <div>
                  <h3>Fast Attacks</h3>
                  {pokemon.attacks.fast.map((attack, i) => (
                     <p key={i}>
                        {attack.name} ({attack.type}) - {attack.damage}
                     </p>
                  ))}
               </div>
            )}

            {pokemon.attacks?.special && pokemon.attacks.special.length > 0 && (
               <div>
                  <h3>Special Attacks</h3>
                  {pokemon.attacks.special.map((attack, i) => (
                     <p key={i}>
                        {attack.name} ({attack.type}) - {attack.damage}
                     </p>
                  ))}
               </div>
        )}

            {pokemon.evolutions && pokemon.evolutions.length > 0 && (
               <div>
                  <h3>Evolutions</h3>
                  {pokemon.evolutions.map((evolution) => (
                     <Link key={evolution.id} href={`/?pokemon=${encodeURIComponent(evolution.name)}`}>
                     {evolution.name + " "} 
                     </Link>
                  ))}
               </div>
            )}

         </div>
      </div>
   ) : (
      <div>no pokemon found!</div>
   )
}

export default PokemonCard