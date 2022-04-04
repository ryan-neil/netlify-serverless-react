const Home = () => {
  return (
    <section className="Home">
      <h1>
        Netlify Serverless Functions: <i>React</i>
      </h1>

      <p>
        This is a simple training application of how we can add <b>Netlify</b>{' '}
        serverless functions to our <b>React</b> apps.
      </p>

      <p>
        For this example we will be building a <i>serverless</i> <b>Express</b>{' '}
        API that we can call from our frontend to receive some mock users data.
      </p>

      <p>Test it out below!</p>
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
        <li>
          <a href="/.netlify/functions/api/users/2" target="_blank">
            User
          </a>{' '}
          ( <code>/.netlify/functions/api/users/2</code> )
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
        <li>
          <a href="/api/users/2" target="_blank">
            User
          </a>{' '}
          ( <code>/api/users/2</code> )
        </li>
      </ul>
    </section>
  );
};

export default Home;
