import TableComponent from "./TableComponent";
import moment from "moment";

const BeingQueued = (props) => {
  if (!props) {
    return null;
  }

  const theadData = ["ID", "Time since order", "Order", "Price"];
  const tableName = "beingQueued-table";
  const theadName = "beingQueued-table__thead";

  const beingQueuedList = props.queue.map((q) => {
    let momentInTime = props.timestamp;
    let orderTime = q.startTime;
    let orderDuration = momentInTime - orderTime;
    let orderDurationFormatted = moment.utc(orderDuration).format("mm:ss");

    return {
      id: q.id,
      // key: uuidv4(),
      items: [
        q.id,
        orderDurationFormatted,
        <>
          {q.order.map((item, index) => {
            return (
              <p key={index}>
                <> {item}</>
              </p>
            );
          })}
        </>,
        // serve.order,
        "Price here",
        // serve.price
      ],
    };
  });
  return (
    <div>
      <TableComponent
        theadData={theadData}
        tbodyData={beingQueuedList}
        theadName={theadName}
        tableName={tableName}
      />
    </div>
  );
};
export default BeingQueued;
