import { useState, useEffect } from "react"

import styles from './RepoList.module.css'

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 2500)
            })
    }, [nomeUsuario])
    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.listItemName}>
                                <b>Nome: </b> {repositorio.name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b c >Linguagem: </b> {repositorio.language}
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visite o repositório</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RepoList