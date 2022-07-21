
const Header =()=>{
    const DeskImage = "/assets/images/headerDeskImage.jpg";
    return(
        <div className="header" >
            <div className="header__image">
                <img src={DeskImage} alt="pic" />
            </div>

            <div className="container">
                <div className="header__body">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body__left">
                                <h1 className="header__body__left__heading">
                                A better way
                                to focus
                                </h1>
                                <p className="header__body__left__paragraph">
                                Focus Melts keep you in the zone, without caffeine.
                                </p>
                                <input type="button" value="Shop Focus Melts" className="btn-default mt-45" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;