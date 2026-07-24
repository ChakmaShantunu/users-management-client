import { use } from "react";


const Users = ({ usersPromise }) => {
    const usersData = use(usersPromise);
    console.log(usersData);

    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
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
                    usersData.map((user) => <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;