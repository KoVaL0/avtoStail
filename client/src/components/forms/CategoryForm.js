import React, {useState} from "react";
import FileUpload from "./FileUpload";


const CategoryForm = ({setName, name, handleSubmit, setLoading, setImage, image}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Название</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          required
        />
        <div className="p-3">
          {image ? <FileUpload
            values={image}
            setValues={setImage}
            setLoading={setLoading}
          />: null }
        </div>
        <br/>
        <button className="btn btn-outline-primary">Сохранить</button>
      </div>
    </form>
  )
};

export default CategoryForm;
