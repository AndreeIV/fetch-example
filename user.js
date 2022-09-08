const API_URL = 'https://jsonplaceholder.typicode.com/users';

const app = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');
console.log(`${API_URL}/${id}`);
fetch(`${API_URL}/${id}`)
    .then((res) => res.json())
    .then(data => {
        const name = document.createElement('p')
        name.innerHTML = data.name;
        app.appendChild(name);
    })
    .catch((err) => console.log(err));
    
