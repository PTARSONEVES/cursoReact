import { useState } from "react";

const Events = () => {
    let nmi=1;

    const [number, setNumber] = useState(nmi);
    const handleMyEvent = () => {
        setNumber(number+1);
        console.log(number);
        return <p>Valor:{number}</p>
    };
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    );

};

export default Events;