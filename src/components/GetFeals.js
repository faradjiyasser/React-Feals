import React from 'react'
import {Link} from "react-router-dom"
const GetFeals = () => {
    return (
        <div className="feals">
            <div className="container">
                <div className="row">
                        <div className="col-12 justify">
                            <div className="feals__h1 animate">
                                <h1>You deserve this.</h1>
                            </div>
                        </div>
                        <div className="col-12 justify">
                            <div className="feals__paragraph animate">
                                <p>Let's get you feeling better. Your mind and body will thank you.</p>
                            </div>
                        </div>
                        <div className="col-12 justify">
                                <Link to={"/"}>
                                    <input type="button" value="get feals" className="btn-default" />
                                </Link>
                        </div>
                </div>
            </div>
        </div>
      )
}

export default GetFeals