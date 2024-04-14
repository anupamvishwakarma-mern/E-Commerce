import React from "react";
import './shop.css'
import { useCustom } from "../../Context/ShopContext";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";
import { Items } from "../../Components/items/Items";
import right_arrow from "../../Components/Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";


export const ShopCategory = (props) => {

  const { all_product } = useCustom()

  return (
    <div className="shop-category">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        {/* <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div> */}
        <div className="dropdown">
          <button className="dropdown-toggle shopcategory-sort" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Price</Link></li>
            <li><Link className="dropdown-item" to="#">Brand</Link></li>
            <li><Link className="dropdown-item" to="#">Newest</Link></li>
          </ul>
        </div>
      </div>
      <div className="shopcategory-products row">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
        <span>
          <img src={right_arrow} alt="" />
          <img src={right_arrow} alt="" />
        </span>
      </div>
    </div>
  );
};
