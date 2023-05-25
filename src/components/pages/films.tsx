import { useState, useContext } from 'react'
import './pages.scss'
import { FilmsContext } from '../../Context/searchInputContext'


const FilmsPage = () => {
    const [sort, setSort] = useState<boolean>(true);
    const [layout, setLayout] = useState<boolean>(true);
    const {films, setFilms} = useContext(FilmsContext);

    return (
        <div className="FilmPage">
            <div className='filmSort'>
                <div>
                    {/* <div className='SortText'>Sort by</div> */}
                    <div className='block'>
                        <div className='button' typeof='button' onClick={() => setSort(!sort)}>
                            <div>Sort by</div>
                            <div>{sort? '▲' : '▼'}</div>
                        </div>
                        {/* <div className='dropdown'>
                            <div typeof='button' onClick={() => setSort(true)} >Ascending</div>
                            <div typeof='button' onClick={() => setSort(false)} >Descending</div>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div className={`layout ${layout?'tiles':'column'}`} onClick={() => setLayout(!layout)} >{layout?'tiles':'column'}</div>
                </div>
            </div>
            <div className={layout?'Film row':'Film column'}>
                {films.map(el => {
                    return( <div className='FilmList'>
                    <img src={require(`../../assets/images/films/${el.episode_id}.webp`)} alt='img' />
                    <div className='FilmListInfo'>
                        <div>{el.title}</div>
                        <div>{el.release_date}</div>
                    </div>
                </div>)
                } )}
            </div>
        </div>
    )
}

export default FilmsPage