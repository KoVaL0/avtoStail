import React from "react";
import {Select} from "antd";

const {Option, OptGroup} = Select;

const ProductCreateForm = ({
                             handleSubmit,
                             handleChange,
                             setValues,
                             values,
                             handleCategoryChange,
                             subOptions,
                             showSub,
                           }) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
    countries,
    country,
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
          placeholder={"Введите название товара"}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Описание</label>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder={"Введите описание товара"}
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
          placeholder={"Введите цену"}
        />
      </div>

      <div className="form-group">
        <label>Наличие</label>
        <select
          name="quantity"
          className="form-control"
          onChange={handleChange}
        >
          <option>Выберите</option>
          <option value="Есть в наличии">Есть в наличии</option>
          <option value="Нет в наличии">Нет в наличии</option>
        </select>
      </div>

      <div className="form-group">
        <label>Страна производитель</label>
        <select
          name="country"
          className="form-control"
          onChange={handleChange}
        >
          <option>Пожалуйста выберите</option>
          {
            countries.map((item, id) => (
              <option key={id}>{item}</option>
            ))
          }
        </select>
      </div>

      <div className="form-group">
        <label>Цвет</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Пожалуйста выберите</option>
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
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Пожалуйста выберите</option>
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
        >
          <option>Пожалуйста выберите</option>
          {categories.length > 0 &&
          categories.map((c, id) => (
            <option key={id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {showSub && (
        <div>
          <label>Подкатегория</label>
          <Select
            mode="multiple"
            style={{width: "100%"}}
            placeholder="Пожалуйста выберите"
            value={subs}
            onChange={(value) => setValues({...values, subs: value})}
          >
            {subOptions.length &&
            subOptions.map((s, id) => (
              <Option key={id} value={s._id}>
                {s.name}
              </Option>
            ))}
          </Select>
        </div>
      )}

      <br/>
      <button className="btn btn-outline-info">Сохранить</button>
    </form>
  );
};

export default ProductCreateForm;
