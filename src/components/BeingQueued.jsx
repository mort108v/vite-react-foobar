import TableComponent from "./TableComponent";
import moment from "moment";
import { useState } from "react";

const BeingQueued = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const theadData = ["ID", "Time since order", "Order", "Price"];
  const tableName = "beingQueued-table";
  const theadName = "beingQueued-table__thead";

  const beingQueuedList = props.queue.map((q) => {
    let momentInTime = props.timestamp;
    let orderTime = q.startTime;
    let orderDuration = momentInTime - orderTime;
    let orderDurationFormatted = moment.utc(orderDuration).format("mm:ss");

    return {
      id: q.id,
      items: [
        q.id,
        orderDurationFormatted,
        <>
          {q.order.map((item, index) => {
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
          Orders queued
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
              tbodyData={beingQueuedList}
              theadName={theadName}
              tableName={tableName}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
export default BeingQueued;
