import QueueID from "./QueueID";

const BeingQueued = (props) => {
  if (!props) {
    return null;
  }
  const beingQueuedList = props.queue.map((que) => {
    return <QueueID que={que} key={que.id} />;
  });
  return <>{beingQueuedList}</>;
};

export default BeingQueued;

// const addOne = useCallback(() => {setNumbers((currentNumbers) => [ ...currentNumbers, currentNumbers.length + 1,]);}, []);

// const sum = useMemo(() => numbers.reduce((a, v) => a + v, 0), [numbers]);
