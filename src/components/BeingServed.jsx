import ServingID from "./ServingID";

const BeingServed = (props) => {
  if (!props) {
    return null;
  }
  const beingServedList = props.serving.map((serve) => {
    return <ServingID serve={serve} key={serve.id} />;
  });
  return <>{beingServedList}</>;
};

export default BeingServed;
