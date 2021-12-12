import DivBlockComponent from "./DivBlockComponent";
import { useState } from "react";
import moment from "moment";

const BeingServed = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const divHeadData = ["ID", "Order", "Time ago", "Price"];
  const divBlockName = "overview-block__serving--bottom";
  const divHeadName = "overview-block__serving--head";

  const beingServedList = props.serving.map((serve) => {
    let momentInTime = props.timestamp;
    let orderTime = serve.startTime;
    let orderDuration = momentInTime - orderTime;
    let orderDurationFormatted = moment.utc(orderDuration).format("mm:ss");

    return {
      id: serve.id,
      items: [
        serve.id,
        <>
          {serve.order.map((item, index) => {
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
      <div className="overview-header__serving">
        <div
          className="overview-header__serving--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__serving--title-name">{"Serving "}</p>
          <p className="overview-header__serving--title-arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <div className="overview-block__serving">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={beingServedList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};
export default BeingServed;
