import './Forms.css'
import TextField from '../TextField'
import Button from '../Button'
import { useEffect, useState } from 'react'

const Forms = (props) => {

    async function sendForm (evento) {
        evento.preventDefault()
        console.log(numK)
        let res = await fetch(`http://localhost:8080/api/v1/number/${numK}`)
        let response = await res.json()
        setNumN(response)
        props.submit();
    }

    const [numK, setNumK] = useState('')
    const [numN, setNumN] = useState('')

    return (
        <section className='forms'>
            <form onSubmit={sendForm}>
                <TextField 
                    label='Número inteiro (k)' 
                    placeholder='Digite o número inteiro desejado'
                    value={numK}
                    onChange={setNumK}    
                />
                <Button>Calcule o número n</Button>
                <TextField 
                    disabled 
                    label='Quantidade de (n)' 
                    placeholder=''
                    value={numN}
                />
            </form>
        </section>
    )
}

export default Forms