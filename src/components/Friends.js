import FriendsList from "./FriendsList"
const Friends = () => {
    return (
        <div className="friends">
            <div className="container">
                <div className="row">
                        <div className="landing__span col-12  animate">
                                <h2>Social</h2>
                            </div>
                        <div className="col-12 justify">
                            <div className="friends__h1 animate">
                                <h1>Let’s be friends.</h1>
                            </div>
                        </div>
                        <div className="col-12 justify">
                            <div className="friends__paragraph animate">
                                <p>Join the convo with #FealsBetter.</p>
                            </div>
                        </div>
                        <div className="col-12 row">
                            <FriendsList />
                        </div>
                </div>
            </div>
        </div>
      )
}

export default Friends