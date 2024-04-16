import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);  
 

  // Get current date
  const date = new Date();
  date.setDate(date.getDate() + count)



  // function handleStepDec() {
  //   setStep(step => step - 1);
  // }

  // function handleStepInc() {
  //   setStep(step => step + 1);
  // }

  function handleCountDec() {
    setCount(count => count - step);
  }

  function handleCountInc() {
    setCount(count => count + step);
  }
  function handelReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div className="button-container">
        <input type='range' min="1" max="10" value={step} onChange={(e)=> setStep(Number(e.target.value))}/>
        {/* <button className="button" onClick={handleStepDec}>-</button> */}
        <p>step : {step}</p>
        {/* <button className="button" onClick={handleStepInc}>+</button> */}
      </div>
      <div className="button-container">
        <button className="button" onClick={handleCountDec}>-</button>
        <input type='text' value={count} onChange={(e)=> setCount(Number(e.target.value))}/>
        {/* <p>count: {count}</p> */}
        <button className="button" onClick={handleCountInc}>+</button>
      </div>

      <div className="result">
        <p>
          <span>
            {count === 0
             ? "Today is " 
             : count > 0
            ?`${count} days from today is `
           : `${count} days ago was `}
           </span>
           <span>{date.toDateString()}</span>
        </p>
      </div>

      {(count!==0 || step!==1) ? <div>
      <button onClick={handelReset}>Reset</button>
      </div> : null}
    </div>
  );
}

export default App;
