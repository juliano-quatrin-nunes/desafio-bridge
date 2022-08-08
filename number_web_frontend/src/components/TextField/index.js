import './TextField.css'

const TextField = (props) => {

    const changeValue = (evento) => {
        props.onChange(evento.target.value)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input 
                disabled={props.disabled} 
                placeholder={props.placeholder}
                onChange={changeValue}
                value={props.value}
            />
        </div>
    )
}

export default TextField