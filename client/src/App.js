import Container from './components/Container/Container'
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header>Assign your task</Header>
      <Container></Container>
    </div>
  );
}

export default App;
