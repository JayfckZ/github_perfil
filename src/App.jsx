import { useState } from 'react'

import Perfil from './components/Perfil'
// import Formulario from './components/Formulario'
import RepoList from './components/Repolist'

function App() {
  // const [formVisible, setFormVisible] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  
  
  return (
    <>
    <div className="flex">
      <input className='input' type="text" placeholder='Insira seu nome de usuário do GitHub' onBlur={e => setNomeUsuario(e.target.value)}/>
    </div>

      {nomeUsuario.length >= 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <RepoList nomeUsuario={nomeUsuario}/>
        </>
      )}
      {/* {formVisible && <Formulario />}

      <button onClick={() => setFormVisible(!formVisible)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
