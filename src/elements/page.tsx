import { useState, useContext, ReactNode } from 'react'
import './pages.scss'
import FilmsPage from '../components/pages/films';
import { useParams } from 'react-router-dom';
import { PageProps } from '../Context/interface';




const Page = (props: PageProps) => {
    const [layout, setLayout] = useState<boolean>(JSON.parse(localStorage.getItem('layout'))[props.name]);
    const LayoutSet = (a: boolean) => {
        const layout = JSON.parse(localStorage.getItem('layout'));
        layout[props.name] = a
        localStorage.setItem('layout', JSON.stringify(layout))
    }

    return (
        <div className="Page">
            <div className='Sort'>
                <div>
                    <div className='block'>
                        <div className='SortText' style={{display: props.sort!==undefined? '':'none'}} typeof='button' onClick={() => {props.setSortType(!props.sortType)}} >{props.sortType?props.firstSortName:props.secondSortName}</div>
                        <div className='button' typeof='button' onClick={() => props.setSort(!props.sort)} >
                            <div>Sort by {props.sortNameOnly}</div>
                            <div>{props.sort ? '▲' : '▼'}</div>
                        </div>
                    </div>
                </div>
                {<div>
                    <img src={require('../assets/images/table_sort.png')} className={!JSON.parse(localStorage.getItem('layout'))[props.name] ? 'layout img' : ''} alt='img' onClick={() => {setLayout(false); LayoutSet(false)}} />
                    <img src={require('../assets/images/tile_sort.png')} className={JSON.parse(localStorage.getItem('layout'))[props.name] ? 'layout img' : ''} alt='img' onClick={() => {setLayout(true); LayoutSet(true) }} />
                </div>}
            </div>
            <div className={layout ? 'Film row' : 'Film column'}>
                {props.children}
            </div>
        </div>
    )
}


export default Page;