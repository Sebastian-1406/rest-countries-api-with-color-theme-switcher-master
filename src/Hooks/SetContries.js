import { useState, useEffect } from "react";
import GetContries from "../services/GetContries";

const SetContries = ({ keyword, meth }) => {
	const [contries, setContries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(
		function () {
			GetContries({ keyword }, { meth }).then((contries) => {
				setContries(contries);
				setLoading(false);
			});
		},
		[keyword, meth]
	);
	return { contries, loading };
};
export default SetContries;
