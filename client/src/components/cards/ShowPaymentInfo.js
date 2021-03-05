import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Покупатель: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Сумма заказа:{" "}
        {order.paymentIntent.amount}р
      </span>
      {" / "}
      <span>
        Дата заказа:{" "}
        {order.paymentIntent.created}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
    <div> Информация от пользователя: {order.paymentIntent.address}</div>
  </div>

);

export default ShowPaymentInfo;
