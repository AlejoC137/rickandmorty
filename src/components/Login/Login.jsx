import React, { useState } from 'react'
import styles from  './Login.module.css'


const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;



export function validate(inputs) {
const  errors = {}

if (!inputs.name) {
  errors.name = 'Se requiere un nombre';
}

if (!regexEmail.test(inputs.email)) {
  errors.email = 'Debe ser un correo electrónico';
}

if (!inputs.password) {
  errors.password = 'Se requiere un password';
}

return errors

}

export default function Login () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    password: '',
 });
 
 const [errors, setErrors] = React.useState({
  name: '',
  email: '',
  password: '',

});

const handleSubmit = event => {
  event.preventDefault()

 const errorsArray = Object.values(errors)
if( errorsArray.length === 0 ) {
window.alert("Datos completos")
} else {
  window.alert("Debe llenar todos los campos")
}

  // console.log(errorsArray);
}

 const handlerChange = event => {


  setInputs({
    ...inputs,
    [event.target.name] : event.target.value
  })

  setErrors(
    validate({
       ...inputs,
       [event.target.name]: event.target.value,
    })
 );

 }

  return (
  <div className={ styles.logindiv } >
    <br/>
    <form 
    className={ styles.logform }
    onSubmit={handleSubmit} 
    >

        <label>
           Escribe tu Tag name:  
        </label>
        <input 
          className={errors.name && 'warning'}
          onChange={handlerChange}
          name='name'
          value={inputs.name}
          type='text'
          placeholder='Escribe tu nombre...'
          />
          <p className='danger'>
          {errors.name ? errors.name : null}
        </p>

        <label>
          Correo Electrónico: 
        </label>
        <input 
          className={errors.email && 'warning'}
          onChange={handlerChange}
          name='email'
          value={inputs.email}
          type='text'
          placeholder='Escribe tu email...'
          />
          <p className='danger'>
            {errors.email ? errors.email : null}
          </p>


        <label>
          Escribe tu password: 
        </label>
        <input 
          className={errors.password && 'warning'}
          onChange={handlerChange}
          name='password'
          value={inputs.password}
          type='password'
          placeholder='Escribe tu password...'
          />
          <p className='danger'>
            {errors.password ? errors.password : null}
          </p>

      <button 
        type='submit'
      >Enviar</button>
      </form>  

<br/>
  </div>
  )
}
