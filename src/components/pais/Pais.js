import {useLocation} from 'wouter'
import Population from '../population/Population'
const Pais = ({ name, flags, region, population, capital }) => {
	const [location, setLocation] = useLocation();

	const redireccionarDetalle = () => {
		setLocation(`/detalle/${name}`);
	};
	return (
		<div className="pais" onClick={redireccionarDetalle}>
			<img src={flags} alt={name} />
			<div className="pais-detalle">
				<h2>{name}</h2>
				<p>
					Population: <span><Population number={population}/></span>
				</p>
				<p>
					Region: <span>{region}</span>
				</p>
				<p>
					Capital: <span>{capital}</span>
				</p>
			</div>
		</div>
	);
};
export default Pais;
