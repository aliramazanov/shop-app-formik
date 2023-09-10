import { useSelector } from "react-redux";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );
  const basket = useSelector((state) => state.basketProducts.basket);

  return (
    <div className="header-wrapper">
      <div className="header-component-wrapper">
        <h1>Hobby Shop</h1>
        <div className="routes">
          <NavLink className="navlinks" to="/">
            Home
          </NavLink>
          <NavLink className="navlinks" to="/favourites">
            Favourites: {favourites.length}
          </NavLink>
          <NavLink className="navlinks" to="/basket">
            Basket: {basket.length}
          </NavLink>
          <NavLink className="navlinks" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
