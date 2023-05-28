import React, { ReactNode } from 'react'

export interface Films {
  characters: [string],
  created: string,
  director: string,
  edited: string,
  episode_id: number,
  id: number,
  opening_crawl: string,
  planets: [string],
  producer: string,
  release_date: string,
  species: [string],
  starships: [string],
  title: string,
  vehicles: [string],
}
export interface Peoples {
  birth_year: string, // есть ил у всех?
  born: number,
  bornLocation: [string],
  created: string,
  died: string, // есть ли?
  diedLocation: string,
  edited: string,
  eye_color: string,
  films: [string],
  gender: string,
  hair_color: string,
  height: string,
  homeworld: string,
  id: number,
  image: string,
  mass: string,
  name: string,
  skin_color: string,
  speciesv: string,
  starshipsv: [string],
  vehicles: [string],
  wiki: string,
}
export interface Planets {
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: [string],
  gravity: string,
  id: number,
  name: string,
  orbital_period: string,
  population: string,
  residents: [string],
  rotation_period: string,
  surface_water: string,
  terrain: string,
}
// если именно в starShips поставить без  выдаёт ошибку
export interface StarShips {
  MGLT: string,
  cargo_capacity: string,
  consumables: string,
  cost_in_credits: string,
  created: string,
  crew: string,
  edited: string,
  films: [string],
  hyperdrive_rating: string,
  id: number,
  length: string,
  manufacturer: string,
  max_atmosphering_speed: string,
  model: string,
  name: string,
  passengers: string,
  pilots: []
  starship_class: string,
}
export interface Sort {
  sort: boolean,
  setSort: (param: StarShips[]) => void,
}
export interface SortType {
  sortType: boolean,
  setSortType: (param: StarShips[]) => void,
}
export interface Layout {
  layout: boolean,
  setLayout: (param: StarShips[]) => void,
}
// export interface Params {
//   name?: string
// }
// export interface propsPage {
//   children?: ReactNode
//   name?: string
//   sort?: boolean,
//   sortType?: boolean
// }
export interface PageProps {
  children?: ReactNode
  name?: string,
  sort: boolean,
  setSort: (param: boolean) => void,
  sortType?: boolean,
  setSortType?: (param: boolean) => void,
  sortNameOnly?: string,
  firstSortName?: string,
  secondSortName?: string,
}