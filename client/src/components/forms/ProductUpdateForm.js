import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
    country,
    countries,
    capacity,
    mass,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Название</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Описание</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Цена</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Наличие</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option value="Есть в наличии">Есть в наличии</option>
          <option value="Нет в наличии">Нет в наличии</option>
        </select>
      </div>

      <div className="form-group">
        <label>Страна производитель</label>
        <select
          name="country"
          className="form-control"
          value={country}
          onChange={handleChange}
        >
          {
            countries.map((item, id) => (
              <option key={id}>{item}</option>
            ))
          }
        </select>
      </div>

      <div className="form-group">
        <label>Цвет</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c, id) => (
            <optgroup key={id} label={Object.keys(c)[0]}>
              {
                Object.values(c)
                  .map((obj) => (
                    obj.map((item, id) => (
                      <option key={id} value={item}>
                        {item}
                      </option>
                    ))
                  ))
              }
            </optgroup>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Брэнд</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b, id) => (
            <option key={id} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Объем</label>
        <input
          type="number"
          name="capacity"
          className="form-control"
          value={capacity}
          onChange={handleChange}
          placeholder={"Укажите объем"}
        />
      </div>

      <div className="form-group">
        <label>Масса</label>
        <input
          type="number"
          name="mass"
          className="form-control"
          value={mass}
          onChange={handleChange}
          placeholder={"Укажите массу"}
        />
      </div>

      <div className="form-group">
        <label>Категория</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c, id) => (
              <option key={id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Под категория</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s, id) => (
              <Option key={id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>

      <br />
      <button className="btn btn-outline-info">Сохранить</button>
    </form>
  );
};

export default ProductUpdateForm;
