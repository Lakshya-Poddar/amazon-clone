import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order total :{value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
