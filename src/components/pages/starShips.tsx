import { useContext, useState } from 'react'
import { FilmsContext, PeopleContext, StarShipsContext } from '../../Context/searchInputContext';
import Page from '../../elements/page';
import { Params } from '../../Context/interface';

const StarShipsPage = (props: Params) => {
    const { starShips, setStarShips } = useContext(StarShipsContext);
    return (
        <Page name={'planets'} >
            {starShips.map(el => {
                return (<div className='List'>
                    <img src={require(`../../assets/images/starShips/${el.model.replace('/', '')}.webp`)} alt='img' />
                    <div className='ListInfo'>
                        <div>{el.name}</div>
                        {/* <div>{el.release_date}</div> */}
                    </div>
                </div>)
            })}
        </Page>
    )
}

export default StarShipsPage;