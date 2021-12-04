import moment from "moment";

// Clock countdown to closing
const TimeTick = (props) => {
  console.log(props);
  // const timeToClose = props.bar.closingTime;
  // const CurrentTime = () => {
  //   new Date().toLocaleTimeString("da-DK");
  // };
  const barClosing = props.closingTime;
  const momentInTime = props.timeRightNow;

  return (
    <div className="Time">
      {}
      <h2>
        | Time till closing{" "}
        {moment(barClosing.diff(momentInTime)).format("HH:mm:ss")} ||
      </h2>
    </div>
  );
};

export default TimeTick;
