import NewDoingState from "./NewDoingState";
// import { v4 as uuidv4 } from "uuid";
import TableComponent from "./TableComponent";

const Bartender = (props) => {
  if (!props) {
    return null;
  }
  const theadData = ["Name", "Status", "Doing", "Using", "Serving"];

  const tableName = "bartender-table";
  const theadName = "bartender-table__thead";
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
  return (
    <div>
      <TableComponent
        theadData={theadData}
        tbodyData={tbodyData}
        theadName={theadName}
        tableName={tableName}
      />
    </div>
  );
};
export default Bartender;
