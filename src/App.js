import { useState } from 'react'
import './App.css';

function App() {
  const rowCol = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]
  const [checked, setChecked] = useState([]);
  const setBox = (index) => {
    if (checked.length > 15 || checked.includes(index)) {
      return
    }
    setChecked([...checked, index])
    console.log(checked);
  }
  return (
    <div className="App">
      <div className="container pt-5">
        <div>
          {rowCol.map((row, i) => (
            <div className='row' key={i}>
              {row.map((col, j) => (
                <div onClick={() => { setBox(col) }} className={`col border border-dark ${checked.length <= 2 && checked[0] === col ? 'bg-danger' : checked.slice(Math.max(checked.length - 2, 1)).includes(col) ? 'bg-danger' : ""}`} style={{ height: '100px', background: 'blue' }}>
                  <p>
                    {checked.includes(col) ? `Box #${col}` : ""}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
