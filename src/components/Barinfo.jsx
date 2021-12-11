const Barinfo = (props) => {
  // console.log(props.barName.bar.name);
  if (!props) {
    return null;
  }
  return <h2 className="NameTheBar"> {props.barName} Dashboard</h2>;
};
export default Barinfo;
