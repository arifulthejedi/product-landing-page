import cross from "../assets/cross.svg";
import select from "../assets/select.svg";
import tic from "../assets/tic-mark.svg";


//nav icons
import cart from "../assets/cart.svg";
import apple from "../assets/apple.svg";
import search from "../assets/search.svg";


export default function Header() {


  return <>
    <header>
      <div className="nav-mobile">
      </div>
      <div className="aside">
        <div className="aside-content">
        <p className="content">
          Choose another country or region to see content specific to your location and shop online
        </p>
        <div className="search-country">
          <button className="search-bar">
            <img src={tic} alt="tic-mark" />
            <p>United State</p>
            <img src={select} alt="selection" />
          </button>
          <button className="continue">
            Continue
          </button>
          <button className="search-cross">
             <img src={cross} alt="cross"/>
          </button>
        </div>
        </div>
      </div>
      <nav>
        <ul className="manu-container">
        <li className="manu-item header-logo">
           <img src={apple} alt="apple logo" />
        </li>
          <li className="manu-item">Store</li>
          <li className="manu-item">Mac</li>
          <li className="manu-item">iPad</li>
          <li className="manu-item">iPhone</li>
          <li className="manu-item">Watch</li>
          <li className="manu-item">Tv & home</li>
          <li className="manu-item">Entertainment</li>
          <li className="manu-item">Accessories</li>
          <li className="manu-item">Support</li>
          <li className="manu-item nav-search-bar">
             <img src={search} alt="search logo" />
          </li>
          <li className="manu-item shoping-cart">
             <img src={cart} alt="cart" />
          </li>
        </ul>
      </nav>
    </header>
  </>
}