import { useState, createContext, useEffect, ReactNode, FC } from 'react';
import { StarWars } from '../api/agent';
import { Films, Peoples, Planets, StarShips } from './interface';

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