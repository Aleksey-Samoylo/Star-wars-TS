import { useContext, useState } from 'react'
import { PeopleContext } from '../../Context/searchInputContext';
import Page from '../../elements/page';
// import { Params } from '../../Context/interface';

const PeoplesPage = () => {
    const { peoples, setPeoples } = useContext(PeopleContext);
    const [sort, setSort] = useState<boolean>(JSON.parse(localStorage.getItem('sort')).peoples)
    peoples.map(el => console.log(el.birth_year))

    const Sort = (x, y) => {
        if (sort === true) {
            return Number(x.birth_year==='unknown' || x.birth_year===undefined? '0': x.birth_year.replace('BBY', ''))-Number((y.birth_year==='unknown' || y.birth_year===undefined? '0': y.birth_year.replace('BBY', '')));
        } else {
            return Number(y.birth_year==='unknown' || y.birth_year===undefined? '0': y.birth_year.replace('BBY', ''))-Number((x.birth_year==='unknown' || x.birth_year===undefined? '0': x.birth_year.replace('BBY', '')));
        }
    }

    return (
        <Page name={'peoples'} sort={sort} setSort={setSort} sortNameOnly={'Birth Year'} >
            {peoples.sort(Sort).map(el => {
                return (<div className='List'>
                    <img src={el.image} alt='img' style={{height: '300px'}} />
                    <div className='ListInfo'>
                        <div>{el.name}</div>
                        {/* <div>{el.release_date}</div> */}
                    </div>
                    <div>{el.birth_year}</div>
                </div>)
            })}
        </Page>
    )
}

export default PeoplesPage;