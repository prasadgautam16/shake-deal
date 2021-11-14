// Redux
import { Provider } from 'react-redux';
import store from './store';

import Container from './components/Container/Container'
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header>Assign your task</Header>
        <Container></Container>
      </div>
    </Provider>
  );
}

export default App;
