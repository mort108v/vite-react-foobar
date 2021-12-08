// import { v4 as uuidv4 } from "uuid";
const NewDoingState = (props) => {
  if (!props) {
    return null;
  }

  const currentDoingState = props.statusDetail;

  const DOING_STATES = {
    pourBeer: "Pouring Beer",
    reserveTap: "Reserving a Tap",
    replaceKeg: "Replacing a Keg",
    releaseTap: "Releasing a Tap",
    receivePayment: "Receiving Payment",
    startServing: "Starting to Serve",
    waiting: "Waiting for Work",
  };
  // const currentStateKey = {uuidv4()}
  return <>{DOING_STATES[currentDoingState]}</>;
};

export default NewDoingState;
