import { use } from "react";


const Animals = ({ animalsPromise }) => {

    const initialAnimals = use(animalsPromise);
    console.log(initialAnimals);
    return (
        <div>

        </div>
    );
};

export default Animals;