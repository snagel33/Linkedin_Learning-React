import './App.css';
import { useState, useEffect, useReducer } from 'react';

function GitHubUser({login}) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
      </div>
    )
  }
  return null;
}

function App() {
  const [year, setYear] = useState(2020);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  const [checked, setChecked] = useState(false);
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  

  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  useEffect (() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);

  useEffect(() => {
    // alert(`checked: ${checked.toString()}`);
  })
  return (
    <>
      <div>
        <GitHubUser login="moonhighway" />
      </div>
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
      <div>
        <label>
          Favorite Phrase:
          <input 
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        </label>
        <br />
        <label>
          Second Favorite Phrase:
          <input 
            value={val2}
            onChange={e => setVal2(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}

// function App() {
//   const [checked, toggle] = useReducer(
//     checked => !checked, 
//     false
//   );

//   return (
//     <>
//       <input type="checkbox" 
//         value={checked}
//         onChange={toggle}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   )
// }



// function GitHubUser({login}) {
//   const [data, setData] = useState(null)
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//     .then(res => res.json())
//     .then(setData)
//     .catch(console.error)
//   }, []);

//   if (data) {
//     return (
//       <div>
//         <h1>{data.login}</h1>
//         <img src={data.avatar_url} width={100} />
//       </div>
//     )
//   }
//   return null;
// }

// function App() {
//   return <GitHubUser login="moonhighway" />
// }

// function Phrase() {
//   const [val, setVal] = useState("");
//   const [val2, setVal2] = useState("");

//   useEffect(() => {
//     console.log(`field 1: ${val}`);
//   }, [val]);

//   useEffect (() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2]);

//   return (
//     <>
//       <label>
//         Favorite Phrase:
//         <input 
//           value={val}
//           onChange={e => setVal(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Second Favorite Phrase:
//         <input 
//           value={val2}
//           onChange={e => setVal2(e.target.value)}
//         />
//       </label>
//     </>
//   )
// }

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

