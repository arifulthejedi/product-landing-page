
import logo from "../assets/wirecutter-logo.svg";
import search from "../assets/search.svg";
import cross from "../assets/cross.svg";
import { useEffect, useState } from "react";

function Nav(props) {


    return <>
        <div className="nav">
            <ul>
                <li>Home & Gardern</li>
                <li>Kitchen</li>
                <li>Health & Leisure</li>
                <li>Tech</li>
                <li>Kid & Baby</li>
                <li>Style</li>
                <li>Gifts</li>
                <li>Shoping</li>
                <li>Deal</li>
            </ul>
        </div>
    </>

}


function Section(props) {

    useEffect(() => {
        let inp = document.querySelector(".search input");
        let src = document.querySelector(".search");

        inp.addEventListener("focus", () => {
            src.style.backgroundColor = "#ececec";
        })

        inp.addEventListener("blur", () => {
            src.style.backgroundColor = null;
        })

    }, [])




    return <>
        <div class="header-section">
            <div className="search" >
                <img width="19px" src={search} alt="search" />
                <input type="text" placeholder="Show me the research on..." />
            </div>
            <div onClick={props.open} className="ham-burg" >
                <a href="#"></a>
            </div>
            <div className="logo">
                <img width="100%" src={logo} />
            </div>
            <div className="login-subscribe">
                <div className="login">
                    Log in
                </div>
                <div className="subs">
                    <a href="#" style={{ textDecoration: "none", color: "white" }}>Subscribe</a>
                </div>
            </div>
        </div>

    </>

}





export default function Header(props) {

    let [openNav, setOpenNav] = useState(false);

    let open = ()=>{
        setOpenNav(true);
    }

    let close = ()=>{
        setOpenNav(false);
    }


    return <div className="header-container">
            {openNav && <div className="mobile-nav">
            <div onClick={close} className="cross">
                <img width="100%" src={cross} />
            </div>
            <center>
                <h3>
                   Mobile Nav Section
                </h3>
            </center>
          </div>}
        <div id="header">
            <Section open={open}/>
            <Nav />
        </div>
    </div>
}