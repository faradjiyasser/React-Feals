import {MdOutlineWavingHand } from "react-icons/md"
import {RiLeafLine} from "react-icons/ri"
import {GiUsaFlag} from "react-icons/gi"
import {TbPuzzle2} from "react-icons/tb"
const Guarantee = () => {
    const image = "/assets/images/happywoman.jpg";
  return (
    <div className="guarantee">
        <div className="container">
            <div className="row">
                    <div className="guarantee__left col-6 animate">
                        <img src={image} alt={image} />
                    </div>
                    <div className="guarantee__body col-6">
                    <div className="guarantee__body__right">
                        <div className="guarantee__body__right__subHeading animate">
                            <h2>Happiness Guarantee</h2>
                        </div>
                        <div className="guarantee__body__right__heading animate">
                            <h1>Love it, or it’s on us.</h1>
                        </div>

                        <div className="guarantee__body__right__content  animate">
                            <div className="guarantee__body__right__content__icon">
                                <MdOutlineWavingHand size={35} className="memberShipIco"/>
                            </div>
                            <div className="guarantee__body__right__content__text">
                                <h2>Try Feals risk-free</h2>
                                <p>Free shipping and free returns.</p>
                            </div>
                        </div>
                        <div className="guarantee__body__right__content  animate">
                            <div className="guarantee__body__right__content__icon">
                                <TbPuzzle2 size={35} className="memberShipIco"/>
                            </div>
                            <div className="guarantee__body__right__content__text">
                                <h2>No fuzzy haze</h2>
                                <p>Feel better and keep a clear head.</p>
                            </div>
                        </div>
                        <div className="guarantee__body__right__content  animate">
                            <div className="guarantee__body__right__content__icon">
                                <RiLeafLine size={35} className="memberShipIco"/>
                            </div>
                            <div className="guarantee__body__right__content__text">
                                <h2>All natural ingredients</h2>
                                <p>Grown with care by US farmers.</p>
                            </div>
                        </div>
                        <div className="guarantee__body__right__content  animate">
                            <div className="guarantee__body__right__content__icon">
                                <GiUsaFlag size={35} className="memberShipIco"/>
                            </div>
                            <div className="guarantee__body__right__content__text">
                                <h2>Ships all across the US</h2>
                                <p>No prescription needed.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guarantee