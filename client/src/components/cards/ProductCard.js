import React, {useEffect, useState} from "react";
import {Card, Tooltip} from "antd";
import {EyeOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import noImg from "../../images/noImg.jpg";
import {NavLink} from "react-router-dom";
import {showAverage} from "../../functions/rating";
import _ from "lodash";
import {useSelector, useDispatch} from "react-redux";
import StarRating from "react-star-ratings";

const {Meta} = Card;

const ProductCard = ({product}) => {
  const [tooltip, setTooltip] = useState("Click to add");
  const [color, setColor] = useState("red");

  // redux
  const {user, cart} = useSelector((state) => ({...state}));
  const dispatch = useDispatch();

  useEffect(() => {
    if (quantity === "Есть в наличии") setColor("green")
  },[])

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };


  // destructure
  const {images, title, description, slug, price, quantity} = product;


  return (
    <>
      <Card
        title={
          <NavLink to={`/product/${slug}`}>
            <div style={{display: "flex", justifyContent: "center", objectFit: "contain"}}>
              <img
                alt={"image-product"}
                src={images && images.length ? images[0].url : noImg}
                style={{height: "150px", objectFit: "contain"}}
                className="p-1"
              />
            </div>
          </NavLink>
        }
        size="small"
        actions={[
          <NavLink to={`/product/${slug}`}>
            <EyeOutlined className="text-warning"/> <br/> Показать товар
          </NavLink>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger"/> <br/>
              {product.quantity < 1 ? "Нет на складе" : "Добавить в корзину"}
            </a>
          </Tooltip>,
        ]}
      >
        <div style={{padding: "10px"}}>
          <NavLink to={`/product/${slug}`}>
            <Meta
              title={title}
            />
          </NavLink>
          {product && product.ratings && product.ratings.length > 0 ? (
            <div style={{padding: "10px 0"}}>
              {showAverage(product)}
            </div>
          ) : (
            <div style={{padding: "10px 0"}}>
              <StarRating
                numberOfStars={5}
                starDimension="16px"
                starSpacing="2px"
                starRatedColor="red"
                editing={false}
              />
              {" "} 0 из 5
            </div>
          )}
          <NavLink to={`/product/${slug}`}>
            <h5>{`Цена - ${price}р`}</h5>
            <p style={{margin: 0, color: color, fontWeight: "bold"}}>{quantity}</p>
          </NavLink>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
