import { use, useState } from "react";



const RestaurantCard = ({ restaurantPromise }) => {

    const initialRestaurants = use(restaurantPromise);
    const [restaurants, setRestaurants] = useState(initialRestaurants);
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
                const newRestaurants = [...restaurants, data];
                setRestaurants(newRestaurants);
                form.reset();
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

            <div>
                {
                    restaurants.map((restaurant) => <p key={restaurant._id}>{restaurant.name} : {restaurant.email} <button>X</button></p>)
                }
            </div>
        </div>
    );
};

export default RestaurantCard;