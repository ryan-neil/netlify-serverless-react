const Card = ({ user }) => {
  return (
    <article className="Card">
      <h3>
        {user.name} ({user.username})
      </h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </article>
  );
};

export default Card;
