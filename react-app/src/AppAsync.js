import React, { useState, useCallback } from 'react';
import Card from './Card';

const POKEMONS_PER_PAGE = 12;

const URL = 'https://pokeapi.co/api/v2/pokemon';

// (async () => {
//     // последовательно
//     const data1 = await fetch(url1);
//     const data2 = await fetch(url2 + `?id=${data1.id}`);

//     // параллельно
//     const [data1, data2] = await Promise.all(fetch(url1), fetch(url2))

//     console.log(data1, data2);
// })()



export default () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    async function handleClick(){
        const data = await fetch(`${URL}?offset=${offset}&limit=${POKEMONS_PER_PAGE}`).then(res => res.json());
        const arr = data.results.map(({ name, url }, i) => ({
            name,
            id: url.slice(34,-1),
            catched: false //i % 3 === 0
        }));

        setPokemons([...pokemons, ...arr]);
        setOffset(offset+POKEMONS_PER_PAGE);   
    }

    const changeToggle = useCallback(function (id){
        const arr = pokemons.map(pokemon => {
            if(pokemon.id === id) {
                pokemon.catched = !pokemon.catched;
            }
            return pokemon;
        });
        console.log('>>', arr);
        setPokemons(arr);
    });

    console.log(pokemons);
    return (
        <div>
            {pokemons.map(el => {
                return (
                    <Card
                        key={el.id}
                        name={el.name}
                        id={el.id}
                        catched={el.catched}
                        toggleCatchedPokemon={changeToggle}
                    />
            )})}
            <button onClick={handleClick} > Click button</button>
        </div>);
}



// {
//     name: "bulbasaur"
//     url: "https://pokeapi.co/api/v2/pokemon/1/"
// }

// V
// V
// V

// {
//     "name": "bulbasaur",
//     "id": "1"
// }