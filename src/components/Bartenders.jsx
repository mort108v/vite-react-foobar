import TableComponent from "./TableComponent";
import NewDoingState from "./NewDoingState";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Bartenders = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

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
  });
  return (
    <>
      <div className="overview-header__top">
        <h3 className="overview-header__title" onClick={() => setHide(!hide)}>
          Bartenders
          {hide ? (
            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
          )}
        </h3>
      </div>
      {hide ? (
        <div className="overview-block">
          <div>
            <TableComponent
              theadData={theadData}
              tbodyData={bartenderList}
              theadName={theadName}
              tableName={tableName}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Bartenders;
