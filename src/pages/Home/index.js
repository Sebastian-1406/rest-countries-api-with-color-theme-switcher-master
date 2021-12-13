import React from "react";
import SearchContries from "../../components/SearchContries/SearchContries";
import Header from "../../components/Header";
import "./style.css";
import ListOfContries from "../../components/ListOfContries/ListOfContries";
function Home() {
	return (
		<>
			<Header />
			<main className="contenedor contenedorMain">
				<SearchContries />
				<ListOfContries />
			</main>
		</>
	);
}

export default Home;
