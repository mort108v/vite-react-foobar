const BeerType = (props) => {
  if (!props) {
    return null;
  }

  return (
    <div className={"beertype"}>
      <h3>Name: {props.beerType.name} </h3>
      <p>Status: {props.beerType.amount} </p>
    </div>
  );
};

export default BeerType;
