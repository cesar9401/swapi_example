const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const swapi = 'https://swapi.dev/api/films/1/';

function fetchData(url) {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", url, true);
		xhttp.onreadystatechange = (event) => {
			if(xhttp.readyState === 4) {
				if(xhttp.status === 200) {
					resolve(JSON.parse(xhttp.responseText));
				} else {
					reject(new Error('Error', url));
				}
			}
		}
		xhttp.send();
	});
}

fetchData(swapi)
	.then(data1 => {
		console.log(`Titulo: ${data1.title}`);
		console.log(`Director: ${data1.director}`);
		return fetchData(data1.characters[0]);
	})
	.then(data2 => {
		console.log(`Personaje principal: ${data2.name}`);
		return fetchData(data2.homeworld);
	})
	.then(data3 => {
		console.log(`Lugar de origen: ${data3.name}`);
		console.log(`Poblacion: ${data3.population}`);
	})
	.catch(err => console.error(err));
