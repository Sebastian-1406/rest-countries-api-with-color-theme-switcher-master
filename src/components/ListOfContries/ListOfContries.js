import React from "react";
import Spiner from "../../pages/spiner";
import Pais from "../pais/Pais";
import SetContries from "../../Hooks/SetContries";
import { useLocation } from "wouter";

const ListOfContries = ({ keyword, meth }) => {
	const [location, setLocation] = useLocation();
	const { contries, loading } = SetContries({ keyword, meth });

	if (loading) return <Spiner />;
	else
		return (
			<div className="contenedorPaises">
				{contries
					? contries.map(({name, flags, population, region, capital}) => (
						
							<Pais
								key={name}
								name={name}
								flags={flags}
								population={population}
								region={region}
								capital={capital}
							/>
					  ))
					: setLocation("/404")}
			</div>
		);
};
export default ListOfContries;
