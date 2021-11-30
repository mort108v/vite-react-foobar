// import { FaTimes } from "react-icons/fa";

const Bartender = (props) => {
  return (
    <div className={"bartender"}>
      <h3>{props.bartender.name} </h3>
      <p>{props.bartender.status} </p>
      <p>{props.bartender.statusDetail} </p>
      <p>{props.bartender.usingTap} </p>
      <p>{props.bartender.servingCustomer} </p>
    </div>
  );
};

export default Bartender;
