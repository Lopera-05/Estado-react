import React from 'react'
import { useState } from 'react';

function Juego() {

    let opc = ['piedra', 'papel', 'tijera'];
    //creamos variables, una de usuario y otra de maquina
    
    const [human, setHuman] = useState('')
    const [robot, setRobot] = useState('');

    let juegoMaquina = () => {
        let randomOpcMaquina = Math.round( Math.random()*(opc.length-1) );
        setRobot( opc[randomOpcMaquina])
    }

    let juegoHuman = (e) => {
        setHuman(e.target.innerText)
        juegoMaquina();
    }

  return (
    <div className='pantalla'>
        <div>
            <h4>Humano</h4>
            <h1 style={{color: 'orange'}}>{human}</h1>
        </div>
        <div>
            <h4>Robot</h4>
            <h1>{robot}</h1>
        </div>
        <div>
            <button onClick={juegoHuman}>Piedra</button>
            <button onClick={juegoHuman}>Papel</button>
            <button onClick={juegoHuman}>Tijera</button>

        </div>
    </div>
  )
}

export default Juego