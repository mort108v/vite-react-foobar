import Tap from "./Tap";
import { v4 as uuidv4 } from "uuid";

const Taps = (props) => {
  if (!props) {
    return null;
  }
  const tapList = props.taps.map((tap) => {
    return <Tap tap={tap} key={uuidv4()} />;
  });
  return <>{tapList}</>;
};

export default Taps;
