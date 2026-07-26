
import './App.css'
import Animals from './components/Animals';
import RestaurantCard from './components/RestaurantCard';
import Users from './components/Users';

const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());
// console.log(usersPromise);

const restaurantPromise = fetch("http://localhost:3000/restaurants").then(res => res.json());
// console.log(restaurantPromise);

const animalsPromise = fetch("http://localhost:3000/animals").then(res => res.json());

function App() {

  return (
    <>

      <h2>Users management Client</h2>
      <Users usersPromise={usersPromise}></Users><br /><br />

      <h2>Restaurant Form</h2>
      <RestaurantCard restaurantPromise={restaurantPromise}></RestaurantCard>

      <h2>Animals Management</h2>
      <Animals animalsPromise={animalsPromise}></Animals>
    </>
  )
}

export default App
