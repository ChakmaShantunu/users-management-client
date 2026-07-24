import { use } from "react";


const Users = ({ usersPromise }) => {
    const usersData = use(usersPromise);
    console.log(usersData);
    return (
        <div>
            {
                usersData.map((user) => <p key={user.id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;