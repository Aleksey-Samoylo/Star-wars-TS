import { useContext, useState } from 'react'
import { FilmsContext, PeopleContext, StarShipsContext } from '../../Context/searchInputContext';
import Page from '../../elements/page';
import { useNavigate } from 'react-router-dom';
// import { Params } from '../../Context/interface';

const StarShipsPage = () => {
    const { starShips, setStarShips } = useContext(StarShipsContext);
    const [sort, setSort] = useState<boolean>(JSON.parse(localStorage.getItem('sort')).starShips.sortType);
    const [sortType, setSortType] = useState<boolean>(JSON.parse(localStorage.getItem('sort')).starShips.sortType);
    const navigate = useNavigate();

    const Sort = (x, y) => {
        if (sortType=== true) {
            if (sort === true) {
                return Number(x.cost_in_credits==='unknown' || x.cost_in_credits===undefined? '10000000000000000' : x.cost_in_credits)-(Number(y.cost_in_credits==='unknown' || y.cost_in_credits===undefined? '10000000000000000' : y.cost_in_credits));
            } else {
                return Number(y.cost_in_credits==='unknown' || y.cost_in_credits===undefined? '0' : y.cost_in_credits)-(Number(x.cost_in_credits==='unknown' || x.cost_in_credits===undefined? '0' : x.cost_in_credits));
            }
        } else {
            if (sort === true) {
                return Number(x.cargo_capacity==='unknown' || x.cargo_capacity===undefined? '10000000000000000' : x.cargo_capacity)-(Number(y.cargo_capacity==='unknown' || y.cargo_capacity===undefined? '10000000000000000' : y.cargo_capacity));
            } else {
                return Number(y.cargo_capacity==='unknown' || y.cargo_capacity===undefined? '0' : y.cargo_capacity)-(Number(x.cargo_capacity==='unknown' || x.cargo_capacity===undefined? '0' : x.cargo_capacity));
            }
        }
    }

    return (
        <Page name={'planets'} sort={sort} setSort={setSort} sortType={sortType} setSortType={setSortType} firstSortName={'Cost'} secondSortName={'Cargo'} >
            {starShips.sort(Sort).map(el => {
                return (<div className='List' onClick={() => navigate(`/starships/${el.id}`)}>
                    <img src={require(`../../assets/images/starships/${el.model.replace('/', '')}.webp`)} alt='img' />
                    <div className='ListInfo'>
                        <div>{el.name}</div>
                        <div>{el.cost_in_credits}</div>
                        <div>{el.cargo_capacity}</div>
                        {/* <div>{el.release_date}</div> */}
                    </div>
                </div>)
            })}
        </Page>
    )
}

export default StarShipsPage;