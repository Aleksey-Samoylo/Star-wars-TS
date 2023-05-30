import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Films, Peoples, Planets, StarShips } from '../../../Context/interface';
import { StarWars } from '../../../api/agent';
import './Detailse.scss'

interface Detailse {
    img: string,
    detailseInfo: [string]
    name: string,
    episode?: string,
}

interface Props {
    name?: string,
    detailseInfo?: string[],
    arrInfo?: string[]
    // arr: Films | Peoples | Planets | StarShips
}

const DetailsePage = (props: Props) => {
    const { id } = useParams();
    const [value, setValue] = useState<Films | Peoples | Planets | StarShips>()
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (props.name === 'films') {
            StarWars.films(id).then(res => {
                setValue(res);
                setLoading(true);
            })
        }
    }, [])
    // console.log(value)

    const PageLoading = () => {
        return (
            <div>Loading</div>
        )
    }

    // Тут стоит понимать, что я делаю запросы что бы показать, что в обычном варианте сайта не будет сразу грузится абсолютно все данные,
    // как у меня в SearchInputContext, в том случае данные должны грузится для поиска отдельно, и отдаватся мне в разных массивах в res,
    // и тут так же отдельно, даже учитывая количество запросов, они бы мне отдавались например все люди в одном массиве,
    // все планеты и тд в другом массиве, другого запроса

    interface ArrInfo {
        name: string,
        id?: string[],
        info?: string[],
    }

    // переименовать метод, и желательно вынести его в элементы
    const ArrayInformation = (props: ArrInfo) => {
        const [viewValue, setViewValue] = useState<number>(0)
        const [arr, setArr] = useState([]); //Добавить сюда interface, когда пытаюсь добавить несколько он ругается, что не может найти название ключа
        const [loading, setLoading] = useState<boolean>(false);
        useEffect(() => {
            StarWars[props.name]().then(res => {
                setArr(res);
                
                setLoading(true);
            })
        }, [])
        
        if (loading === true) {
            return (
                <div className='ArrayInformation' style={{display: 'flex', gap: '20px'}}>
                    {props.id.map(el => {
                        // console.log(arr[el])
                        // console.log(`../../../assets/images/${props.name}/${props.name==='films'?`${el+1}`:props.name==='planets'?`${arr[el].name}`:`${arr[el].model}`}.webp`)
                        return (
                            <div>
                                {props.name==='peoples'?<img src={arr[el].image} alt='img' style={{width: '100px'}} />:<img style={{width: '100px'}} src={require(`../../../assets/images/${props.name}/${props.name==='films'?`${el+1}`:props.name==='planets'?`${arr[el].name}`:`${arr[el].model.replace('/', '')}`}.webp`)} alt='img' />}
                                {props.name === 'films'? <div>{arr[el].title}</div>:<div style={{color: 'white'}}>{arr[el].name}</div>}
                            </div>
                        )
                    })}
                </div>
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
                <div className="TopInfoDeteils">
                    <img src={require(`../../../assets/images/${props.name}/${id}.webp`)} alt='img' className='mainImg' />
                    <div className="TextInfoHead" style={{color: 'white'}}>
                        {props.detailseInfo.map(el => {
                            console.log(value[el])
                            return(
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <div>{el.replace('_', ' ')}:</div>
                                    <div>{value[el]}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {props.arrInfo.map(el => {
                    return (
                        <ArrayInformation name={el==='characters'?'peoples':el} id={value[el]} />
                    )
                })}
                
            </>
        )
    }
    
    
    return (
        <div className="deteilsPage">
            {loading? <PageTrue />: <PageLoading />}
        </div>
    )
}

export default DetailsePage;