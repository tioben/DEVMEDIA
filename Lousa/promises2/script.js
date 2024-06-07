const list = [
  { id: 1, name: 'gustavo', idade: 24 },
  { id: 2, name: 'andré', idade: 32 },
  { id: 3, name: 'thiago', idade: 27 },
];

const ul = document.querySelector('#ul-list');

async function searchButton(userName) {
  let response = await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  const responseJSON = await response.json();
  const li = document.createElement('li');
  const imgAPI = document.createElement('img');
  imgAPI.src = responseJSON.avatar_url;
  imgAPI.alt = `imagem do avatar`;
  li.innerHTML = `Nome: ${responseJSON.name} <br> login: ${responseJSON.login}`;
  li.appendChild(imgAPI);
  ul.appendChild(li);
  console.log(responseJSON);
}
