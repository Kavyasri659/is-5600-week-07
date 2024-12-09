import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="center mw7 ba mv4">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order #{order.id}</p>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
