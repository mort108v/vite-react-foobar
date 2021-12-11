import TableComponent from "./TableComponent";
import { useState } from "react";
import moment from "moment";

const BeingServed = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const theadData = ["ID", "Time since order", "Order", "Price"];
  const tableName = "beingServed-table";
  const theadName = "beingServed-table__thead";

  const beingServedList = props.serving.map((serve) => {
    let momentInTime = props.timestamp;
    let orderTime = serve.startTime;
    let orderDuration = momentInTime - orderTime;
    let orderDurationFormatted = moment.utc(orderDuration).format("mm:ss");

    return {
      id: serve.id,
      items: [
        serve.id,
        orderDurationFormatted,
        <>
          {serve.order.map((item, index) => {
            return (
              <p key={index}>
                <> {item}</>
              </p>
            );
          })}
        </>,
        "Price here",
      ],
    };
  });
  return (
    <>
      <div className="overview-header__top">
        <h3 className="overview-header__title" onClick={() => setHide(!hide)}>
          Being served
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
              tbodyData={beingServedList}
              theadName={theadName}
              tableName={tableName}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
export default BeingServed;
