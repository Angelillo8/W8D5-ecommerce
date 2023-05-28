import BasketList from "../components/BasketList";

const Basket = ({plantsBasket}) => {

    const totalInBasket = plantsBasket.reduce((total, currentValue) => {
        return total + currentValue.price
    },0);

    return (
        <>
            <h1>This is your shopping basket {plantsBasket.length}</h1>
            <BasketList plantsBasket={plantsBasket}/>
            <p>Your total is {totalInBasket}</p>
        </>
    );
};

export default Basket;