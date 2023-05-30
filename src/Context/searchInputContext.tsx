import React, { useState, createContext, useEffect, ReactNode, FC } from 'react';
import { StarWars } from '../api/agent';
import { Films, Peoples, Planets, StarShips } from './interface';


// interface films {
//   characters: [string],
//   created: string,
//   director: string,
//   edited: string,
//   episode_id: number,
//   id: number,
//   opening_crawl: string,
//   planets: [string],
//   producer: string,
//   release_date: string,
//   species: [string],
//   starships: [string],
//   title: string,
//   vehicles: [string],
// }
// interface peoples {
//   birth_year: string,
//   born: number,
//   bornLocation: [string],
//   created: string,
//   died: string,
//   diedLocation: string,
//   edited: string,
//   eye_color: string,
//   films: [string],
//   gender: string,
//   hair_color: string,
//   height: string,
//   homeworld: string,
//   id: number,
//   image: string,
//   mass: string,
//   name: string,
//   skin_color: string,
//   speciesv: string,
//   starshipsv: [string],
//   vehicles: [string],
//   wiki: string,
// }
// interface planets {
//   climate: string,
//   created: string,
//   diameter: string,
//   edited: string,
//   films: [string],
//   gravity: string,
//   id: number,
//   name: string,
//   orbital_period: string,
//   population: string,
//   residents: [string],
//   rotation_period: string,
//   surface_water: string,
//   terrain: string,
// }
// // если именно в starShips поставить без ? выдаёт ошибку
// interface starShips {
//   MGLT?: string,
//   cargo_capacity?: string,
//   consumables?: string,
//   cost_in_credits?: string,
//   created?: string,
//   crew?: string,
//   edited?: string,
//   films?: [string],
//   hyperdrive_rating?: string,
//   id?: number,
//   length?: string,
//   manufacturer?: string,
//   max_atmosphering_speed?: string,
//   model?: string,
//   name?: string,
//   passengers?: string,
//   pilots?: []
//   starship_class?: string,
// }
interface StringContext {
  search?: string,
  setSearch?: (param: string) => void,
}
interface FilmsContext {
  films?: Films[],
  setFilms?: (param: Films[]) => void,
}
interface PeopleContext {
  peoples?: Peoples[],
  setPeoples?: (param: Peoples[]) => void,
}
interface PlanetsContext {
  planets?: Planets[],
  setPlanets?: (param: Planets[]) => void,
}
interface StarShipsContext {
  starShips?: StarShips[],
  setStarShips?: (param: StarShips[]) => void,
}
interface props {
  children: ReactNode
  // any props that come into the component
}
export const SearchInputContext = createContext<StringContext>({});
export const FilmsContext = createContext<FilmsContext>({});
export const PeopleContext = createContext<PeopleContext>({});
export const PlanetsContext = createContext<PlanetsContext>({});
export const StarShipsContext = createContext<StarShipsContext>({});


const ContentContext: FC<props> = ({ children }) => {

  const [search, setSearch] = useState<string | undefined>('');
  const [films, setFilms] = useState<Films[]>([])
  const [peoples, setPeoples] = useState<Peoples[]>([])
  const [planets, setPlanets] = useState<Planets[]>([])
  const [starShips, setStarShips] = useState<StarShips[]>([])
  useEffect(() => {
    StarWars.films().then(res => {
        setFilms(res)
    })
    StarWars.peoples().then(res => {
        setPeoples(res)
    })
    StarWars.planets().then(res => {
        setPlanets(res)
    })
    StarWars.starships().then(res => {
        setStarShips(res)
    })
}, []);
  
  return (
      <SearchInputContext.Provider value={{search, setSearch}} >
        <FilmsContext.Provider value={{films, setFilms}} >
          <PeopleContext.Provider value={{peoples, setPeoples}} >
            <PlanetsContext.Provider value={{planets, setPlanets}} >
              <StarShipsContext.Provider value={{starShips, setStarShips}} >
                {children}
              </StarShipsContext.Provider>
            </PlanetsContext.Provider>
          </PeopleContext.Provider>
        </FilmsContext.Provider>
      </SearchInputContext.Provider>
  )
}

export default ContentContext;