// function multiplication(a, b) {
// 	return a * b;
// }

// const result = multiplication(2, 5);
// console.log(result); //10

// function asyncMultiplication(a, b) {
// 	setTimeout(() => {
// 		return a * b;
// 	}, 2000);
// }

// const asyncResult = asyncMultiplication(2, 5);
// console.log(asyncResult); // undefined


// function asyncMultiplication2(a, b, callback) {
// 	setTimeout(() => {
// 		callback(a * b);
// 	}, 2000);
// }

// asyncMultiplication2(2, 5, console.log);

// asyncMultiplication2(2, 5, function(value) {
// 	console.log(value); //10
// });

// asyncMultiplication2(2, 5, (value) => {
// 	console.log(value); //10
// });

function division(a, b) {
	return new Promise((resolve, reject) => {
		if(b !== 0) {
			setTimeout(() => {
				resolve(a/b);
			}, 1000);
		} else {
			reject(new Error('Whoops dividendo igual a 0'));
		}
	});
}

// division(10, 3)
// 	.then(result => console.log(result))
// 	.catch(err => console.log(err));

// division(15, 0)
// 	.then(result => console.log(result))
// 	.catch(err => console.error(err));


// division(10, 2)
// 	.then(result => {
// 		console.log(result);
// 		return division(20, 0);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return division(12 , 6);
// 	})
// 	.then(result => console.log(result))
// 	.catch(err => console.log(err));

async function asyncFunctio() {
	const res1 = await division(12, 3);
	const res2 = await division(34, 2);
	console.log(res1);
	console.log(res2);
}

asyncFunctio();
