import { useState } from 'react';
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [stbyDisplay, setStbyDisplay] = useState('')
  const [equation, setEquation] = useState('')
  // const [theme, setTheme] = useState(1)
  // const bts = ['7','8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'reset', '=']
  const themas = [
    ['#3A4663','#181F33','#647198','#D03F2F', '#FFFFFF', '#434A59', '#EAE3DC', '#FFFFFF'],
    ['#E6E6E6', '#FFFFFF', '#378187', '#C85402', '#FFFFFF', '#36362C', '#E5E4E1', '#36362C'],
    ['#17062A', '#1E0936', '#56077C', '#00DED0', '#FFFFFF', '#FFE53D', '#331C4D', '#FFE53D']
  ]
  function handleNumbers(target) {
    const numero = target.innerText;
    if (display === 0) {
      setDisplay(numero);
    } else {
      setDisplay(display + numero);
    }
  }
  function handleReset() {
    setDisplay('0');
    setEquation('');
    setStbyDisplay('');
  }
  function handleEquations(target) {
    if (equation === '') {
      setStbyDisplay(display);
      setDisplay('0');
      setEquation(target.innerText);
    }
    else {
      setEquation(target.innerText);
    }
  }
  function handleDEL() {
    let result = String(display);
    let resultString = result.split('');
    resultString.pop();
    const returnedValue = resultString.join('');
    returnedValue.length === 0 ? setDisplay('0') : setDisplay(returnedValue);
  }
  function handleEqual() {
    if (equation === '') {
    } else {
      if (equation === '+') {
        setDisplay(Number(display) + Number(stbyDisplay));
        resetValues();
      } else if (equation === '-') {
        setDisplay(Number(stbyDisplay) - Number(display));
        resetValues();
      } else if (equation === 'x') {
        setDisplay(Number(stbyDisplay) * Number(display));
        resetValues();
      } else if (equation === '/') {
        setDisplay(Number(stbyDisplay) / Number(display));
        resetValues();
      }
    }
  }

  function resetValues() {
    setEquation('');
    setStbyDisplay('');
  }
  function handleDecimal() {
    const toCheck = String(display)
    if (toCheck.includes('.')) {
    } else {
      setDisplay(`${display}.`)
    }
  }
  function changeTheme(target) {
    // console.log(target.innerText);
    const color = themas[target.innerText - 1]
    document.documentElement.style.setProperty('--one', color[0]);
    document.documentElement.style.setProperty('--two', color[1]);
    document.documentElement.style.setProperty('--btsDr', color[2]);
    document.documentElement.style.setProperty('--btEqual', color[3]);
    document.documentElement.style.setProperty('--font-01', color[4]);
    document.documentElement.style.setProperty('--font-02', color[5]);
    document.documentElement.style.setProperty('--btnBackGround', color[6]);
  }
  return (
    <div className='container'>
      <div className='top'>
        <p>Calculator</p>
        <section>
          <button onClick={({target}) => changeTheme(target)}>1</button>
          <button onClick={({target}) => changeTheme(target)}>2</button>
          <button onClick={({target}) => changeTheme(target)}>3</button>
        </section>
      </div>
      <div className='display-container'>
        <div>{`${stbyDisplay} ${equation}`}</div>
        <div className='display'>{display}</div>
      </div>
      {/* {bts.map((botao) => (
      <button
        onClick={({target}) => handleNumbers(target)}
        key={botao}
      >
        {botao}
      </button>
    ))} */}
      {/* <div className='buttons-container'>
        <div>
          <button onClick={({target}) => handleNumbers(target)}>7</button>
          <button onClick={({target}) => handleNumbers(target)}>8</button>
          <button onClick={({target}) => handleNumbers(target)}>9</button>
          <button className='dr' onClick={() => handleDEL()}>DEL</button>
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
          <button onClick={() => handleDecimal()}>.</button>
          <button onClick={({target}) => handleNumbers(target)}>0</button>
          <button onClick={({target}) => handleEquations(target)}>/</button>
          <button onClick={({target}) => handleEquations(target)}>x</button>
        </div>
        <div>
          <button className='dr' onClick={() => handleReset()}>Reset</button>
          <button className='equal-color' onClick={() => handleEqual()}>=</button>
        </div>
      </div> */}
      <div className='buttons-container-grid'>

        <button onClick={({ target }) => handleNumbers(target)}>7</button>
        <button onClick={({ target }) => handleNumbers(target)}>8</button>
        <button onClick={({ target }) => handleNumbers(target)}>9</button>
        <button className='dr' onClick={() => handleDEL()}>DEL</button>


        <button onClick={({ target }) => handleNumbers(target)}>4</button>
        <button onClick={({ target }) => handleNumbers(target)}>5</button>
        <button onClick={({ target }) => handleNumbers(target)}>6</button>
        <button onClick={({ target }) => handleEquations(target)}>+</button>


        <button onClick={({ target }) => handleNumbers(target)}>1</button>
        <button onClick={({ target }) => handleNumbers(target)}>2</button>
        <button onClick={({ target }) => handleNumbers(target)}>3</button>
        <button onClick={({ target }) => handleEquations(target)}>-</button>


        <button onClick={() => handleDecimal()}>.</button>
        <button onClick={({ target }) => handleNumbers(target)}>0</button>
        <button onClick={({ target }) => handleEquations(target)}>/</button>
        <button onClick={({ target }) => handleEquations(target)}>x</button>


        <button className='dr reset' onClick={() => handleReset()}>Reset</button>
        <button className='equal-color' onClick={() => handleEqual()}>=</button>

      </div>
    </div>
  );
}

export default App;
