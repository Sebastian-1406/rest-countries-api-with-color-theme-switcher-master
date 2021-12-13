import React from "react";
import Header from "../../components/Header";
import ListDetailContry from "../../components/ListOfDetalle/ListDetailCountry";
import iconLeft from "../../images/arrow-left-solid.svg";
import { Link } from "wouter";

function Detalle({ params }) {
	const { keyword } = params;
	return (
		<>
			<Header />
			<main className="contenedor contenedorMain">
				<Link to="/" className="btn">
					<img src={iconLeft} alt="icon-arrow-left" className="icon" />
					Back
				</Link>
				<ListDetailContry keyword={keyword} meth="name" />
			</main>
		</>
	);
}

export default Detalle;
