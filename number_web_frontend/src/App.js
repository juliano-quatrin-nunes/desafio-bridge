import { useEffect, useState } from 'react';
import Banner from './components/Banner/index.js'
import Forms from './components/Forms/index.js';
import HistTable from './components/HistTable/index.js'

function App() {

  const [numbers, setNumbers] = useState([])

  // Requisições para o backend local
  useEffect(()=>{
    fetch("http://localhost:8080/api/v1/number")
          .then((response) => response.json()
          .then((numbers) => setNumbers(numbers)))
  }, [])

  async function refreshNumbers() {    
    let res = await fetch("http://localhost:8080/api/v1/number")
    let response = await res.json()
    setNumbers(response)
  }

  // Requisições para o backend hospedado no heroku
  /*useEffect(()=>{
    fetch("https://number-app-backend.herokuapp.com/api/v1/number")
          .then((response) => response.json()
          .then((numbers) => setNumbers(numbers)))
  }, [])

  async function refreshNumbers() {    
    let res = await fetch("https://number-app-backend.herokuapp.com/api/v1/number")
    let response = await res.json()
    setNumbers(response)
  }*/


  return (
    <div className='app'style={{backgroundColor: "#24252e", display: 'flex', flexDirection: 'column'}}>
      <Banner />
      <Forms submit={refreshNumbers}/>
      <HistTable 
        numbers={numbers} 
      />
    </div>

  );
}

export default App;
