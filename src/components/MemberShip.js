import { AiOutlineSchedule, AiOutlineDollarCircle} from "react-icons/ai";
import { IoHandLeftOutline } from "react-icons/io5";
const MemberShip = () => {
    return (
        <div className="memberShip">
            <div className="container">
                <div className="row justify maxwidth80">
                    <div className="memberShip__span animate col-12">
                        <h2>Membership Perks</h2>
                    </div>
                    <div className="memberShip__heading animate col-12">
                        <h1>Feeling better, made easier.</h1>
                    </div>

                    <div className="memberShip__heading__cards col-12 row animate">
                        
                        <div className="memberShip__heading__cards__card col-4">
                            <AiOutlineSchedule size={70} className="memberShipIco"/>
                            <p>Conveniently delivered on your schedule.</p>
                        </div>
                        <div className="memberShip__heading__cards__card col-4">
                            <AiOutlineDollarCircle size={70} className="memberShipIco"/>
                            <p>Save 30% on every order.</p>
                        </div>
                        <div className="memberShip__heading__cards__card col-4">
                            <IoHandLeftOutline size={70} className="memberShipIco"/>
                            <p>Pause, swap, or cancel at any time.</p>
                        </div>
                    </div>

                    <div className="col-12 justify">
                        <div className="memberShip__subheading animate"><span></span></div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default MemberShip