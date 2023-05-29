import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Detailse {
    img: string,
    detailseInfo: {
        name: string,
        episode?: number,
        realise_date?: string,
    }
    name: string,
    episode?: string,
}

const DetailsePage = () => {
    // const id = useParams(id)
    const [info, setInfo] = useState<Detailse>();

    return (
        <div className="deteilsPage">
            <div className="TopInfoDeteils">
                {/* <img src={require(info.img)} alt="img" /> */}
                <div className="TextInfoHead" style={{color: 'white'}}>
                    {/* {Object.values(info.detailseInfo).map(el => {
                        return (
                            <div>el</div>
                        )
                    })} */}
                    <div>name</div>
                    <div>episode</div>
                    <div>realise date</div>
                </div>
            </div>
        </div>
    )
}

export default DetailsePage;