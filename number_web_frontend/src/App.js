import { func } from 'prop-types';
import { useState } from 'react';
import Banner from './components/Banner/index.js'
import Forms from './components/Forms/index.js';
import HistTable from './components/HistTable/index.js'

function App() {

  async function refreshNumbers() {
    let res = await fetch("http://localhost:8080/api/v1/number")
    let response = await res.json()
    setNumbers(response)
  }

  const [numbers, setNumbers] = useState([])

  return (
    <div>
      <header>
        <Banner />
        <Forms submit={refreshNumbers}/>
        <HistTable 
          numbers={numbers} 
        />
      </header>
    </div>
    
  );
}

export default App;
