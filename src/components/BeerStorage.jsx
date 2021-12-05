import BeerType from "./BeerType";
import { v4 as uuidv4 } from "uuid";

const BeerStorage = (props) => {
  if (!props) {
    return null;
  }
  const storageList = props.storage.map((beerType) => {
    return <BeerType beerType={beerType} key={uuidv4()} />;
  });
  return <>{storageList}</>;
};

export default BeerStorage;
