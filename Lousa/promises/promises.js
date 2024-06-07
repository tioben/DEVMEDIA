//.then e .catch
function getUser(userName) {
  fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })
    .then((response) => {
      console.log('o type do response é:', typeof response);
      console.log('o response é:', response);
      return response.json();
    })
    .then((data) => {
      console.log('o type da data é:', typeof data);
      console.log('a data é:', data);
    })
    .catch((err) => {
      console.log(`houve um erro: ${err}`);
    });
}

getUser('tioben');

//async await
async function getOtherUser(otherUserName) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${otherUserName}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    console.log('O response é:', response);
    console.log('O typeof do response é:', typeof response);
    const responseJSON = await response.json();
    console.log('Response em JSON:', responseJSON);
    console.log(responseJSON.name);
  } catch (err) {
    console.log('deu erro:', err);
  }
}

getOtherUser('tioben');
