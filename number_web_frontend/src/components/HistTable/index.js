import './HistTable.css'

const ContainerHist = (props) => {
    return (
        <section className='hist-section'>
            <h1>Histórico</h1>
            <table>
                <thead>
                    <tr>
                        <th>Número inteiro (k)</th>
                        <th>Quantidade de (n)</th>
                    </tr>
                </thead>
                
                <tbody>
                    {props.numbers.map(number => {
                        return(
                            <tr key={number.numK}>
                                <td>{number.numK}</td>
                                <td>{number.numN}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default ContainerHist