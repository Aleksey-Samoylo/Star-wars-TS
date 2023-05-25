import { useContext, useEffect, useState } from 'react';
import './header.scss'
import { SearchInputContext } from '../../Context/searchInputContext';
import debounce from '../debounce/debounce';
import { StarWars } from '../../api/agent';
import { Interface } from 'readline';
import { Url } from 'url';
// import { SearchInputContext } from '../../Context/searchInputContext';

const Header = () => {
    // const [film, setFilm] = useState();
    // const [people, setPeople] = useState();
    // const [planet, setPlanet] = useState();
    // const [starShip, setStarShip] = useState();
    interface films {
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
    interface peoples {
        birth_year: string,
        born: number,
        bornLocation: [string],
        created: string,
        died: string,
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
        species: string,
        starships: [string],
        vehicles: [string],
        wiki: Url,
    }
    interface valueFirst {
        film: films[],
        people: peoples[],
        planet: [],
        starShip: []
    }

    const {search, setSearch} = useContext(SearchInputContext);
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
    const [films, setFilms] = useState<films[]>([])
    const [peoples, setPeoples] = useState<peoples[]>([])
    // const [planets, setPlanets] = useState<any>([])
    // const [starShips, setStarShips] = useState<any>([])

    const change = <T,>(name: string, value: T[], setValue: React.Dispatch<React.SetStateAction<T[]>>, res: any) => {
        // const changeValue = {...searchOutPut, [name]: res}; 
        setValue({...value, [name]: res});
        console.log(name)
        console.log(res)
    } 
    
    useEffect(() => {
        StarWars.film().then(res => {
            // change('film', films, setFilms, res)
            setFilms(res)
            // console.log(films)
            // console.log(films)
        })
        StarWars.people().then(res => {
            // change('people', peoples, setPeoples, res)
            setPeoples(res)
        })
        // StarWars.planet().then(res => {
        //     change('planet', planets, setPlanets, res)
        // })
        // StarWars.starShip().then(res => {
        //     change('starShip', starShips, setStarShips, res)
        // })
    }, [search]);

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
            <div className='headerSearchResoult'>
                <div className='searchGroup'>
                    <div className='searchGroupName'>Films</div>
                    {films.filter(el => search !== '' || undefined  ? el.title.toLowerCase().includes(`${search}`.toLowerCase()) || el.created.toLowerCase().slice(0,4).includes(`${search}`.toLowerCase()) : true).map(el => {
                        return (
                            <div className='SearchGroupInfo'>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={require(`../../assets/images/films/${el.episode_id}.webp`)} alt='img' className='searchFilmImg' />
                                <div>
                                    <div>{el.title}</div>
                                    <div>{el.created.slice(0,4)}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='searchGroup'>
                    <div>People</div>
                    {peoples.filter(el => search !== '' || undefined  ? el.name.toLowerCase().includes(`${search}`.toLowerCase()) : true).map(el => {
                        return (
                            <div className='SearchGroupInfo'>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={el.image} alt='img' className='searchFilmImg' />
                                <div>
                                    <div>{el.name}</div>
                                    <div>{el.bornLocation}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='searchGroup'>
                    <div>Planets</div>
                </div>
                <div className='searchGroup'>
                    <div>Star ships</div>
                </div>
            </div>
            <div style={{color: 'white'}}>Alexey Samoylo</div>
        </div>
    )
}

export default Header;