import Isitfriday from "isitfriday";
import moment from "moment";

// Clock countdown to closing
const TimeTick = (props) => {
  let barClosing;

  if (Isitfriday()) {
    barClosing = moment("24:00:00", "HH:mm:ss");
  } else {
    barClosing = moment(props.closingTime, "HH:mm:ss");
  }

  let momentInTime = moment(props.timeRightNow, "HH:mm:ss");
  let closingTimeDiff = barClosing.subtract(momentInTime);
  let timeLeft = moment.utc(closingTimeDiff).format("HH:mm:ss");

  return (
    <h2 className="Time">
      <>{timeLeft}</>
    </h2>
  );
};

export default TimeTick;
