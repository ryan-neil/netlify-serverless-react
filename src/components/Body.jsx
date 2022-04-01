const Body = () => {
  return (
    <div>
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
          <a href="/.netlify/functions/api/users/3" target="_blank">
            User
          </a>{' '}
          ( <code>/.netlify/functions/api/users/3</code> )
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
          <a href="/api/users/3" target="_blank">
            User
          </a>{' '}
          ( <code>/api/users/3</code> )
        </li>
      </ul>
    </div>
  );
};

export default Body;
