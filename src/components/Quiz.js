import { Link } from "react-router-dom";
const Quiz = () => {
    const DeskImage = "/assets/images/quizImage.jpg";
    return(
        <div className="quiz" >
            <div className="quiz__image">
                <img src={DeskImage} alt="pic" />
            </div>

            <div className="container">
                <div className="quiz__body">
                    <div className="row">
                        <div className="col-12">
                            <div className="quiz__body__left">
                                <h1 className="quiz__body__left__heading">
                                Relief tailored to you.
                                </h1>
                                <p className="quiz__body__left__paragraph">
                                New? We'll help remove the guesswork and make it simple to find the right product to help you feel your best today and support you long-term. 
                                </p>
                                <Link to={"/"}>
                                <input type="button" value="Take the Quiz" className="btn-default mt-45" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz