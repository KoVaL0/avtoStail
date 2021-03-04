import React from "react";
import UserNav from "../../components/nav/UserNav";

const Wishlist = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <UserNav />
      </div>
      <div className="col">Избранные товары</div>
    </div>
  </div>
);

export default Wishlist;
