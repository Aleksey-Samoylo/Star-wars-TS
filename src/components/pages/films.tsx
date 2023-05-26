import { useContext, useState } from 'react'
import '../../elements/pages.scss'
import { FilmsContext } from '../../Context/searchInputContext'
import Page from '../../elements/page';
import { Layout, Params, Sort, SortType } from '../../Context/interface';


// const FilmsPage = () => {
//     const [sort, setSort] = useState<boolean>(true);
//     const [layout, setLayout] = useState<boolean>(true);
//     const {films, setFilms} = useContext(FilmsContext);

//     return (
//         <div className="FilmPage">
//             <div className='filmSort'>
//                 <div>
//                     {/* <div className='SortText'>Sort by</div> */}
//                     <div className='block'>
//                         <div className='button' typeof='button' onClick={() => setSort(!sort)}>
//                             <div>Sort by</div>
//                             <div>{sort? '▲' : '▼'}</div>
//                         </div>
//                         {/* <div className='dropdown'>
//                             <div typeof='button' onClick={() => setSort(true)} >Ascending</div>
//                             <div typeof='button' onClick={() => setSort(false)} >Descending</div>
//                         </div> */}
//                     </div>
//                 </div>
//                 {/* <div>
//                     <div className={`layout ${layout?'tiles':'column'}`} onClick={() => setLayout(!layout)} >{layout?'tiles':'column'}</div>
//                 </div> */}
//                 <div>
//                     <img src={require('../../assets/images/table_sort.png')} className={!layout?'layout img':''} alt='img' onClick={() => setLayout(false)} />
//                     <img src={require('../../assets/images/tile_sort.png')} className={layout?'layout img':''} alt='img' onClick={() => setLayout(true)} />
//                 </div>
//             </div>
//             <div className={layout?'Film row':'Film column'}>
//                 {films.map(el => {
//                     return( <div className='FilmList'>
//                     <img src={require(`../../assets/images/films/${el.episode_id}.webp`)} alt='img' />
//                     <div className='FilmListInfo'>
//                         <div>{el.title}</div>
//                         <div>{el.release_date}</div>
//                     </div>
//                 </div>)
//                 } )}
//             </div>
//         </div>
//     )
// }

// interface params {
//     name: string
// }

const FilmsPage = (props: Params) => {
    const { films, setFilms } = useContext(FilmsContext);
    const [sort, setSort] = useState<boolean>()
    const [sortType, setSortType] = useState<boolean>()
    const [layout, setLayout] = useState<boolean>()
    console.log(props.name)
    return (
        <Page name={'films'}>
            {films.map(el => {
                return (<div className='List'>
                    <img src={require(`../../assets/images/films/${el.episode_id}.webp`)} alt='img' />
                    <div className='ListInfo'>
                        <div>{el.title}</div>
                        <div>{el.release_date}</div>
                        <div className='info'>{el.opening_crawl}</div>
                    </div>
                </div>)
            })}
        </Page>
    )
}

export default FilmsPage