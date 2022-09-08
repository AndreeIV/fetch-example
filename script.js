
// const API_URL = 'https://valorant-api.com/v1/agents';

// const agent = 'dade69b4-4f5a-8528-247b-219e5a1facd6';
// fetch(`${API_URL}/agents/${agent}?language=es-ES`)

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const app = document.querySelector('#app');

fetch(API_URL)
	.then(res => res.json())
	.then(data => {
		data.forEach(user => {
			
			const p = document.createElement('p');
			p.setAttribute('id', user.id);
			p.innerHTML = user.name;
			p.addEventListener('click', () => {
				window.location.href = `./user.html?id=${user.id}`;
			});
			app.appendChild(p);
			console.log(p);
		});


	})
	.catch(err => console.log(err))
