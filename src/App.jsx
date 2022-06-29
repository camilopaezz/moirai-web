import './App.css'
import { useState } from 'react'

const API_URL = 'https://whispering-woodland-26878.herokuapp.com/api/'
// const API_URL = 'http://localhost:3001/api/'

function App() {
  const [data, setData] = useState(null)
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    const data = await fetch(`${API_URL}${input}`, {
      method: 'GET',
      mode: 'cors'
    })
    console.log(data)
    const json = await data.json()


    console.log(json)

    setData(json)
  }

  return (
    <div className='App'>
      <h1>MOIRAI</h1>
      <p>Consulta tu destino:</p>
      <form className='form' onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Escribe tu ID aquí'
          className='input'
        />
        <button className='button'>Consultar</button>
      </form>
      {data ? (
        <div className='chatContainer'>
          <p>
            {!data.error
              ? data.killed
                ? 'Te han ASESINADO'
                : 'Te han DEJADO SEGUIR'
              : null}
          </p>
          <p>
            {data.error ? 'No se encontró el ID' : null}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default App
