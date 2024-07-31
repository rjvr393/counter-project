import './App.css';
import {useState} from 'react';


const App = () => 
  {

    const [counter,setCounter] = useState(0);


    return(
      <div classname="App">
        <h2>COUNTER</h2>
        <button onClick={()=>setCounter((nextCount)=>nextCount+1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      </div>
    );
  }

export default App;
