import React from 'react'
import { useState } from 'react'
function Pantalla({texto}) {
    /* let nombre = 'Mariana' // se crea una variable que se pueda llamar en el retorno */
   /*  const [nombre, setNombre] = useState('Mariana');

    function cambiarNombre() {
      // nombre= 'Alex';
      // console.log(nombre)
      setNombre ('Luis')
        
    } */

    const [contador, setContador] = useState (0);

    let incrementar = function (){
      setContador(contador+1)
    }

    let decremento = function(){
      setContador(contador-1)

    }

    
var n1 = prompt("Escribe un número")

    if (decremento <= 0) {
      document.write ("limite")
    }
  return (
    <div>
        <h1>{contador}</h1>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decremento}>Decrementar</button>
    </div>
  )
}

export default Pantalla