import DivBlockComponent from "./DivBlockComponent";

import { useState } from "react";

const Users = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const divHeadData = ["Name", "Username", "E-mail"];
  const divBlockName = "overview-block__user--bottom";
  const divHeadName = "overview-block__user--head";

  const userList = props.users.map((user, index) => {
    return {
      id: index,
      key: index,
      items: [user.name, user.username, user.email],
    };
  });
  return (
    <>
      <div className="overview-header__user">
        <div
          className="overview-header__user--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__user--title--name">{"Customers "}</p>
          <p className="overview-header__user--title--arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <div className="overview-block__user">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={userList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};

export default Users;
