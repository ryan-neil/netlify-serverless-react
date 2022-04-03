import { useState, useEffect } from 'react';
import Card from './Card';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const res = await fetch('/api/users'); // all users
        const data = await res.json();

        setUsers(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data...</p>;

  return (
    <section className="Users">
      <h2>Users: {users.length}</h2>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
