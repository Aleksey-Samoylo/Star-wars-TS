import { useState, useContext } from 'react';
import './header.scss'
import { SearchInputContext } from '../../Context/searchInputContext';

const Header = () => {
    const [fis, setFis] = useState<string>();
    const {search, setSearch} = useContext(SearchInputContext);
    console.log(search)
    

    return (
        <div className="header">
            <input className="headerSearch" typeof="text" placeholder='&#x1F50D;&#xFE0E; Search By Title, Genre and Years'></input>
            <div className='headerSearchResoult'></div>
            <div style={{color: 'white'}}>Alexey Samoylo</div>
        </div>
    )
}

export default Header;