import React from "react";
import "./items.css";
import { Link } from "react-router-dom";


export const Items = (props) => {

  return (
    <div className="item col-6 col-md-3 col-lg-3 p-3">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="Products" title="View Details" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p className="p-2">{props.name}</p>
      <div className="item-prices px-2">
        <div className="item-price-new">
          ₹{props.new_price}
        </div>
        <div className="item-price-old">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};
