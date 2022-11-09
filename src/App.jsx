import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsuariosAgg from '../components/UsuariosAgg'
function App() {
 

  return (
    <div className="App">
    <UsuariosAgg/>
    <p className='footer-text'>derechos bryans2022 agregando usuarios</p>
    <p className='footer-text'>actualizacion/le falta localstorage y muy pronto base de datos y una bsuqeda por id y name</p>
    </div>
  )
}

export default App
