// import React from 'react'
import "./topbar.css"

export default function topbar() {
  return (
    <div className ="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"
          src ="https://fsa.zobj.net/crop.php?r=DjoUuvr7pwe0r1rzvLSWrH-eux66szXOyiq6S_AiKHuCdgxKYoa4dqICURZZn0e9DEaTpLOdhCfMK8KC6XJxz7omGtQ3_mpcIqYbYfsKDBtmRo5ppDVlC_Jx7zpVK7GlYoZipUFpD_mCuzbv" alt =""/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>      
    </div>
  )
}
