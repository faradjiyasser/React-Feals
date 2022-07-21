import { useState } from "react";
import { useContext, useEffect } from "react";
import { AiOutlineShoppingCart,AiOutlineDown } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ArrowContext from "../animations/ArrowContext";

const Navbar =()=>{
    const logo = "/assets/images/logo.png";
    const {arrow:{products},setArrow} = useContext(ArrowContext);
    const [toggle, setToggle] = useState(false)
    const toggleMenu=()=>{
        if(toggle == false)(setToggle(true))
        else(setToggle(false))
    }
    console.table(toggle)

    const check =()=>{
        const elements = document.querySelectorAll(".color");
        const navPosition = elements[0].getBoundingClientRect().top;
        if (navPosition < 0){
            for (let i=1; i<=5; i++){
                elements[i].classList.remove("hover-underline-animation")
                elements[i].classList.add("hover-underline-animation--black")
            }
        } else {
            for (let i=1; i<=5; i++){
                elements[i].classList.remove("hover-underline-animation--black")
                elements[i].classList.add("hover-underline-animation")
            }
        };
        
    }
    
    const navAnimation =()=>{
        const elements = document.querySelectorAll(".full");
        const navPosition = elements[0].getBoundingClientRect().top;
        if(navPosition < 0){
            elements[0,1].classList.add("light-nav")
            elements[0,1].classList.remove("dark-nav")
            
            for (let i=2; i<4; i++){
                elements[i].classList.add("searchIcon")
                elements[i].classList.remove("searchWhiteIcon")
            }
      
            for (let i=4; i<7; i++){
                elements[i].classList.add("blackBg")
                elements[i].classList.remove("whiteBg")
            }
        }else if(navPosition === 0){
            elements[0,1].classList.add("navbar")
            elements[0,1].classList.remove("light-nav")

            for (let i=2; i<4; i++){
                elements[i].classList.add("searchWhiteIcon")
                elements[i].classList.remove("searchIcon")
            }
            
            for (let i=4; i<7; i++){
                elements[i].classList.add("whiteBg")
                elements[i].classList.remove("blackBg")
            }
        } 

    }
    useEffect(()=>{
        window.addEventListener("scroll",navAnimation);
        
    },[])
    useEffect(()=>{
        window.addEventListener("scroll",check);
        
    },[])

    return(
        <div className="container2">
        <div className="justify full color">
            <div className="navbar full">
                <div className="navbar__elements">
                    <div className="navbar__elements__logo">
                        <Link to={"/"}><img src={logo} alt={logo} /></Link>
                    </div>
                    <ul className="navbar__elements__body" >
                        <li className="navbar__elements__body__li hover-underline-animation color" onMouseOver={()=>setArrow({type:"toggle1"})} onMouseOut={()=>setArrow({type:""})}>Shop <AiOutlineDown size={12} className={ products ? "up-arrow" : "down-arrow"} /></li>

                        <li className="navbar__elements__body__li hover-underline-animation color">MemberShip</li>

                        <li className="navbar__elements__body__li hover-underline-animation color">Quality</li>

                        <li className="navbar__elements__body__li hover-underline-animation color">Education</li>
                        
                        <li className="navbar__elements__body__li hover-underline-animation color">Stories</li>
                    </ul>
                    <div className="navbar__elements__end">
                        <div className="navbar__elements__end__ele"><IoPersonOutline size={22} className=" searchWhiteIcon full"/> </div>
                        <div className="navbar__elements__end__ele "><AiOutlineShoppingCart size={22} className="searchicon searchWhiteIcon full"/></div>
                        <div className="navbar__elements__end__ele">
                            <div className="navbar__elements__end__ele__span" onClick={()=>toggleMenu()}>
                                <span className="whiteBg full"></span>
                                <span className="whiteBg full"></span>
                                <span className="whiteBg full"></span>
                            </div>
                            <div className={toggle ? "navbar__elements__end__ele__ul--show" : "navbar__elements__end__ele__ul"}>
                                <li><Link to={"/shop"}>Shop</Link></li>
                                <li><Link to={"/member Ship"}>Member Ship</Link></li>
                                <li><Link to={"/quality"}>Quality</Link></li>
                                <li><Link to={"/education"}>Education</Link></li>
                                <li><Link to={"/stories"}>Stories</Link></li>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;