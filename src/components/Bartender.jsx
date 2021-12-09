// import NewDoingState from "./NewDoingState";
// import { v4 as uuidv4 } from "uuid";
import TableComponent from "./TableComponent";

const Bartender = (props) => {
  if (!props) {
    return null;
  }

  const tbodyData = [
    {
      id: props.id,
      key: props.IDkey,
      items: [
        props.bartender.name,
        props.bartender.status,
        <NewDoingState statusDetail={props.bartender.statusDetail} />,
        props.bartender.usingTap + 1,
        props.bartender.servingCustomer,
      ],
    },
  ];
};
export default Bartender;
