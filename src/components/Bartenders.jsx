import Bartender from "./Bartender";

const Bartenders = (props) => {
  if (!props) {
    return null;
  }
  const bartenderList = props.allData.bartenders.map((bartender, index) => {
    return <Bartender bartender={bartender} key={index} />;
  });
  return <>{bartenderList}</>;
};

export default Bartenders;
