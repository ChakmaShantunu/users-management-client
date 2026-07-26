import { use, useState } from "react";


const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);
    console.log(initialUsers);

    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        // create user in the server

        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after post', data);
                const newUsers = [...users, data];
                setUsers(newUsers);
                form.reset();
            })
    }
    return (
        <div>

            <form onSubmit={handleAddUser}>
                <input name="name" type="text" />
                <br />
                <input name="email" type="email" />
                <br />
                <input type="submit" value="add user" />
            </form>
            <div>
                {
                    users.map((user) => <p key={user.id}>{user.name} : {user.email} <button>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;