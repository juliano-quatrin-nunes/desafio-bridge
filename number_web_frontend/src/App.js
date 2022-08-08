import Banner from './components/Banner/index.js'
import Forms from './components/Forms/index.js';
import HistTable from './components/HistTable/index.js'

function App() {

  const numbers = [{
    name: 'teste',
    valor: 5
  }]

  return (
    <div>
      <header>
        <Banner />
        <Forms />
        <HistTable numbers={numbers} />
      </header>
    </div>
    
  );
}

export default App;
