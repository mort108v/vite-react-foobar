// import Bartender from "./Bartender";
import TableComponent from "./TableComponent";
import NewDoingState from "./NewDoingState";
import { v4 as uuidv4 } from "uuid";
const Bartenders = (props) => {
  if (!props) {
    return null;
  }
  const theadData = ["Name", "Status", "Doing", "Using", "Serving"];
  const tableName = "bartender-table";
  const theadName = "bartender-table__thead";

  const bartenderList = props.bartenders.map((bartender) => {
    return {
      id: uuidv4(),
      key: uuidv4(),
      items: [
        bartender.name,
        bartender.status,
        <NewDoingState statusDetail={bartender.statusDetail} />,
        bartender.usingTap + 1,
        bartender.servingCustomer,
      ],
    };

    //<Bartender bartender={bartender} id={uuidv4()} key={uuidv4()} />;
  });
  return (
    <div>
      <TableComponent
        theadData={theadData}
        tbodyData={bartenderList}
        theadName={theadName}
        tableName={tableName}
      />
    </div>
  );
};

export default Bartenders;
