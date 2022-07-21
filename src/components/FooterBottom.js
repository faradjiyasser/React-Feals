import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook, BsPinterest} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa"
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className="footer__content__bottom row col-12">
        <div className="footer__content__bottom__rights col-6">
            <span>&copy;2022 Faradji Yasser.</span> 
        </div>
        <ul className="footer__content__bottom__contact col-6 row">
            <li><Link to={"/"}>PRIVACY POLICY</Link></li>
            <li><Link to={"/"}>TERMES OF SERVICE</Link></li>
            <li><Link to={"/"}>REFUND POLICY</Link></li>
            
            <li><Link to={"/"}><BsTwitter className="twitter" size={20}/></Link></li>
            <li><Link to={"/"}><BsLinkedin className="linkedIn" size={20}/></Link></li>
            <li><Link to={"/"}><BsInstagram className="insta" size={20}/></Link></li>
            <li><Link to={"/"}><BsFacebook className="facebook" size={20}/></Link></li>
            <li><Link to={"/"}><FaTiktok className="" size={20}/></Link></li>   
            <li><Link to={"/"}><BsPinterest className="pinterest" size={20}/></Link></li>  
        </ul>
    </div>
  )
}

export default FooterBottom