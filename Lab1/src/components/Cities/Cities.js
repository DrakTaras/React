const Cities = (props) => {
  return (
    <select className="cities">
      {props.cities.map((city) => (
        <option value={city.id}>{city.name}</option>
      ))}
	    </select>
  );
};

export default Cities;
