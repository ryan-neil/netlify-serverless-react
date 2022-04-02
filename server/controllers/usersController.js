const fetch = require('node-fetch');

const getAllUsers = async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(url);
    const data = await response.json();

    return res.json(data);
  } catch (err) {
    console.error({
      message: 'Error fetching data',
      error: err,
    });

    res.json(err.message);
    res.sendStatus(500);
  }
};

module.exports = getAllUsers;
