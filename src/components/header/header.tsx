import { useContext, useEffect } from 'react';
import './header.scss'
import { FilmsContext, PeopleContext, PlanetsContext, SearchInputContext, StarShipsContext } from '../../Context/searchInputContext';
import debounce from '../debounce/debounce';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const {search, setSearch} = useContext(SearchInputContext);
    const {films, setFilms} = useContext(FilmsContext);
    const {peoples, setPeoples} = useContext(PeopleContext);
    const {planets, setPlanets} = useContext(PlanetsContext);
    const {starShips, setStarShips} = useContext(StarShipsContext);
    const navigate = useNavigate();
    
    const debouncedSearch =  debounce(setSearch, 1000)
    return (
        <div className="header">
            <input className="headerSearch" typeof="text" placeholder='&#x1F50D;&#xFE0E; Search By Title, Genre and Years'
            // не знаю почему не работает debounce
            // onChange={e => debounce(() => {            //     setSearch?.(e.target.value)
            // }, 350)}>
            onChange={e => debouncedSearch(e.target.value)}
            >
            </input>
            <div className='headerMenuButton'>
                <div onClick={() => navigate('/films')}>Films</div>
                <div onClick={() => navigate('/peoples')}>Peoples</div>
                <div onClick={() => navigate('/planets')}>Planets</div>
                <div onClick={() => navigate('/starships')}>Star ships</div>
            </div>
            <div className='headerSearchResoult' style={{display: search===''?'none':''}}>
                <div className='searchGroup' style={{display: films.filter(el => search !== '' || undefined  ? el.title.toLowerCase().includes(`${search}`.toLowerCase()) || el.created.toLowerCase().slice(0,4).includes(`${search}`.toLowerCase()) : true).length===0?'none':'block'}}>
                    <div className='searchGroupName'>Films</div>
                    {films.filter((el) => search !== '' || undefined  ? el.title.toLowerCase().includes(`${search}`.toLowerCase()) || el.created.toLowerCase().slice(0,4).includes(`${search}`.toLowerCase()) : true).map((el, index) => {
                        return (
                            <div className='SearchGroupInfo' typeof='button' onClick={() => navigate(`/films/${el.id}`)}>
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
                            <div className='SearchGroupInfo'  onClick={() => navigate(`/peoples/${el.id}`)}>
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
                            <div className='SearchGroupInfo'  onClick={() => navigate(`/planets/${el.id}`)}>
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
                            <div className='SearchGroupInfo'  onClick={() => navigate(`/starships/${el.id}`)}>
                                {/* реально забыл как тут указывать пусть сразу от главной папки */}
                                <img src={require(`../../assets/images/starships/${el.model.replace('/', '')}.webp`)} alt='img' className='searchFilmImg' />
                                <div>{el.name}</div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
            {/* <div style={{color: 'white'}}>Alexey Samoylo</div> */}
        </div>
    )
}

export default Header;