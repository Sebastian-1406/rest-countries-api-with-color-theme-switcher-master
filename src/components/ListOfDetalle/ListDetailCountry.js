import React from "react";
import SetContries from "../../Hooks/SetContries";
import Currencies from "../Currencies/Currencies";
import Languages from "../Languages/Languages";
import Spiner from "../../pages/spiner";
import ListOfBorders from "../ListOfBorders/ListOfBorders";
import { useState } from "react";
import { useLocation } from "wouter";
import Population from "../population/Population";

function ListDetailContry({ keyword, meth = "name" }) {
	const [location, setLocation] = useLocation();
	const [value, setValue] = useState({ keyword, meth });
	const { loading, contries } = SetContries({
		keyword: value.keyword,
		meth: value.meth
	});

	const llamarAlpha = (evt) => {
		if (evt.target.nodeName === "SPAN") {
			const name = evt.target.innerText;
			setValue({ keyword: name, meth: "alpha" });
			setLocation(`/detalle/${name}`);
		}
	};

	if (loading) return <Spiner />;
	else
		return contries.map((pais) => (
			<div key={pais.name} className="pais-detalle detalle">
				<img src={pais.flags} alt={pais.name} />
				<div className="contenedor-info">
					<div>
						<h2>{pais.name}</h2>
					</div>
					<div>
						<p>
							Population:{" "}
							<span>
								<Population number={pais.population} />
							</span>
						</p>
						<p>
							Region: <span>{pais.region}</span>
						</p>
						<p>
							Sub Region: <span>{pais.subregion}</span>
						</p>
						<p>
							Capital: <span>{pais.capital}</span>
						</p>
					</div>
					<div>
						<p>
							Top Level Domain: <span>{pais.tld}</span>
						</p>
						<p>
							Currencies:
							<span>
								<Currencies currencies={pais.currencies} />
							</span>
						</p>
						<p>
							Languages:
							<span>
								<Languages languages={pais.languages} />
							</span>
						</p>
					</div>
					<div>
						<h3>Border Countries:</h3>
						<div className="pais-borders" onClick={llamarAlpha}>
							<ListOfBorders borders={pais.borders} />
						</div>
					</div>
				</div>
			</div>
		));
}

export default ListDetailContry;
