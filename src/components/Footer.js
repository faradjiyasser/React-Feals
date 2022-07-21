import { useContext} from 'react'
import FooterList from './FooterList';
import FooterContext from '../context/FooterContext';
import FooterBottom from './FooterBottom';
import {Link} from "react-router-dom"
const Footer = () => {

  const {state:{headings ,Products, Solutions, Company, GetinTouch}} = useContext(FooterContext);
  return (
    <div className="footer animate">
      <div className="container">
        <div className="row">
          <div className="footer__content">
            <div className="footer__content__links row">
            <div className="col-3">
                <div className="footer__content__links__heading">
                  <Link to={"/shop"} className="footer__content__links__link animate">
                    <li>{headings.Products}</li>
                  </Link>
                </div>
                  {Products.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>
              <div className="col-3">
                <div className="footer__content__links__heading">
                  <Link to={"/mission"} className="footer__content__links__link animate">
                    <li>{headings.Solutions}</li>
                    </Link>
                </div>
                  {Solutions.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>
              <div className="col-3">
                <div className="footer__content__links__heading">
                  {headings.Company}
                </div>
                  {Company.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>
              <div className="col-3">
                <div className="footer__content__links__heading">
                  {headings.GetinTouch}
                </div>
                  {GetinTouch.map((object)=>( 
                      <FooterList route={object.route} key={object.id} categorieName={object.name} />
                  ))} 
              </div>       
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  )
}

export default Footer