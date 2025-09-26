export interface Evolution {
  id: string;
  name: string;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image?: string;
  classification?: string;
  types: string[];
  maxCP?: number;
  maxHP?: number;
  attacks?: Attacks;
  evolutions?: Evolution[];
}
