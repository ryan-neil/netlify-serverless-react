import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Serverless Functions Example</h1>

      <p>
        This is a simple example of how we can add Netlify serverless functions
        to our <b>React</b> applications.
      </p>
      <h2>Examples</h2>
      <ul>
        <li>
          <a href="/.netlify/functions/api" target="_blank">
            Home
          </a>{' '}
          ( <code>/.netlify/functions/api</code> )
        </li>
        <li>
          <a href="/.netlify/functions/api/users" target="_blank">
            Users
          </a>{' '}
          ( <code>/.netlify/functions/api/users</code> )
        </li>
      </ul>

      <h3>With redirects</h3>
      <ul>
        <li>
          <a href="/api" target="_blank">
            Home
          </a>{' '}
          ( <code>/api</code> )
        </li>
        <li>
          <a href="/api/users" target="_blank">
            Users
          </a>{' '}
          ( <code>/api/users</code> )
        </li>
      </ul>
    </div>
  );
}

export default App;
