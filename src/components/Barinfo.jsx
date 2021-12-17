const Barinfo = (props) => {
  if (!props) {
    return null;
  }
  return <h3 className="NameTheBar"> {props.barName} </h3>;
};
export default Barinfo;
