import { useEffect, useState } from 'react';

function Input_sin_e() {
    const[palabra,setPalabra] = useState('');
    /*
    useEffect(() => {
        var longitud = palabra.length;
        var caracter = palabra.slice(longitud-1,longitud);
        if(caracter == 'e' | caracter == 'E'){
            setPalabra(palabra.slice(0,longitud-1));
        }
    }, [palabra])*/

    function cambio(e){
        setPalabra(e.target.value);
        var longitud = palabra.length;
        var caracter = palabra.slice(longitud-1,longitud);
        if(caracter == 'e' | caracter == 'E'){
        setPalabra(palabra.slice(0,longitud-1));
    }}

    return(
        <>
        <p>Input sin e</p>
        <input type='text' onChange={(e) => cambio(e)} value={palabra}
        />
        </>
    );
}
export default Input_sin_e;