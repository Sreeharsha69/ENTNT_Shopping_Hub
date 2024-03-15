import React from "react";
import { Link } from "react-router-dom";
import mobile from "./pics/mobile.jpg";
import laptop from "./pics/laptop.jpg";
import tv from "./pics/tv.jpg";
import ac from "./pics/ac.jpg";
import earphones from "./pics/earphones.jpg";
import fridge from "./pics/fridge.jpg";
import bags from "./pics/bags.jpg";
import fans from "./pics/fans.jpg";
import watches from "./pics/watches.jpg";
import "../Styles/Home.css";
import books from "./pics/3.jpg";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="left">ENTNT HUB</div>
        <div className="right">
          <button>SEARCH</button>
          <input type="search" />
          <button>
            <Link
              to="/product"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              PRODUCTS
            </Link>
          </button>

          <button>
            <Link
              to="/order"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ORDERS
            </Link>
          </button>
          <button>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CART
            </Link>
          </button>
          <button>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              LOGOUT
            </Link>
          </button>
          <button>CONTACT</button>
          <button>ABOUT</button>
        </div>
      </div>

      <div className="logout">
        <br></br>
        <br></br>

        <div>
          <Link to="/mobiles">
            <img src={mobile} alt="Mobiles" />
          </Link>
        </div>
        <div>
          <Link to="/laptop">
            <img src={laptop} alt="Laptop" />
          </Link>
        </div>
        <div>
          <Link to="/tv">
            <img src={tv} alt="TV" />
          </Link>
        </div>
        <div>
          <Link to="/fridge">
            <img src={fridge} alt="Fridge" />
          </Link>
        </div>
        <div>
          <Link to="/fans">
            <img src={fans} alt="Fans" />
          </Link>
        </div>
        <div>
          <Link to="/ac">
            <img src={ac} alt="Ac" />
          </Link>
        </div>
        <div>
          <Link to="/earphones">
            <img src={earphones} alt="EarBuds" />
          </Link>
        </div>
        <div>
          <Link to="/bags">
            <img src={bags} alt="Bags" />
          </Link>
        </div>
        <div>
          <Link to="/watches">
            <img src={watches} alt="Watches" />
          </Link>
        </div>
        <div>
          <Link to="/books">
            <img src={books} alt="Books" />
          </Link>
        </div>
      </div>
    </div>
  );
}
