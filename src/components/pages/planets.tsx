import { useContext, useState } from 'react'
import  { PlanetsContext } from '../../Context/searchInputContext';
import Page from '../../elements/page';
import { useNavigate } from 'react-router-dom';
// import { Params } from '../../Context/interface';

const PlanetsPage = () => {
    const { planets, setPlanets } = useContext(PlanetsContext);
    const [sort, setSort] = useState<boolean>(JSON.parse(localStorage.getItem('sort')).planets.sort);
    const [sortType, setSortType] = useState<boolean>(JSON.parse(localStorage.getItem('sort')).planets.sortType);
    const navigate = useNavigate();

    const Sort = (x, y) => {
        if (sortType=== true) {
            if (sort === true) {
                return Number(x.diameter)-(Number(y.diameter));
            } else {
                return Number(y.diameter)-(Number(x.diameter));
            }
        } else {
            if (sort === true) {
                return Number(x.population==='unknown' || x.population===undefined? '0' : x.population)-(Number(y.population==='unknown' || y.population===undefined? '0' : y.population));
            } else {
                return Number(y.population==='unknown' || y.population===undefined? '0' : y.population)-(Number(x.population==='unknown' || x.population===undefined? '0' : x.population));
            }
        }
    }

    return (
        <Page name={'planets'} sort={sort} setSort={setSort} sortType={sortType} setSortType={setSortType} firstSortName={'Diameter'} secondSortName={'Population'} >
            {planets.sort(Sort).map(el => {
                return (<div className='List planets' onClick={() => navigate(`/planets/${el.id}`)}>
                    <img className='planets' src={require(`../../assets/images/planets/${el.name}.webp`)} style={{borderRadius: '160px'}} alt='img' />
                    <div className='ListInfo'>
                        <div>{el.name}</div>
                        <div>{el.diameter}</div>
                        <div>{el.population}</div>
                        {/* <div>{el.release_date}</div> */}
                    </div>
                </div>)
            })}
        </Page>
    )
}

export default PlanetsPage;