import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Изображение</th>
          <th scope="col">Название</th>
          <th scope="col">Артикул</th>
          <th scope="col">Цена</th>
          <th scope="col">Количество</th>
          <th scope="col">Наличие</th>
          <th scope="col">Удалить</th>
        </tr>
      </thead>

      {cart.map((p, id) => (
        <ProductCardInCheckout key={id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>Корзина / {cart.length} товара</h4>

          {!cart.length ? (
            <p>
              Нет товаров в корзине! <Link to="/shop">Вернуться к каталогу</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Информация о заказе</h4>
          <hr />
          <p>Товары:</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = {c.price * c.count}р
              </p>
            </div>
          ))}
          <hr />
          Итого: <b>{getTotal()}р</b>
          <hr />
          {user ? (
            <button
              onClick={saveOrderToDb}
              className="btn btn-sm btn-primary mt-2"
              disabled={!cart.length}
            >
              Перейти к оформлению заказа
            </button>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Зайдите в аккаунт
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
