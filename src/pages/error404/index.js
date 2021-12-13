import "./style.css";
import image404 from "../../images/404.png";
import {Link} from 'wouter'
const Error404 = () => {
	return (
		<div class="conten">
			<div class="conten__img">
				<img src={image404} alt="" />
				<p class="conten__number">404</p>
			</div>
			<div class="conten__Description">
				<p class="conten__error">UPSSSS!!!! Lo que buscas no se encuentra</p>
				<Link to="/" class="conten__button">
					Ir a la Home
				</Link>
			</div>
		</div>
	);
};

export default Error404;
