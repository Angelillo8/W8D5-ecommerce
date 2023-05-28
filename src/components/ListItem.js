

const ListItem = ({ plant, addPlantToBasket }) => {

    const handleOnChange = () => {
        addPlantToBasket(plant)
    }

    return (
        <>
            <li> {plant.common_name} - ({plant.scientific_name[0]}) - £ {plant.price} <button onClick={handleOnChange}>Add to basket</button></li>
        </>
    );
};

export default ListItem;