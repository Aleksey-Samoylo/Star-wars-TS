import { useContext, useEffect } from 'react';
import './header.scss'
import { FilmsContext, PeopleContext, PlanetsContext, SearchInputContext, StarShipsContext } from '../../Context/searchInputContext';
import debounce from '../debounce/debounce';

const Header = () => {
    // const [film, setFilm] = useState();
    // const [people, setPeople] = useState();
    // const [planet, setPlanet] = useState();
    // const [starShip, setStarShip] = useState();
    // interface films {
    //     characters: [string],
    //     created: string,
    //     director: string,
    //     edited: string,
    //     episode_id: number,
    //     id: number,
    //     opening_crawl: string,
    //     planets: [string],
    //     producer: string,
    //     release_date: string,
    //     species: [string],
    //     starships: [string],
    //     title: string,
    //     vehicles: [string],
    // }
    // interface peoples {
    //     birth_year: string,
    //     born: number,
    //     bornLocation: [string],
    //     created: string,
    //     died: string,
    //     diedLocation: string,
    //     edited: string,
    //     eye_color: string,
    //     films: [string],
    //     gender: string,
    //     hair_color: string,
    //     height: string,
    //     homeworld: string,
    //     id: number,
    //     image: string,
    //     mass: string,
    //     name: string,
    //     skin_color: string,
    //     species: string,
    //     starships: [string],
    //     vehicles: [string],
    //     wiki: Url,
    // }
    // interface planets {
    //     climate: string,
    //     created: string,
    //     diameter: string,
    //     edited: string,
    //     films: [string],
    //     gravity: string,
    //     id: number,
    //     name: string,
    //     orbital_period: string,
    //     population: string,
    //     residents: [string],
    //     rotation_period: string,
    //     surface_water: string,
    //     terrain: string,
    // }
    // interface starShips {
    //     MGLT: string,
    //     cargo_capacity: string,
    //     consumables: string,
    //     cost_in_credits: string,
    //     created: string,
    //     crew: string,
    //     edited: string,
    //     films: [string],
    //     hyperdrive_rating: string,
    //     id: number,
    //     length: string,
    //     manufacturer: string,
    //     max_atmosphering_speed: string,
    //     model: string,
    //     name: string,
    //     passengers: string,
    //     pilots: []
    //     starship_class: string,
    // }
    // interface valueFirst {
    //     film: films[],
    //     people: peoples[],
    //     planet: planets[],
    //     starShip: starShips[]
    // }

    // и фиг знает почему не работает(((
    // const [searchOutPut, setSearchOutPut] = useState<valueFirst>({
    //     film: [],
    //     people: [],
    //     planet: [],
    //     starShip: []
    // });
    // // что тут вместо any использовать, если я не знаю точно, какой будет респонз
    // //а так же как сделать передачу названия через ключ 'film' например, если сделать string не работает, ругается
    // const change = (name: string, res: any) => {
    //     // const changeValue = {...searchOutPut, [name]: res}; 
    //     setSearchOutPut({...searchOutPut, [name]: res});
    // } 
    // const change = (name: string, value: valueFirst, setValue: React.Dispatch<React.SetStateAction<valueFirst>>, res: any) => {
    //     const changeValue = {...searchOutPut, [name]: res}; 
    //     // setSearchOutPut({...searchOutPut, [name]: res});
    //     setSearchOutPut(changeValue )
    //     // console.log(name)
    //     // console.log(res)
    // } 

    // useEffect(() => {
    //     StarWars.film().then(res => {
    //         change('film', searchOutPut, setSearchOutPut, res)
    //     })
    //     StarWars.people().then(res => {
    //         change('people', searchOutPut, setSearchOutPut, res)
    //     })
    //     // StarWars.planet().then(res => {
    //     //     change('planet', peoples, setPlanets, res)
    //     // })
    //     // StarWars.starShip().then(res => {
    //     //     change('starShip', peoples, setStarShips, res)
    //     // })
    // }, [search]);
    // setInterval(() => {
    //     console.log(searchOutPut)
    // }, 10000)


    // пока сделал так
    // const [films, setFilms] = useState<films[]>([])
    // const [peoples, setPeoples] = useState<peoples[]>([])
    // const [planets, setPlanets] = useState<planets[]>([])
    // const [starShips, setStarShips] = useState<starShips[]>([])

    // const change = <T,>(name: string, value: T[], setValue: React.Dispatch<React.SetStateAction<T[]>>, res: any) => {
    //     // const changeValue = {...searchOutPut, [name]: res}; 
    //     setValue({...value, [name]: res});
    //     console.log(name)
    //     console.log(res)
    // } 

    const {search, setSearch} = useContext(SearchInputContext);
    const {films, setFilms} = useContext(FilmsContext);
    const {peoples, setPeoples} = useContext(PeopleContext);
    const {planets, setPlanets} = useContext(PlanetsContext);
    const {starShips, setStarShips} = useContext(StarShipsContext);
    
    // useEffect(() => {
    //     StarWars.film().then(res => {
    //         setFilms(res)
    //     })
    //     StarWars.people().then(res => {
    //         setPeoples(res)
    //     })
    //     StarWars.planet().then(res => {
    //         setPlanets(res)
    //     })
    //     StarWars.starShip().then(res => {
    //         setStarShips(res)
    //     })
    // }, [search]);

    return (
        <div className="header">
            <input className="headerSearch" typeof="text" placeholder='&#x1F50D;&#xFE0E; Search By Title, Genre and Years'
            // не знаю почему не работает debounce
            // onChange={e => debounce(() => {
            //     setSearch?.(e.target.value)
            // }, 350)}>
            onChange={e => setSearch?.(e.target.value)}
            value={search}>
            </input>
            <div className='headerSearchResoult' style={{display: search===''?'none':''}}>
                <div className='searchGroup' style={{display: films.filter(el => search !== '' || undefined  ? el.title.toLowerCase().includes(`${search}`.toLowerCase()) || el.created.toLowerCase().slice(0,4).includes(`${search}`.toLowerCase()) : true).length===0?'none':'block'}}>
                    <div className='searchGroupName'>Films</div>
                    {films.filter(el => search !== '' || undefined  ? el.title.toLowerCase().includes(`${search}`.toLowerCase()) || el.created.toLowerCase().slice(0,4).includes(`${search}`.toLowerCase()) : true).map(el => {
                        return (
                            <div className='SearchGroupInfo'>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={require(`../../assets/images/films/${el.episode_id}.webp`)} alt='img' className='searchFilmImg' />
                                <div>
                                    <div>{el.title}</div>
                                    <div>{el.release_date.slice(0,4)}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='searchGroup' style={{display: peoples.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).length===0?'none':'block'}}>
                    <div className='searchGroupName'>People</div>
                    {peoples.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).map(el => {
                        return (
                            <div className='SearchGroupInfo'>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={el.image} alt='img' className='searchFilmImg' />
                                <div>
                                    <div>{el.name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='searchGroup' style={{display: planets.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).length===0?'none':'block'}}>
                <div className='searchGroupName'>Planets</div>
                    {planets.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).map(el => {
                        return (
                            <div className='SearchGroupInfo'>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={require(`../../assets/images/planets/${el.name}.webp`)} alt='img' className='searchFilmImg planets' />
                                <div>{el.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='searchGroup' style={{display: starShips.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).length===0?'none':'block'}}>
                    <div className='searchGroupName'>Star ships</div>
                    {starShips.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).map(el => {
                        return (
                            <div className='SearchGroupInfo'>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={require(`../../assets/images/starShips/${el.model.replace('/', '')}.webp`)} alt='img' className='searchFilmImg' />
                                <div>{el.name}</div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
            <div style={{color: 'white'}}>Alexey Samoylo</div>
        </div>
    )
}

export default Header;