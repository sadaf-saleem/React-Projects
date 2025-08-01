import { useState } from 'react'

const App = () => {
  const colors = JSON.parse(localStorage.getItem('color'));
  const [r, setR] = useState(colors && colors.r ? colors.r : 0);
  const [g, setG] = useState(colors && colors.g ? colors.g : 0);
  const [b, setB] = useState(colors && colors.b ? colors.b : 0);

  const save = () => {
    localStorage.setItem("color", JSON.stringify({ r, g, b }));
  }

  return (
    <div>
      <h1>Color Mixer</h1>
      <div style={{ backgroundColor: `rgb(${r},${g},${b})`, height: 200, width: 200 }}></div>

      <label htmlFor="">Red</label>
      <input
        type="range"
        min={0}
        max={255}
        value={r}
        onChange={(event) => setR(Number(event.target.value))}
      />

      <br /><br />

      <label htmlFor="">Green</label>
      <input
        type="range"
        min={0}
        max={255}
        value={g}
        onChange={(event) => setG(Number(event.target.value))}
      />

      <br /><br />

      <label htmlFor="">Blue</label>
      <input
        type="range"
        min={0}
        max={255}
        value={b}
        onChange={(event) => setB(Number(event.target.value))}
      />

      <br /><br />
      <button onClick={save}>Save Color Combination</button>
    </div>
  )
}

export default App;
