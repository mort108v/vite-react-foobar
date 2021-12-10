import TableComponent from "./TableComponent";
// import TableRow from "./TableRow";
import moment from "moment";
// import { v4 as uuidv4 } from "uuid";

const BeingServed = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }

  const theadData = ["ID", "Time since order", "Order", "Price"];
  const tableName = "beingServed-table";
  const theadName = "beingServed-table__thead";

  const beingServedList = props.serving.map((serve) => {
    let momentInTime = props.timestamp;
    let orderTime = serve.startTime;
    let orderDuration = momentInTime - orderTime;
    let orderDurationFormatted = moment.utc(orderDuration).format("mm:ss");

    return {
      id: serve.id,
      // key: uuidv4(),
      items: [
        serve.id,
        orderDurationFormatted,
        <>
          {serve.order.map((item, index) => {
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
        tbodyData={beingServedList}
        theadName={theadName}
        tableName={tableName}
      />
    </div>
  );
};
export default BeingServed;
