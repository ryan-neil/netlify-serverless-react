import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </header>
  );
};

export default Header;
