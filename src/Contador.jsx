import { useState } from 'react';


function Contador({startState}) {
    const [cuenta,setCuenta] = useState(startState ?? 0);

    return (
    <div>
    <p>Contador: {cuenta}</p>
    <button onClick={()=> setCuenta(cuenta+1)}>
        +
    </button>
    </div>
    
    );
}
export default Contador
