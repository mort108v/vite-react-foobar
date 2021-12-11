import TableComponent from "./TableComponent";
import { useState } from "react";

const Taps = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const theadData = ["ID", "Level", "Capacity", "Beertype", "In use"];
  const tableName = "taps-table";
  const theadName = "taps-table__thead";

  const tapsList = props.taps.map((tap) => {
    return {
      id: tap.id,
      key: tap.id,
      items: [tap.id + 1, tap.level, tap.capacity, tap.beer, tap.inUse],
    };
  });

  return (
    <>
      <div className="overview-header__top">
        <h3 className="overview-header__title" onClick={() => setHide(!hide)}>
          {"Taps status "}
          {hide ? (
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          )}
        </h3>
      </div>
      {hide ? (
        <div className="overview-block">
          <div>
            <TableComponent
              theadData={theadData}
              tbodyData={tapsList}
              theadName={theadName}
              tableName={tableName}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Taps;
