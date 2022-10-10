import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [year, setYear] = useState(2020);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    // alert(`checked: ${checked.toString()}`);
  })
  return (
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Rachel")}>New Manager</button>
      </div>
      <div className="Status">
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
      </div>
      <div>
        <input 
          type="checkbox" 
          value={checked} 
          onChange={() => setChecked(checked => !checked)}  
        />
        {checked ? "checked" : "not checked"}
      </div>
    </>
  );
}

// function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     alert(`checked: ${checked.toString()}`);
//   })
//   return (
//     <>
//       <input 
//         type="checkbox" 
//         value={checked} 
//         onChange={() => setChecked(checked => !checked)}  
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   )
// }

export default App;

