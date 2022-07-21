import React from 'react'
import {RiLeafLine} from "react-icons/ri"
import { IoEarthOutline,IoMedalOutline } from "react-icons/io5";
const Certificate = () => {
    return (
        <div className="certificate">
            <div className="container">
                <div className="row justify maxwidth80">
                    <div className="certificate__heading animate col-12">
                    <div className="certificate__heading__cards row animate">
                        <div className="certificate__heading__cards__card col-4">
                            <RiLeafLine size={70} className="certificateIco"/>
                            <h2>USDA Organic</h2>
                            <p>Crafted with quality and care.</p>
                        </div>
                        <div className="certificate__heading__cards__card col-4">
                            <IoMedalOutline size={70} className="certificateIco"/>
                            <h2>Triple Tested</h2>
                            <p>Certificate of Analysis provided.</p>
                        </div>
                        <div className="certificate__heading__cards__card col-4">
                            <IoEarthOutline size={70} className="certificateIco"/>
                            <h2>Non-GMO</h2>
                            <p>No fillers, no fluff. </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 justify">
                        <div className="certificate__subheading animate"><span></span></div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Certificate