
//[2]: async try/catch demo
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

demoAsyncTryCatch = async () => {
	try {
		const updatedCustomer = await updateCustomer(false);
		console.log(updatedCustomer);
	} catch (error) {
		console.log(error);
	}
}

demoAsyncTryCatch();