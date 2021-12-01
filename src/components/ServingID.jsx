const ServingID = (props) => {
  //   console.log(props);
  if (!props) {
    return null;
  }
  return (
    <div className={"being-served"}>
      <h3>ID: {props.serve.id} </h3>
      <p>Started: {props.serve.startTime} </p>
      <p>Order: {props.serve.order} </p>
    </div>
  );
};

export default ServingID;
