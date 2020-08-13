import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Poem Page</h1>
      <h2>
        When I heard the learn’d astronomer,<br/>
        When the proofs, the figures, were ranged in columns before me,<br/>
        When I was shown the charts and diagrams, to add, divide, and measure them,<br/>
        When I sitting heard the astronomer where he lectured with much applause in the lecture-room,<br/>
        How soon unaccountable I became tired and sick,<br/>
        Till rising and gliding out I wander’d off by myself,<br/>
        In the mystical moist night-air, and from time to time,<br/>
        Look’d up in perfect silence at the stars.<br/>
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://golang.org/">Go</a>{' '}
        function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
