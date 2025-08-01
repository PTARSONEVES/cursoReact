import { useState } from "react";


export const TrataData = (vdata) => {

    const[teste, setTeste] = useState(null);
    console.log('teste inicial: ',teste); 

//    const [dataConv, setDataConv] = useState(); 
    console.log('vdata: ',vdata);
    const dataReact = () => {
        let vll = vdata.toString();
        console.log('VLL: ',vll);
        if(vll == null) {
            return null;
        } else {
            return (vll.slice(8,10)+'.'+vll.slice(5,7)+'.'+vll.slice(0,4));
        }
    };

    let vlx = dataReact();
    setTeste(vlx);
    console.log('vlx: ',vlx);
    console.log('teste final: ',teste); 

    return { teste };


}