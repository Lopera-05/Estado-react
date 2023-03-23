import React from 'react'
import { useState } from 'react'
import './Curso.css';

function Curso(props){

  const [curso, setCurso] = useState('Curso de React');
  const [software, setSoftware] = useState('Visual Studio Code');
  const [descripcion, setDescripcion] = useState('Curso de React con Hooks');
  const [image, setImage] = useState('./img/3d.jpg');

  const changeCourse = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setCurso(valueInput) 

    e.target.previousSibling.value ='';
    }

    const changeCourse2 = (e) => {
      e.preventDefault();
      const valueInput = e.target.previousSibling.value;
      setSoftware(valueInput) 
  
      e.target.previousSibling.value ='';
      }

      const changeCourse3 = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setDescripcion(valueInput) 
    
        e.target.previousSibling.value ='';
        }

        const changeImg = (e) => {
          e.preventDefault();
          const valueInput = e.target.src;
          setImage(valueInput) 
          }
  return(
    <div>
      <div className='row'>
    <div className=' text-curso col-12 col-lg-6' style={{background: `url(${image}) center/cover`}}>
        <h1 className='text-white text-lg-start'> {curso}</h1>
        <p className='text-white mt-4'>{software}</p>
        <p className='text-white'>{descripcion}</p>
        <button>¡Inscribete!</button>
    </div>

    <div className='contenido col-12 col-lg-6'>
       <div>
       <input className='form-control' type="text" name="curso" id="nombres" placeholder="Nombre del curso"/>
        <button onClick={changeCourse} className='btn btn-primary'>Actualizar</button>
      </div>
        
        <div>
        <input className='form-control' type="text" name="software" id="apellidos" placeholder="Software"/>
        <button onClick={changeCourse2} className='btn btn-primary'>Actualizar</button>
        </div>

        <div>
        <input className='form-control' type="email" name="descripcion" id="correo" placeholder="Descripción"/>
        <button onClick={changeCourse3} className='btn btn-primary'>Actualizar</button>
        </div>

        <div onClick={changeImg} className='actualizar-img'>
            <h5>Cambiar fondo</h5>
            <a href=""><img src="./img/code.jpg" width="70px" alt=""  /></a>
            <a href=""><img src="./img/3d.jpg" width="70px" alt=""  /></a>
            <a href=""><img src="./img/K6Rz.gif" width="70px"  alt=""  /></a>
            <a href=""><img src="./img/car.jpg" width="70px"  alt=""  /></a>
        </div>
    </div>
</div>
    </div> 
  );
}
export default Curso