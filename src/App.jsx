import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre]=useState('')

  useEffect(() => {
    console.log('useEffect')
    setNombre(import.meta.env.VITE_NOMBRE)
    console.log(import.meta.env.VITE_NOMBRE)
    console.log(import.meta.env.VITE_APELLIDO)
    console.log(import.meta.env.VITE_EDAD)
    console.log(import.meta.env.VITE_CARGO)
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi version de prueba para crear un pipeline/actions en gitlab/github</h1>
      <p>Verificando mi primer CI</p>
      <p>Nombre: {nombre} - {import.meta.env.VITE_CARGO}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
