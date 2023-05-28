import SearchList from "../components/SearchList";
import React, { useState, useEffect } from 'react';

const PlantList = ({ plantsResult, getPlants, addPlantToBasket }) => {

    useEffect(() => {
        getPlants()
      }, []);

    return (
        <>
            <SearchList indoorPlants={plantsResult} addPlantToBasket={addPlantToBasket} />
        </>
    );
};

export default PlantList;