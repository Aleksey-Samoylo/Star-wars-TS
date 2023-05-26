import { useContext } from 'react'
import  { PlanetsContext } from '../../Context/searchInputContext';
import Page from '../../elements/page';
import { Params } from '../../Context/interface';

const PlanetsPage = (props: Params) => {
    const { planets, setPlanets } = useContext(PlanetsContext);
    return (
        <Page name={'planets'} >
            {planets.map(el => {
                return (<div className='List'>
                    <img src={require(`../../assets/images/planets/${el.name}.webp`)} style={{borderRadius: '160px'}} alt='img' />
                    <div className='ListInfo'>
                        <div>{el.name}</div>
                        {/* <div>{el.release_date}</div> */}
                    </div>
                </div>)
            })}
        </Page>
    )
}

export default PlanetsPage;