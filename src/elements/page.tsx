import { useState, useContext, ReactNode } from 'react'
import './pages.scss'
import FilmsPage from '../components/pages/films';
import { useParams } from 'react-router-dom';
import { propsPage } from '../Context/interface';




const Page = (props: propsPage) => {
    if (localStorage.getItem('layout')===null){
        localStorage.setItem('layout', JSON.stringify({films: true, people: true, plants: true, starShips: true}))
    }
    // if(localStorage.getItem(sortType)===null){
    //     localStorage.setItem('sortType', true)
    // }
    console.log(JSON.parse(localStorage.getItem('layout'))['films']);


    const [sortType, setSortType] = useState<boolean>(true)
    const [sort, setSort] = useState<boolean>(true);
    const [layout, setLayout] = useState<boolean>(true);

    return (
        <div className="Page">
            <div className='Sort'>
                <div>
                    <div className='block'>
                        <div className='SortText' style={{display: props.name==='films'? '':'none'}} typeof='button' onClick={() => {setSortType(!sortType)}} >{sortType?'Episode':'Relise'}</div>
                        <div className='button' typeof='button' onClick={() => setSort(!sort)} >
                            <div>Sort by</div>
                            <div>{sort ? '▲' : '▼'}</div>
                        </div>
                    </div>
                </div>
                {<div>
                    <img src={require('../assets/images/table_sort.png')} className={!layout ? 'layout img' : ''} alt='img' onClick={() => setLayout(false)} />
                    <img src={require('../assets/images/tile_sort.png')} className={layout ? 'layout img' : ''} alt='img' onClick={() => setLayout(true)} />
                </div>}
            </div>
            <div className={layout ? 'Film row' : 'Film column'}>
                {props.children}
            </div>
        </div>
    )
}


export default Page;