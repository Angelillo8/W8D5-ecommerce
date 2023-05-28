import ListItem from "./ListItem";


const SearchList = ({ indoorPlants, addPlantToBasket }) => {

    const listComponents = indoorPlants.map((plant) => {

        plant.price = plant.id/100

        return (
                <ListItem
                    key={plant.id}
                    plant={plant}
                    price={plant.price}
                    addPlantToBasket={addPlantToBasket}
                />
        );
    });

    return (
        <>
            <ul>
                {listComponents}
            </ul>
        </>
    );
};

export default SearchList;