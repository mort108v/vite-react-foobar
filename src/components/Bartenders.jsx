import DivBlockComponent from "./DivBlockComponent";
import NewDoingState from "./NewDoingState";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Bartenders = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const divHeadData = ["Name", "Status", "Doing", "Using", "Serving"];
  const divBlockName = "overview-block__bartender--bottom";
  const divHeadName = "overview-block__bartender--head";

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
      <div className="overview-header__bartender">
        <div
          className="overview-header__bartender--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__bartender--title--name">
            {"Bartenders "}
          </p>
          <p className="overview-header__bartender--title--arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <div className="overview-block__bartender">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={bartenderList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};

export default Bartenders;
