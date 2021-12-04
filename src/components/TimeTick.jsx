import moment from "moment";

// Clock countdown to closing
const TimeTick = (props) => {
  console.log(props);
  // const timeToClose = props.bar.closingTime;
  // const CurrentTime = () => {
  //   new Date().toLocaleTimeString("da-DK");
  // };
  const barClosing = props.closingTime;
  console.log(barClosing);
  const momentInTime = props.timeRightNow;
  console.log(momentInTime);

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
