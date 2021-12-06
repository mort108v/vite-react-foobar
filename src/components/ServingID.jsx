import moment from "moment";

const ServingID = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }
  return (
    <div className={"being-served"}>
      <h3>ID: {props.serve.id} </h3>
      <p>Start-time: {props.timeRightNow} </p>
      <p>Timestamp: {props.serve.startTime} </p>
      <ul>
        <li> Order: </li>
        <li> {props.serve.order} </li>
      </ul>
    </div>
  );
};

export default ServingID;
