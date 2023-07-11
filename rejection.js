//[1]: Rejection demo
const updateCustomer = (isSucceed = true) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(isSucceed) {
				resolve({
					id: 1,
					firstName: 'Tung',
					lastName: 'Son',
				})
			}

			reject({
				code: 'P2002',
				message: 'Unique constraint failed on the Customer',
			})
		}, 2000)
	})
}


demoRejection = () => {
	updateCustomer(false)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		})
}

// Run
demoRejection();