import TableComponent from "./TableComponent";
// import TableRow from "./TableRow";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const BeingServed = (props) => {
  console.log(props);
  if (!props) {
    return null;
  }

  const theadData = ["ID", "Time since order", "Order", "Price"];
  const tableName = "beingServed-table";
  const theadName = "beingServed-table__thead";

  moment(props.timestamp).fromNow();
  let orderTimestamp = moment(props.serving.startTime);
  let now = moment();
  let diff = now.subtract(orderTimestamp);
  let formatted = diff.format("HH:mm:ss");
  const beingServedList = props.serving.map((serve) => {
    // const myTime = moment.unix();
    // let orderTimestamp = moment(props.serving.startTime);
    // let timeSub = timestamp.subtract(orderTimestamp);
    // let timeSinceOrder = moment(timeSub).format("HH:mm:ss");

    // const orderItem = props.serving.order.map((item) => {
    //   return orderItem;
    // });
    // console.log(orderItem);

    return {
      idKey: serve.id,
      key: uuidv4(),
      items: [
        serve.id,
        formatted,
        <>
          {serve.order.map((item) => {
            return (
              <tr key={item}>
                <td> {item}</td>
              </tr>
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
        tbodyData={beingServedList}
        theadName={theadName}
        tableName={tableName}
      />
    </div>
  );
};
export default BeingServed;
