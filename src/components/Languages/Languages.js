const Languages = ({ languages }) => {
	const array = [];
	for (const prop in languages) {
		array.push(languages[prop]);
	}
	return array.map((name) => name).join(", ");
};

export default Languages;
