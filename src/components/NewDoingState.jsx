// import Bartender from "./Bartender";

const NewDoingState = (props) => {
  console.log(props);
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

  return <>{DOING_STATES[currentDoingState]}</>;
};

export default NewDoingState;
