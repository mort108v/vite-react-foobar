import QueueID from "./QueueID";

const BeingQueued = (props) => {
  //   console.log(props.onTheServe);
  if (!props) {
    return null;
  }
  const beingQueuedList = props.onTheQue.queue.map((que) => {
    return <QueueID que={que} key={que.id} />;
  });
  return <>{beingQueuedList}</>;
};

export default BeingQueued;
