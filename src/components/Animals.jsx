import { use } from "react";


const Animals = ({ animalsPromise }) => {

    const initialAnimals = use(animalsPromise);
    console.log(initialAnimals);

    const handleAddAnimal = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const scientificName = form.scientificName.value;
        const animal = { name, scientificName };
        console.log(animal);
    }

    return (
        <div>
            <form onSubmit={handleAddAnimal}>
                <input name="name" type="name" />
                <br />
                <input name="scientificName" type="scitificName" />
                <br />
                <input type="submit" value="add animal" />
            </form>
        </div>
    );
};

export default Animals;