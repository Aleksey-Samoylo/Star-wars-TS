import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import ContentContext from "./Context/searchInputContext";
import FilmsPage from "./components/pages/films";
import PeoplesPage from "./components/pages/peoples";
import PlanetsPage from "./components/pages/planets";
import StarShipsPage from "./components/pages/starShips";
// import Page from "./elements/page";


function App() {
  
  // if (localStorage.getItem('sortItems')===null) {
  //   localStorage.setItem('sortItems')
  // }

  return (
    <div className="App">
      <ContentContext >
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<FilmsPage name={'films'} />} />
            <Route path='/peoples' element={<PeoplesPage name={'peoples'} />} />
            <Route path='/planets' element={<PlanetsPage name={'planets'} />} />
            <Route path='/starships' element={<StarShipsPage />} />
          </Routes>
        </Router>
      </ContentContext>
    </div>
  );
}

export default App;
