import moment from "moment";

// Clock countdown to closing
const TimeTick = (props) => {
  const barClosing = props.closingTime;
  const momentInTime = props.timeRightNow;

  return (
    <div className="Time">
      <h2>
        | Time till closing
        {moment(barClosing).subtract(momentInTime).format("HH:mm:ss")} ||
      </h2>
    </div>
  );
};

export default TimeTick;
