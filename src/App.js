import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import SearchList from './components/SearchList';
import PlantList from './componentsRoute/PlantList';
import Home from './componentsRoute/Home';
import NavBar from './components/NavBar';
import Basket from './componentsRoute/Basket';

const veryPrivateKey = process.env.REACT_APP_VERY_PRIVATE_KEY

function App() {

  const [plantsResult, setPlantsResults] = useState([])
  const [plantsBasket, setPlantsBasket] = useState([]);

  const getPlants = function () {
    const url = `https://perenual.com/api/species-list?key=${veryPrivateKey}&indoor=1`
    fetch(url)
      .then(res => res.json())
      .then(plantsData => setPlantsResults(plantsData.data))
  };

  const addPlantToBasket = (newPlantToBastet) => {
    const newPlantsBasket = [...plantsBasket, newPlantToBastet]
    setPlantsBasket(newPlantsBasket)
  };

  return (
    <div>
      <h1>Hello</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants/" element={<PlantList plantsResult={plantsResult} getPlants={getPlants} addPlantToBasket={addPlantToBasket} />} />
          <Route path="/basket/" element={<Basket plantsBasket={plantsBasket} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
