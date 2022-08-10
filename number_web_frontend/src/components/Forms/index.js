import './Forms.css'
import TextField from '../TextField'
import Button from '../Button'
import { useState } from 'react'

const Forms = (props) => {

    // Requisições para o backend local
    async function sendForm (evento) {
        evento.preventDefault()
        let res = await fetch(`http://localhost:8080/api/v1/number/${numK}`)
        let response = await res.json()
        setNumNTempo(response)
        props.submit();
    }

    // Requisições para o backend hospedado no heroku
    /*async function sendForm (evento) {
        evento.preventDefault()
        let res = await fetch(`https://number-app-backend.herokuapp.com/api/v1/number/${numK}`)
        let response = await res.json()
        setNumNTempo(response)
        props.submit();
    }*/

    const [numK, setNumK] = useState('')
    const [numNTempo, setNumNTempo] = useState('')

    return (
        <section className='forms'>
            <form onSubmit={sendForm}>
                <TextField 
                    label='Número inteiro (k)' 
                    placeholder='Digite um número inteiro > 1'
                    value={numK}
                    onChange={setNumK}
                />
                <Button>Calcule o número n</Button>
                <TextField 
                    disabled 
                    label='Quantidade de (n)' 
                    placeholder=''
                    value={numNTempo[0]}
                />
                <label>Tempo para calcular &asymp; {numNTempo[1]}ms</label>
            </form>
        </section>
    )
}

export default Forms