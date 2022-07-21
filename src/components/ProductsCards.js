import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductsCards = ({image , title, paragraph,link,rate,review,price}) => {

    const ratingProduct =(number)=>{
        let container =[];
        for (let i = 1; i <= 5; i++) {
            if (i <= number) {
                container.push(<AiFillStar size={20} className={"rateStar"} key={i}/>)
            }else {
                container.push(<AiOutlineStar size={20} className={"rateStar"} key={i}/>)
            } 
        }
        return container
    }
    return (
      <div className="col-6 justify">
        <div className="products__card animate">
          <Link to={link} className="none products__card__body ">
                <div className="products__card__body__separator">
                    <div className="products__card__body__separator__images">
                        <div className="products__card__body__separator__images__image">
                            <LazyLoadImage src={image} alt={image} />
                        </div>
                    </div>
                    <h1 className="products__card__body__separator__title">
                        {title}
                    </h1>

                    <div className="products__card__body__separator__rating">
                        <div className="products__card__body__separator__rating__stars">
                            {ratingProduct(`${rate}`)}
                        </div>
                        <div className="products__card__body__separator__rating__p">
                            {review} <p>Reviews</p>
                        </div>
                    </div>
                    <p className="products__card__body__separator__paragraph">
                        {paragraph}
                    </p> 
                </div>
                <div className="products__card__body__separator__btn">
                    <p>${price}</p>
                    <p>Add to Cart</p>
                </div>

          </Link>
          </div>
      </div>
    )
  }
  
  export default ProductsCards