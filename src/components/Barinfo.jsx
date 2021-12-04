const Barinfo = (props) => {
  // console.log(props.barName.bar.name);
  if (!props) {
    return null;
  }
  return (
    <>
      <h2 className="NameTheBar"> || {props.barName} |</h2>
      <h2 className="BarClosing"> | {props.barClosing} |</h2>
    </>
  );
};
export default Barinfo;
