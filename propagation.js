//[3]: Propagation demo
const findFirst = async () => {
	const foundCustomer = true;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(!foundCustomer) {
				resolve({});
			}

			resolve({
				id: 1,
				email: 'tung@example.com'
			})
		}, 2000)
	})
}

const findOne = async () => {
	const result = await findFirst();
	if (!result) {
		throw new Error('404');
	}
	return result;
}


const checkCustomerExisted = async () => {
	// ...logic
	return await findOne();
}

const create = async (customer) => {
	return new Promise((resolve, reject) => {
		if(customer) {
			resolve(customer);
		}
		reject(new Error('P2002'))
	})
}

const throwUnknownError = () => {
	return new Promise((resolve, reject) => {
		reject(new Error('Prisma unkown error'))
	})
}

const createCustomer = async () => {
	try {
		const customer = await checkCustomerExisted(); // checkCustomerExisted -> findOne -> findFirst
		await throwUnknownError();    // another code that throwing error but we don't know it.
		return await create(customer);
	} catch (error) {
		if(error.message == '404') {
			console.error('Customer Not found');
			return;
		};
		if(error.message == 'P2002') {
			console.error('Unique constraint failed on the Customer');
			return;
		};
		// don't forget throw default error
		throw error;
	}
}

// Run
createCustomer().catch(err => {
	//This is a wrapper that handling unknown error
	console.error(`Error caught: ${err.message}`);
	return;
});
