import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Bob' lastName='Row' age={45} location='New York'/>
    </div>
  );
}

export default App;
