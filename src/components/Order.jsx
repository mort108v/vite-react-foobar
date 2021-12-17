import { FaTimes } from "react-icons/fa";

const Order = ({ order, onDelete, onToggle }) => {
  return (
    <div
      className={`order ${order.cartet ? "cartet" : ""}`}
      onDoubleClick={() => onToggle(order.id)}
    >
      <p>
        {order.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(order.id)}
        />
      </p>
      <p>{order.price} </p>
    </div>
  );
};

export default Order;
