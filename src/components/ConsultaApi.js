import React, { useEffect,useState} from 'react'

import axios from 'axios';

function ConsultaApi (){

    // aca definimos el stado y el setState
    //definis un array 
    const [datos, setDatos] = useState([]);


    //son como tres ciclo de vidas juntas
    useEffect(() => {
          obtenerDatos();   // componenetdidmount
    }, [])


    const obtenerDatos = async()=>{
          const res =  await axios.get('https://jsonplaceholder.typicode.com/posts');
          console.log(res.data);
          setDatos(res.data)
    }


    return(
        <div>
            {
                datos.map((e,i)=>{
                       return(
                        <ul key={i}>
                          <li>{e.id}</li>
                          <li>{e.title}</li>
                          <hr/>
                        </ul>
                       )
                })
            }
        </div>
    )



}// fin funcion


export default ConsultaApi;


