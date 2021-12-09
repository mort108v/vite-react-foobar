import TableComponent from "./TableComponent";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const BeingServed = (props) => {
  if (!props) {
    return null;
  }

  const theadData = ["ID", "Time since order", "Order", "Price"];
  const tableName = "beingServed-table";
  const theadName = "beingServed-table__thead";

  let timestamp = moment.unix(props.timestamp).utc();
  const beingServedList = props.serving.map((serve) => {
    // const myTime = moment.unix();
    let orderTimestamp = moment(props.serving.startTime).utc();
    let timeSub = timestamp.subtract(orderTimestamp);
    let timeSinceOrder = moment.utc(timeSub).format("HH:mm:ss");

    return {
      id: uuidv4(),
      key: uuidv4(),
      items: [
        serve.id,
        timeSinceOrder,
        serve.order.map((eachOrder) => {
          return <tr>{eachOrder}</tr>;
        }),
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
        tbodyData={beingServedList}
        theadName={theadName}
        tableName={tableName}
      />
    </div>
  );
};

export default BeingServed;

// <ServingID
// serve={serve}
// key={serve.id}
// timeRightNow={props.timeRightNow}
// />
