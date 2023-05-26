import { useContext } from 'react'
import { PeopleContext } from '../../Context/searchInputContext';
import Page from '../../elements/page';
import { Params } from '../../Context/interface';

const PeoplesPage = (props: Params) => {
    const { peoples, setPeoples } = useContext(PeopleContext);
    return (
        <Page name={'peoples'}>
            {peoples.map(el => {
                return (<div className='List'>
                    <img src={el.image} alt='img' style={{height: '300px'}} />
                    <div className='ListInfo'>
                        <div>{el.name}</div>
                        {/* <div>{el.release_date}</div> */}
                    </div>
                </div>)
            })}
        </Page>
    )
}

export default PeoplesPage;