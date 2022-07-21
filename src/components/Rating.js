import { AiFillStar } from "react-icons/ai";
import React from 'react'

const Rating = () => {
    const rate =(number)=>{
        let container =[];
            for (let index = 0; index < number; index++) {
                container.push(<AiFillStar size={20} className={"rateStar"} key={index}/>
                )
            }
        return container  
    }
  return (
    <div className="rating">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="rating__text">
                        <p>over 7,000 5-star customer reviews</p>
                    </div>
                    <div className="rating__stars">
                        {rate(5)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rating