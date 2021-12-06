const QueueID = (props) => {
  if (!props) {
    return null;
  }
  return (
    <div className={"being-queued"}>
      <h3>ID: {props.que.id} </h3>
      <p>Start-time: {props.timeRightNow} </p>
      <p>Timestamp: {props.que.startTime} </p>
      <p>
        Order:
        <br /> {props.que.order}
      </p>
    </div>
  );
};

export default QueueID;
