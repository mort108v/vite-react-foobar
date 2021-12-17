import { useState } from "react";

const AddOrder = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [cartet, setCartet] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add an order");
      return;
    }
    onAdd({ text, price, cartet });
    setText("");
    setPrice("");
    setCartet(false);
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Order</label>
          <input
            type="text"
            placeholder="Add order here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            type="text"
            placeholder=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>cartet</label>
          <input
            type="checkbox"
            checked={cartet}
            value={cartet}
            onChange={(e) => setCartet(e.currentTarget.checked)}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Submit order" />
      </form>
    </div>
  );
};

export default AddOrder;
