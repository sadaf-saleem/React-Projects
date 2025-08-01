import React, { useState } from 'react';
import data from './Components/data'; // ✅ corrected import
import './App.css'; // ✅ removed space

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount)); // ✅ using correct variable
  };

  return (
    <div>
      <section className='section-center'>
        <h3>Generate Lorem Ipsum</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn'>Generate</button>
        </form>
        <article>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </div>
  );
}

export default App;
