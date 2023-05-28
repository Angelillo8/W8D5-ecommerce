
const BasketListItem = ({plant}) => {

    return (
        <li> {plant.common_name} - ({plant.scientific_name[0]}) - £ {plant.price} </li>
    );
};

export default BasketListItem;