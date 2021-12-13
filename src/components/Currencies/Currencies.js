const Currencies = ({ currencies }) => {
	const array = [];
	for (const prop in currencies) {
		array.push(currencies[prop]);
	}
	return array.map(({ name }) => name);
};

export default Currencies;
