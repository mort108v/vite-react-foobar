const Barinfo = (props) => {
  // console.log(props.barName.bar.name);
  if (!props) {
    return null;
  }
  return (
    <>
      <h2 className="NameTheBar">{props.barName}</h2>
      <h4 className="BarClosing">{props.barClosing}</h4>
    </>
  );
};
export default Barinfo;
