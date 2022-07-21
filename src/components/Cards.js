import { Link } from "react-router-dom"
const Cards = ({image, title, paragraph, icon}) => {
  return (
        <div className="col-4 justify animate">
            <div className="landing__card">
                <div className="landing__card__images">
                    <img src={image} alt={image} />
                </div>
                <nav className="landing__card__body">
                    <Link to={"/"} className="linkStyle">
                        <h1 className="landing__card__title">
                            {title}
                        </h1>
                        <div className="landing__card__icon">
                            {icon}
                        </div>
                        <p className="landing__card__paragraph">
                            {paragraph}
                        </p>
                    </Link>
                </nav>
            </div>
        </div>
  )
}

export default Cards