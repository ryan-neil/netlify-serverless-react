const fetch = require('node-fetch');
// const users = require('../mocks/users.json');

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

const getSingleUser = async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(url);
    const data = await response.json();

    // filter out single user
    const user = data.filter((item) => item.id === parseInt(req.params.id));

    return res.json(user);
  } catch (err) {
    console.error({
      message: 'Error fetching data',
      error: err,
    });

    res.json(err.message);
    res.sendStatus(500);
  }
};

module.exports = { getAllUsers, getSingleUser };
