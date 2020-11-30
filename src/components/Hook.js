import React,{ useEffect, useState} from 'react'
import './Hook.css';

function Hook() {
 
    const [count, setCount] = useState(0);

        // Similar a componentDidMount y componentDidUpdate:
         useEffect(() => {
        // Actualiza el título del documento usando la Browser API
            document.title = `You clicked ${count} times`;
        });
         return(
             <div className="cajaHook">
                 <h1>Contador con hook</h1>
                 <p>You clicked {count} times</p> <br/>
                 <button  onClick={()=>setCount(count +1)}>Conta  dor positivo</button>
                 <button  onClick={()=>setCount(count -1)}>Contador negativo</button>
             </div>
         )
    
}



export default Hook;