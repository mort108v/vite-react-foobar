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
  let timeDiff = barClosing.subtract(momentInTime);
  let timeLeft = moment.utc(timeDiff).format("HH:mm:ss");

  return (
    <div className="Time">
      <h2>
        | Time till closing:
        {" " + timeLeft + " "}
        ||
      </h2>
    </div>
  );
};

export default TimeTick;
