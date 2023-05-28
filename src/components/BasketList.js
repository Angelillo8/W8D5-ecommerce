import BasketListItem from "./BasketListItem";

const BasketList = ({plantsBasket}) => {

    const basketListComponents = plantsBasket.map((plant) => {

        return (
                <BasketListItem
                    key={plant.id}
                    plant={plant}
                />
        );
    });

    return (
        <ul>
            {basketListComponents}
        </ul>
    )
}

export default BasketList;