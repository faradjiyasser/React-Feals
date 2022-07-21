import React from 'react'
import FriendsData from '../data/FriendsData'
import {Link} from "react-router-dom"
const FriendsList = () => {
  return (
    FriendsData.map((friend)=>(
        <div className="col-4 animate" key={friend.id}>
            <div className="friends__image">
                <Link to={friend.link}>
                    <img src={friend.image} alt={friend.image} />
                </Link>
            </div>
        </div>  
    ))
  )
}

export default FriendsList