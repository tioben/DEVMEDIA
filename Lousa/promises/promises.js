const username = 'tioben';

fetch(`https://api.github.com/users/${username}`, {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})
  .then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`houve um erro: ${err}`);
  });
