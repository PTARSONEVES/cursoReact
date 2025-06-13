import { useState } from "react";
const Listas = () => {
    const [lists, setLists] = useState([
        {id: 1, name: "Água"},
        {id: 2, name: "Terra"},
        {id: 3, name: "Ar"},
        {id: 4, name: "Fogo"}
    ]);

    // Obtendo o array de id´s

    const numList = [
        lists.map((list) =>
            list.id,
        )
    ];
    const arrNum = numList[0];
    console.log('Array de Id´s atualizado: ', arrNum);

    // Obtendo o maior id

    let num = arrNum.reduce(function (a,b){
        return Math.max(a,b);
    }, -Infinity);
    console.log('Id maior existente no array: ',num);

    // Eliminando um item restante aleatoriamente

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * (num+1));
        console.log('Numero Randomico: ', randomNumber);

        setLists((prevLists) => {
            return prevLists.filter((list) => randomNumber !== list.id);
        });
    };
  return (
    <div>
        <ul>
            {lists.map((list) => (
                <li key={list.id}>{list.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Apagar item aleatório</button>
    </div>
  );
}

export default Listas