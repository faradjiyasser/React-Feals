import React from 'react'
import Cards from './Cards'
import CardsData from '../data/CardsData'
const LandingPages = () => {

  return (
    <div className="landing">
        <div className="container">
            <div className="row justify maxwidth80">
                <div className="landing__span col-12">
                    <h2>The Benefits</h2>
                </div>
                <div className="landing__heading animate col-12">
                    <h1>feel Balanced.</h1>
                </div>
                <p className="landing__paragraph animate col-12">
                Helping people manage distraction, anxiety, and sleeplessness.
                </p>
                
                {CardsData.map((card)=>(
                    <Cards image={card.image} title={card.title} paragraph={card.paragraph} icon={card.icon} key={card.title} />
                ))}
                <div className="col-12 justify">
                    <div className="landing__subheading animate"><span></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPages