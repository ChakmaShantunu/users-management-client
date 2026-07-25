import { use } from "react";



const RestaurantCard = ({ restaurantPromise }) => {

    const initialRestaurants = use(restaurantPromise);
    console.log(initialRestaurants);

    const handleAddRestaurant = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const restaurantDetails = { name, email };
        console.log(restaurantDetails);

        fetch("http://localhost:3000/restaurants", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(restaurantDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log("data after post", data);
            })

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