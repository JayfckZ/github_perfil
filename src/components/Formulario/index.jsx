import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log('O estado mudou')
    })

    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('O componente encerrou')
        }
    }, [])

    useEffect(() => {
        console.log('O estado Nome mudou')
    }, [nome])

    useEffect(() => {
        console.log('Algum estado Notas mudou')
    }, [materiaA, materiaB, materiaC])

    function renderizaNotas(){
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3
        if (media >= 7 && nome!=''){
            return(
                <p>{nome} está aprovado</p>
            )
        } else if(nome!=''){
            return(
                <p>{nome} está reprovado</p>
            )
        }
    }
    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placegolder="Seu nome" onChange={e => setNome(e.target.value)}/>
            <input type="number" placeholder="Nota em matéria A" onChange={e => setMateriaA(parseFloat(e.target.value))}/>
            <input type="number" placeholder="Nota em matéria B" onChange={e => setMateriaB(parseFloat(e.target.value))}/>
            <input type="number" placeholder="Nota em matéria C" onChange={e => setMateriaC(parseFloat(e.target.value))}/>
            {renderizaNotas()}
        </form>
        )
}

export default Formulario