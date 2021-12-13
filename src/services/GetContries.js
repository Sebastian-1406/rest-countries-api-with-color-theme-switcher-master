const GetContries = async ({ keyword = "" } = {}, { meth = "all" } = {}) => {
	try {
		const resultado = await fetch(
			`https://restcountries.com/v3.1/${meth}/${keyword}`
		);
		if (resultado.status === 200) {
			const data = await resultado.json();
			const pais = data.map((element) => {
				const {
					capital,
					population,
					region,
					subregion,
					tld,
					currencies,
					languages,
					borders
				} = element;
				const name = element.name.common;
				const nameNative = element.name.nativeName;
				const flags = element.flags.png;
				return {
					capital,
					population,
					name,
					flags,
					region,
					nameNative,
					subregion,
					tld,
					currencies,
					languages,
					borders
				};
			});
			return pais;
		} else if (resultado.status === 404) {
			return false;
		}
	} catch (error) {
		console.log("Hay un error en la api");
	}
};

export default GetContries;
