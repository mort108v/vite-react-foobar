import ServingID from "./ServingID";
import TimeTick from "./TimeTick";

const BeingServed = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }

  const beingServedList = props.serving.map((serve) => {
    return (
      <ServingID
        serve={serve}
        key={serve.id}
        timeRightNow={props.timeRightNow}
      />
    );
  });
  return <>{beingServedList}</>;
};

export default BeingServed;
