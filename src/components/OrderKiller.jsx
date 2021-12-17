import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Orders from "./Orders";
import NewOrder from "./NewOrder";

const OrderKiller = (props) => {
  const [showNewOrder, setShowNewOrder] = useState(false);

  //   const [orders, setOrders] = useState({
  //     queue: [{ id: "", startTime: "", order: [] }],
  //   });

  //   useEffect(() => {
  //     const getOrders = async () => {
  //       const ordersFromServer = await fetchOrders();
  //       setOrders(ordersFromServer);
  //     };
  //     getOrders();
  //   }, []);

  //   // Fetch orders
  //   const fetchOrders = async () => {
  //     const res = await fetch("https://six-foobar.herokuapp.com");
  //     const data = await res.json();
  //     return data;
  //   };

  // Fetch a single order
  //   const fetchOrder = async (id) => {
  //     const res = await fetch(`https://six-foobar.herokuapp.com/order/${id}`);
  //     const data = await res.json();
  //     return data;
  //   };

  // Add order
  const addOrder = async (order) => {
    const res = await fetch("https://six-foobar.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const data = await res.json();
    setOrders([...orders, data]);
  };

  // Delete order
  //   const deleteOrder = async (id) => {
  //     await fetch(`https://six-foobar.herokuapp.com/order/${id}`, {
  //       method: "DELETE",
  //     });

  //     setOrders(orders.filter((order) => order.id !== id));
  //   };

  // const res = await fetch(`https://six-foobar.herokuapp.com/order/${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(updOrder),
  // });

  //     const data = await res.json();
  //     console.log(data);

  //     setOrders(orders.map((order) => (order.id === id ? !order : order)));
  //   };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowNewOrder(!showNewOrder)}
        showAdd={showNewOrder}
      />
      <>
        {showNewOrder && (
          <NewOrder
            onAdd={addOrder}
            storage={props.storage}
            taps={props.taps}
            prices={props.prices}
          />
        )}
        {/* {orders.length > 0 ? (
          <Orders orders={orders} onDelete={deleteOrder} />
        ) : (
          "No orders placed"
        )} */}
      </>
    </div>
  );
};

export default OrderKiller;
