import React from "react";
import Header from "../../components/Header";
import ListOfContries from "../../components/ListOfContries/ListOfContries";
import SearchContries from "../../components/SearchContries/SearchContries";

function Pais({ params }) {
	const { pais } = params;

	return (
		<>
			<Header />
			<main className="contenedor contenedorMain">
				<SearchContries />
				<ListOfContries keyword={pais} meth="name" />
			</main>
		</>
	);
}

export default Pais;
