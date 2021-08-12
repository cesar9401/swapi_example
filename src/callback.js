const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const swapi = 'https://swapi.dev/api/films/1/';

function fetchData(url, callback) {
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = (event) => {
		if(xhttp.readyState === 4) {
			if(xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				return callback(new Error('Error' + url), null);
			}
		}
	}

	xhttp.send();
}

fetchData(swapi, function(error1, data1) {
	if(error1) return console.error(error1);

	fetchData(data1.characters[0], function(error2, data2) {
		if(error2) return console.error(error2);

		fetchData(data2.homeworld, function(error3, data3) {
			if(error3) return console.error(error3);

			console.log(`Titulo: ${data1.title}`);
			console.log(`Director: ${data1.director}`);

			console.log(`Personaje principal: ${data2.name}`);

			console.log(`Lugar de origen: ${data3.name}`);
			console.log(`Poblacion: ${data3.population}`);
		});
	});
});
