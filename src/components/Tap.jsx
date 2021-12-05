const Tap = (props) => {
  console.log(props);
  if (!props) {
    return null;
  }

  return (
    <div className={"tap"}>
      <h3>Tap ID: {props.tap.id} </h3>
      <p>Level: {props.tap.level} </p>
      <p>Capacity: {props.tap.capacity} </p>
      <p>Beer Type: {props.tap.beer} </p>
      <p>In Use: {props.tap.inUse} </p>
    </div>
  );
};

export default Tap;
