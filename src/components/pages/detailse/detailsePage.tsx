import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Films, Peoples, Planets, StarShips } from '../../../Context/interface';
import { StarWars } from '../../../api/agent';
import './Detailse.scss'
import { Circles } from 'react-loader-spinner';
import { ToApperCase } from '../../../elements/toApperCase';

interface Props {
    name?: string,
    detailseInfo?: string[],
    arrInfo?: string[]
}
interface ArrInfo {
    name: string,
    id?: string[],
    info?: string[],
}

const DetailsePage = (props: Props) => {
    const { id } = useParams();
    const [value, setValue] = useState<any>();
    const [pageLoading, setPageLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
            StarWars[props.name](id).then(res => {
                setValue(res);
                setPageLoading(true);
            })
    }, [id, props.name])

    const PageLoading = () => {
        return (
            <Circles
                height="40"
                width="40"
                color="blue"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        )
    }

    const ArrayInformation = (props: ArrInfo) => {
        const [viewValue, setViewValue] = useState<number>(0)
        const [arr, setArr] = useState([]);
        const [arrLoading, setArrLoading] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(false)
        useEffect(() => {
            StarWars[props.name]().then(res => {
                setArr(res);
                setLoading(true);
            })
        }, [])

        const LoadMore = () => {
            setArrLoading(true)
            setTimeout(() => {setViewValue(viewValue+5); setArrLoading(false)}, 350)
        }

        if (props.id !== undefined && loading) {
            return (
                <>
                    <div style={{color: 'white'}}>{ToApperCase(props.name)}</div>
                    <div className='ArrayInformation' style={{display: 'flex', gap: '20px'}}>
                        {props.id.slice(0, viewValue+5).map(el => {
                            
                            if (Number(el)-1<=arr.length&&props.name!==undefined){
                                if (props.name==='planets') {
                                }
                                return (
                                    <>
                                        <div className={`arrItem ${props.name==='planets'?'planets':''}`} onClick={() => {setPageLoading(false) ;navigate(`/${props.name}/${el}`)}}>
                                            {props.name==='peoples'?<img src={arr[Number(el)-1].image} alt='img' />:<img src={require(`../../../assets/images/${props.name}/${props.name==='films'?`${el}`:props.name==='planets'?`${arr[Number(el)-1].name}`:`${arr[Number(el)-1].model.replace('/', '')}`}.webp`)} alt='img' />}
                                            {props.name === 'films'? <div className='arrText'>{arr[Number(el)-1].title}</div>:<div style={{color: 'white'}}>{arr[Number(el)-1].name}</div>}
                                        </div>
                                        <div className='footer'></div>
                                    </>
                                )
                            }
                        })}
                    </div>
                    {arrLoading?<PageLoading />: ''}
                    <button style={{display: viewValue+5>=props.id.length?'none': ''}} className='loadMoreButton' onClick={LoadMore}>Load More</button>
                </>

            )
        } else {
            return (
                <PageLoading />
            )
        }
    }

    const PageTrue = () => {
        return (
            <>
                <div className={`TopInfoDeteils ${props.name==='planets'?'planets':''}`}>
                    {props.name==='peoples'?<img className='mainImg' src={value.image} alt='img' />:<img className={`mainImg ${props.name==='planets'?'planets':''}`} src={require(`../../../assets/images/${props.name}/${props.name==='films'?`${id}`:props.name==='planets'?`${value.name}`:`${value.model.replace('/', '')}`}.webp`)} alt='img' />}
                    <div className="TextInfoHead" style={{color: 'white'}}>
                        {props.detailseInfo.map(el => {
                            if (value[el] !== undefined) {
                                return(
                                    <div style={{display: 'flex', gap: '10px'}}>
                                        <div>{ToApperCase(el.replace('_', ' '))}:</div>
                                        <div>{value[el]}</div>
                                    </div>
                                )
                            }
                        })}
                        <div style={{
                            display: props.name==='films'?'':'none', 
                            color: 'white', marginTop: '20px'}}>
                            {props.name==='films'? value.opening_crawl: ''}
                        </div>
                    </div>
                </div>
                {props.arrInfo.map(el => {
                    if (value[el]!==undefined && value[el].length !==0) {
                        return (
                            <ArrayInformation name={el==='characters' || el==='pilots' || el==='residents'?'peoples':el} id={value[el]} />
                        )
                    }
                })}
                
            </>
        )
    }
    
    
    return (
        <div className="deteilsPage">
            {pageLoading? <PageTrue />: <PageLoading />}
        </div>
    )
}

export default DetailsePage;