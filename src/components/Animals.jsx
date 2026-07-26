import { use, useState } from "react";


const Animals = ({ animalsPromise }) => {

    const initialAnimals = use(animalsPromise);
    const [animals, setAnimals] = useState(initialAnimals);
    // console.log(animals);

    const handleAddAnimal = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const scientificName = form.scientificName.value;
        const animal = { name, scientificName };
        // console.log(animal);

        fetch("http://localhost:3000/animals", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(animal)
        })
            .then(res => res.json())
            .then(data => {
                console.log("data after post", data);
                const newAnimals = [...animals, data];
                setAnimals(newAnimals);
                form.reset()
            })
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

            <div>
                {
                    animals.map((animal) => <p key={animal.id}>{animal.name} : {animal.scientificName} <button>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Animals;