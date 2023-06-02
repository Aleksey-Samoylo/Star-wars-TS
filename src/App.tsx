import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import ContentContext from "./Context/searchInputContext";
import FilmsPage from "./components/pages/films";
import PeoplesPage from "./components/pages/peoples";
import PlanetsPage from "./components/pages/planets";
import StarShipsPage from "./components/pages/starShips";
import DetailsePage from "./components/pages/detailse/detailsePage";
// import Page from "./elements/page";


function App() {
  if (localStorage.getItem('layout')===null){
    localStorage.setItem('layout', JSON.stringify({films: true, peoples: true, planets: true, starShips: true}))
  }
  if (localStorage.getItem('sort')===null){
    localStorage.setItem('sort', JSON.stringify({films: {sort: true, sortType: true}, peoples: true, planets: {sort: true, sortType: true}, starShips: {sort: true, sortType: true}}))
  }

  return (
    <div className="App">
      <ContentContext >
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<FilmsPage />} />
            <Route path='/films' element={<FilmsPage />} />
            <Route path='films/:id' 
              element={<DetailsePage 
                name={'films'} 
                detailseInfo={['title', 'episode_id', 'director', 'producer', 'release_date']} 
                arrInfo={['planets', 'starships', 'characters']} />} />
            <Route path='/peoples' element={<PeoplesPage />} />
            <Route path='peoples/:id' 
              element={<DetailsePage 
                name={'peoples'} 
                detailseInfo={['name', 'born', 'bornLocation', 'died', 'diedLocation', 'eye_color', 'gender', 'hair_color', 'height', 'homeworld', 'mass', 'skin_color']} 
                arrInfo={['films', 'starships']} />} />
            <Route path='/planets' element={<PlanetsPage />} />
            <Route path='planets/:id' 
              element={<DetailsePage 
                name={'planets'}
                detailseInfo={['name', 'climate', 'diameter', 'gravity', 'orbital_period', 'population', 'rotation_period', 'surface_water', 'terrain']} 
                arrInfo={['films', 'residents']} />} />
            <Route path='/starships' element={<StarShipsPage />} />
            <Route path='starships/:id' 
              element={<DetailsePage 
                name={'starships'} 
                detailseInfo={['name', 'model', 'starship_class', 'passengers', 'max_atmosphering_speed', 'manufacturer', 'length', 'hyperdrive_rating', 'crew', 'cost_in_credits', 'consumables', 'cargo_capacity', 'MGLT']} 
                arrInfo={['films', 'pilots']} />} />
          </Routes>
        </Router>
      </ContentContext>
    </div>
  );
}

export default App;
