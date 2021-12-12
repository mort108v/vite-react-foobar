import DivBlockComponent from "./DivBlockComponent";
import moment from "moment";
import { useState } from "react";

const BeingQueued = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const divHeadData = ["ID", "Order", "Time ago", "Price"];
  const divBlockName = "overview-block__queued--bottom";
  const divHeadName = "overview-block__queued--head";

  const beingQueuedList = props.queue.map((q) => {
    let momentInTime = props.timestamp;
    let orderTime = q.startTime;
    let orderDuration = momentInTime - orderTime;
    let orderDurationFormatted = moment.utc(orderDuration).format("mm:ss");

    return {
      id: q.id,
      items: [
        q.id,
        <>
          {q.order.map((item, index) => {
            return (
              <p key={index}>
                <> {item}</>
              </p>
            );
          })}
        </>,
        orderDurationFormatted,
        "Price here",
      ],
    };
  });
  return (
    <>
      <div className="overview-header__queued">
        <div
          className="overview-header__queued--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__queued--title--name">
            {"Orders queued "}
          </p>
          <p className="overview-header__queued--title--arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <div className="overview-block__queued">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={beingQueuedList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};
export default BeingQueued;
