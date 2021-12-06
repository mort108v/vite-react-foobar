// import { FaTimes } from "react-icons/fa";
import NewDoingState from "./NewDoingState";

const Bartender = (props) => {
  if (!props) {
    return null;
  }

  return (
    <ul className={"overview-bartender"}>
      <li className="overview-bartender__item">
        Name: {props.bartender.name}{" "}
      </li>
      <li className="overview-bartender__item">
        Status: {props.bartender.status}
      </li>
      <li className="overview-bartender__item">
        Doing: <NewDoingState statusDetail={props.bartender.statusDetail} />
      </li>
      <li className="overview-bartender__item">
        Using Tap: {props.bartender.usingTap + 1}
      </li>
      <li className="overview-bartender__item">
        Serving Nr: {props.bartender.servingCustomer}
      </li>
    </ul>
  );
};

export default Bartender;
