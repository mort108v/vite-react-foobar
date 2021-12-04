const ServingID = (props) => {
  if (!props) {
    return null;
  }
  return (
    <div className={"being-served"}>
      <h3>ID: {props.serve.id} </h3>
      <p>Started: {props.serve.startTime} </p>
      <ul>
        <li> Order: </li>

        <li> {props.serve.order} </li>
      </ul>
    </div>
  );
};

export default ServingID;

{
  /* <table className="" */
}
