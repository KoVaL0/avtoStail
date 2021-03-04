import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const {
    price,
    category,
    subs,
    shipping,
    color,
    brand,
    quantity,
    sold,
    country,
    capacity,
    mass,
    article
  } = product;

  return (
    <ul className="list-group p-0">

      {price && <li className="list-group-item p-0 pb-3" >
        Цена{" "}
        <span className="label label-default label-pill pull-xs-right">
          {price} р.
        </span>
      </li>}

      {brand && <li className="list-group-item p-0 py-3">
        Брэнд{" "}
        <span className="label label-default label-pill pull-xs-right">
          {brand}
        </span>
      </li>}

      {color && <li className="list-group-item p-0 py-3">
        Цвет{" "}
        <span className="label label-default label-pill pull-xs-right">
          {color}
        </span>
      </li>}

      {country && <li className="list-group-item p-0 py-3">
        Страна производитель{" "}
        <span className="label label-default label-pill pull-xs-right">
          {country}
        </span>
      </li>}

      {category && (
        <li className="list-group-item p-0 py-3" >
          Категория{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item p-0 py-3">
          Подкатегория
          {subs.map((s,id) => (
            <Link
              key={id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item p-0 py-3">
        В наличии{" "}
        <span className="label label-default label-pill pull-xs-right">
          {quantity}
        </span>
      </li>

      {capacity && <li className="list-group-item p-0 py-3">
        Объем{" "}
        <span className="label label-default label-pill pull-xs-right">
          {capacity}
          л
        </span>
      </li>}

      {mass && <li className="list-group-item p-0 py-3">
        Вес брутто{" "}
        <span className="label label-default label-pill pull-xs-right">
          {mass}
          кг
        </span>
      </li>}
      {article && <li className="list-group-item p-0 py-3">
        Артикль{" "}
        <span className="label label-default label-pill pull-xs-right">
          {article}
        </span>
      </li>}
    </ul>
  );
};

export default ProductListItems;
