import TableComponent from "./TableComponent";
import { useState } from "react";

const BeerStorage = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const theadData = ["Name", "Kegs left", "Sold out"];
  const tableName = "Taps-table";
  const theadName = "Taps-table__thead";

  const storageList = props.storage.map((beerType, index) => {
    return {
      id: index,
      key: index,
      items: [beerType.name, beerType.amount, beerType.status],
    };
  });
  return (
    <>
      <div className="overview-header__top">
        <h3 className="overview-header__title" onClick={() => setHide(!hide)}>
          Beer storage
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
              tbodyData={storageList}
              theadName={theadName}
              tableName={tableName}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BeerStorage;
