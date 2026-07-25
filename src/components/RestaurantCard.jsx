

const RestaurantCard = () => {

    const handleAddRestaurant = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const restaurantDetails = { name, email };
        console.log(restaurantDetails);

    }
    return (
        <div>
            <form onSubmit={handleAddRestaurant}>
                <input name='name' type="text" />
                <br />
                <input name='email' type="email" />
                <br />
                <input type="submit" value="add restaurant" />
            </form>
        </div>
    );
};

export default RestaurantCard;