import { use } from "react";


const Users = ({ usersPromise }) => {
    const usersData = use(usersPromise);
    console.log(usersData);
    return (
        <div>

        </div>
    );
};

export default Users;