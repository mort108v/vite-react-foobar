import ServingID from "./ServingID";

const BeingServed = (props) => {
  //   console.log(props.onTheServe);
  if (!props) {
    return null;
  }
  const beingServedList = props.onTheServe.serving.map((serve) => {
    return <ServingID serve={serve} key={serve.id} />;
  });
  return <>{beingServedList}</>;
};

export default BeingServed;
