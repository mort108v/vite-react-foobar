// import { FaTimes } from "react-icons/fa";

const Bartender = (props) => {
  return (
    <div className={"bartender"}>
      <h3>Name: {props.bartender.name} </h3>
      <p>Status: {props.bartender.status} </p>
      <p>Doing: {props.bartender.statusDetail} </p>
      <p>Using Tap: {props.bartender.usingTap} </p>
      <p>Serving Nr: {props.bartender.servingCustomer} </p>
    </div>
  );
};

export default Bartender;
