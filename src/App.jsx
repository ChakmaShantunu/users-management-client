
import './App.css'
import RestaurantCard from './components/RestaurantCard';
import Users from './components/Users';

const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());
console.log(usersPromise);

const restaurantPromise = fetch("http://localhost:3000/restaurants").then(res => res.json());
console.log(restaurantPromise);

function App() {

  return (
    <>

      <h2>Users management Client</h2>
      <Users usersPromise={usersPromise}></Users><br /><br />

      <h2>Restaurant Form</h2>
      <RestaurantCard restaurantPromise={restaurantPromise}></RestaurantCard>
    </>
  )
}

export default App
