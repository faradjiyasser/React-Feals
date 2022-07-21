import FaqSlider from "./FaqSlider"
import FaqData from "../data/FaqData"
const Faq = () => {

  return (
    <div className="faq">
            <div className="container">
                <div className="row justify">
                    <div className="faq__span animate col-12 animate">
                        <h2>faq</h2>
                    </div>
                    <div className="faq__heading animate col-12 animate">
                        <h1>You have questions, we have answers.</h1>
                    </div>
                    <div className="col-12">
                    <FaqSlider FaqData={FaqData} />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Faq