
const Snav = () => {
    const logo="/assets/images/logo.png";
  return (
    <div className="container2">
        <div className="snav">
            <div className="snav__logo">
                <img src={logo} alt={logo} />
            </div>
            <div className="snav__list">
                <div className="snav__list__icon">
                    <span></span>
                </div>
                <div className="snav__list__items">
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Snav