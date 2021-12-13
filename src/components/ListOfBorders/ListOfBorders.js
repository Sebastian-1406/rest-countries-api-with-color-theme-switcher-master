const ListOfBorders = ({ borders }) => {
	const array = borders;

	if (borders === undefined) {
		return <i>NO TIENE FRONTERA</i>;
	} else {
		return array.map((element) => <span key={element}>{element}</span>);
	}
};

export default ListOfBorders;
