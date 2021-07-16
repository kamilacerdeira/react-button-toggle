import {useState} from 'react';
import { Container } from './styles';
import { GlobalStyle } from './styles/global';

function App() {

  const [turnOff, setTurnOff] = useState("ON");

  function handleClick () {
    if (turnOff === "ON") {
      setTurnOff("OFF");
    } else {
      setTurnOff("ON")
    } 
  }

  return (
    <>
      <Container>
        <h1>React Button Toggle</h1>
        <button onClick={() => handleClick()}>{turnOff}</button>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
