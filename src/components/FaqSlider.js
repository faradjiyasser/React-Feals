import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const FaqSlider = ({FaqData}) => {
    const [current, dispatch] = useState(-1);
    const showSlider=(index)=>{
        dispatch(index);
    }
  return (
    
    FaqData.map((data, index)=>(
        <div className="faq__slider  animate" key={index} >     
            <div className="faq__slider__body" onClick={()=>showSlider(index)}>
                <div className="faq__slider__body__heading">
                    <div className={current === index ? "faq__slider__body__heading__text--show" : "faq__slider__body__heading__text"}>
                        <h2>{data.title}</h2>
                    </div>
                    <div className="faq__slider__body__heading__icon">
                        <AiOutlineRight size={15} className={current === index ?"faqIco--show" : "faqIco"} />
                    </div>
                </div>
                <div className={current === index ? "faq__slider__body__paragraph--show" :"faq__slider__body__paragraph"} >
                    <p>{data.paragraph}</p>
                </div>
            </div>
        </div>
    ))
    
  )
  
}

export default FaqSlider