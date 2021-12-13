import ListOfContries from "../../components/ListOfContries/ListOfContries";
import Header from "../../components/Header";
import SearchContries from "../../components/SearchContries/SearchContries";

function Region({ params }) {
	const { region } = params;

	return (
		<>
			<Header />
			<main className="contenedor contenedorMain">
				<SearchContries />
				<ListOfContries keyword={region} meth="region" />
			</main>
		</>
	);
}
export default Region;
