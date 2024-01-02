

export default function Header() {


  return <>
    <header>
      <div className="nav-mobile">
      </div>
      <div className="aside">
        <div className="aside-content">
        <p className="content">
          Choose another country or region to see content specific to your location and
        </p>
        <div className="search-country">
          <div className="search-bar">
            <img src="#" alt="search icon" />
          </div>
          <button>
            Continue
          </button>
        </div>
        </div>
      </div>
      <nav>
        <div className="header-logo">
          <img src="#" />
        </div>
        <ul className="manu-container">
          <li className="manu-item">Store</li>
          <li className="manu-item">Mac</li>
          <li className="manu-item">iPad</li>
          <li className="manu-item">iPhone</li>
          <li className="manu-item">Watch</li>
          <li className="manu-item">Tv & home</li>
          <li className="manu-item">Entertainment</li>
          <li className="manu-item">Accessories</li>
          <li className="manu-item">Support</li>
        </ul>
        <div className="header-search-bar">
          <img src="#" alt="search logo" />
        </div>
        <div className="shoping-card">
          <img src="#" alt="shoping logo" />
        </div>
      </nav>
    </header>
  </>
}