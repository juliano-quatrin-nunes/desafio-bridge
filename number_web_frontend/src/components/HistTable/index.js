import './HistTable.css'

const ContainerHist = (props) => {
    return (
        <table className='hist-table'>
            <thead>
                <tr>
                    <th>Número inteiro (k)</th>
                    <th>Quantidade de (n)</th>
                </tr>
            </thead>
            
            <tbody>
                {props.numbers.map(number => {
                    return(
                        <tr key={number.name}>
                            <td>{number.numK}</td>
                            <td>{number.numN}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ContainerHist