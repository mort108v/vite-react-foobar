// import { FaTimes } from "react-icons/fa";
import NewDoingState from "./NewDoingState";

const Bartender = (props) => {
  if (!props) {
    return null;
  }

  return (
    <div className={"bartender"}>
      <h3>Name: {props.bartender.name} </h3>
      <p>Status: {props.bartender.status} </p>
      <p>
        Doing: <NewDoingState statusDetail={props.bartender.statusDetail} />
      </p>
      <p>Using Tap: {props.bartender.usingTap + 1} </p>
      <p>Serving Nr: {props.bartender.servingCustomer} </p>
    </div>
  );
};

export default Bartender;
