import Bartender from "./Bartender";

import { v4 as uuidv4 } from "uuid";

const Bartenders = (props) => {
  if (!props) {
    return null;
  }
  const bartenderList = props.bartenders.map((bartender) => {
    return <Bartender bartender={bartender} key={uuidv4()} />;
  });
  return <>{bartenderList}</>;
};

export default Bartenders;
