import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(0)
  const [stbyDisplay, setStbyDisplay] = useState('')
  const [equation, setEquation] = useState('')
  // const bts = ['7','8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'reset', '=']
  function handleNumbers(target) {
    const numero = target.innerText;
    if (Number(display) === 0 ) {
      setDisplay(numero);
    }else {
      setDisplay(display + numero);
    }
  }
  function handleReset(){
    setDisplay(0)
  }
  function handleEquations(target) {
    setStbyDisplay(display);
    setDisplay(0);
    setEquation(target.innerText)
  }
  return (
    <div>
      <div>
        <p>Calculator</p>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div>{`${stbyDisplay} ${equation}`}</div>
      <div>{display}</div>
    {/* {bts.map((botao) => (
      <button
        onClick={({target}) => handleNumbers(target)}
        key={botao}
      >
        {botao}
      </button>
    ))} */}
      <div>
        <button onClick={({target}) => handleNumbers(target)}>7</button>
        <button onClick={({target}) => handleNumbers(target)}>8</button>
        <button onClick={({target}) => handleNumbers(target)}>9</button>
        <button>DEL</button>
      </div>
      <div>
        <button onClick={({target}) => handleNumbers(target)}>4</button>
        <button onClick={({target}) => handleNumbers(target)}>5</button>
        <button onClick={({target}) => handleNumbers(target)}>6</button>
        <button onClick={({target}) => handleEquations(target)}>+</button>
      </div>
      <div>
        <button onClick={({target}) => handleNumbers(target)}>1</button>
        <button onClick={({target}) => handleNumbers(target)}>2</button>
        <button onClick={({target}) => handleNumbers(target)}>3</button>
        <button onClick={({target}) => handleEquations(target)}>-</button>
      </div>
      <div>
        <button>.</button>
        <button onClick={({target}) => handleNumbers(target)}>0</button>
        <button>/</button>
        <button>x</button>
      </div>
      <div>
        <button onClick={() => handleReset()}>Reset</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
