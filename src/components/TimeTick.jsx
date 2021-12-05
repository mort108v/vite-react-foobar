// import Moment from "moment";
import moment from "moment";

// Clock countdown to closing
const TimeTick = (props) => {
  let barClosing = moment(props.closingTime, "HH:mm:ss");
  let momentInTime = moment(props.timeRightNow, "HH:mm:ss");
  let timeDiff = barClosing.subtract(momentInTime);
  let timeLeft = moment.utc(timeDiff).format("HH:mm:ss");

  return (
    <div className="Time">
      <h2>
        | Time till closing:
        {timeLeft}
        ||
      </h2>
    </div>
  );
};

export default TimeTick;
