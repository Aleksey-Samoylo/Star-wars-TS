import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import { SearchInputContext } from "./Context/searchInputContext";


function App() {
  const [search, setSearch] = useState<string>('');
  const change = () => {
    setSearch('hello')
  };

  return (
    <div className="App">
      <SearchInputContext.Provider value={{search, setSearch}} >
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<h1>Main</h1>} />
          </Routes>
        </Router>
      </SearchInputContext.Provider>
    </div>
  );
}

export default App;
