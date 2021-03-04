import React, {useState} from "react";
import {Card, Tabs, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import noImg from "../../images/noImg.jpg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import {showAverage} from "../../functions/rating";
import _ from "lodash";
import {useSelector, useDispatch} from "react-redux";
import Star from "../forms/Star";

const {TabPane} = Tabs;

// this is childrend component of Product page
const SingleProduct = ({product, onStarClick, star}) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const {user, cart} = useSelector((state) => ({...state}));
  const dispatch = useDispatch();

  const {title, images, description, _id} = product;

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

  return (
    <div className="container-fluid">
      <h1 style={{fontSize: "20px", paddingBottom: "10px"}}>{title}</h1>
      <div className="row justify-content-around">
        <div className="col-md-4">
          {product && product.ratings && product.ratings.length > 0 ? (
            showAverage(product)
          ) : (
            <div>
              <StarRating
                name={_id}
                numberOfStars={5}
                starDimension="16px"
                starSpacing="2px"
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              /> {" "} 0 из 5
            </div>
          )}
          {images && images.length ? (
            <Carousel showArrows={true} autoPlay infiniteLoop>
              {images && images.map((i, id) => <img alt={"image"} src={i.url} key={id}
                                                    style={{maxHeight: "350px", objectFit: "contain"}}/>)}
            </Carousel>
          ) : (
            <Card cover={<img src={noImg} alt={"image"} className="mb-3 card-image"/>}></Card>
          )}
        </div>

        <div className="col-md-5">
          <Card
            actions={[
              <Tooltip placement="top" title={tooltip}>
                <a onClick={handleAddToCart} disabled={product.quantity < 1}>
                  <ShoppingCartOutlined className="text-danger"/>
                  <br/>
                  Добавить в корзину
                </a>
              </Tooltip>,
              <Link to="/">
                <HeartOutlined className="text-info"/> <br/> Добавьте в избранные
              </Link>,
            ]}
          >
            <ProductListItems product={product}/>
          </Card>
        </div>
      </div>
      <Tabs type="card" className={"col-md-8"}>
        <TabPane tab="Описание" key="1">
          {description && description}
        </TabPane>
        <TabPane tab="Больше..." key="2">
          Позвоните по номеру xxxx xxx xxx, чтобы узнать больше об этом продукте.
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SingleProduct;
