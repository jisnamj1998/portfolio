import React from 'react'
import profilePicture from "../assets/images/profile.jpg"

function Profile({profiletitle}) {
  
  return (
    <div>
      <div><h1>Profile title: {profiletitle}</h1></div>
      <div>
        <img src={profilePicture} alt="" />
      </div>
    </div>
  )
}

export default Profile
