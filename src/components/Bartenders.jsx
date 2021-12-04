import Bartender from "./Bartender";
import { v4 as uuidv4 } from "uuid";
import NewDoingState from "./NewDoingState";

const Bartenders = (props) => {
  if (!props) {
    return null;
  }
  const bartenderList = props.bartenders.map((bartender) => {
    return (
      <Bartender
        bartender={bartender}
        // doingState={NewDoingState()}
        key={uuidv4()}
      />
    );
  });
  return <>{bartenderList}</>;
};

export default Bartenders;
