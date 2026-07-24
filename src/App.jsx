
import './App.css'
import Users from './components/Users';

const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());
console.log(usersPromise);

function App() {

  return (
    <>

      <h2>Users management Client</h2>
      <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App
