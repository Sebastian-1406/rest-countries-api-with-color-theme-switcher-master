import "./normalize.css";
import "./styles.css";
import Home from "./pages/Home";
import Error404 from "./pages/error404";
import pais from "./pages/pais";
import Region from "./pages/Region";
import Detalle from "./pages/Detalle";
import { Route } from "wouter";

export default function App() {
	return (
		<div className="App">
			<Route path="/404" component={Error404} />
			<Route path="/" component={Home} />
			<Route path="/pais/:pais" component={pais} />
			<Route path="/region/:region" component={Region} />
			<Route path="/detalle/:keyword" component={Detalle} />
		</div>
	);
}
