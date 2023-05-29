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
            <Route path='films/:id' element={<DetailsePage />} />
            <Route path='/peoples' element={<PeoplesPage />} />
            <Route path='/planets' element={<PlanetsPage />} />
            <Route path='/starships' element={<StarShipsPage />} />
          </Routes>
        </Router>
      </ContentContext>
    </div>
  );
}

export default App;
