import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import ContentContext from "./Context/searchInputContext";
import FilmsPage from "./components/pages/films";


function App() {
  const [search, setSearch] = useState<string>('');
  const change = () => {
    setSearch('hello')
  };

  return (
    <div className="App">
      <ContentContext >
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<FilmsPage />} />
          </Routes>
        </Router>
      </ContentContext>
    </div>
  );
}

export default App;
