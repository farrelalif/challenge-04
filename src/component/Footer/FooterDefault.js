import React from "react";
import './Footer.css'
import facebook from '../../Img/icon_facebook.png'
import instagram from '../../Img/icon_instagram.png'
import twitter from '../../Img/icon_twitter.png'
import mail from '../../Img/icon_mail.png'
import twitch from '../../Img/icon_twitch.png'
import logo from '../../Img/logo.png'

export const FooterDefault = () => {
  return (
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        {/* Column2 */}
        <div className="col">
         <p>Our services</p>
         <p>Why Us</p>
         <p>Testimonial</p>
         <p>FAQ</p>
        </div>
        {/* Column3 */}
        <div className="col">
        <p>Connect with us</p>
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={twitter}/>
        <img src={mail}/>
        <img src={twitch}/>
        
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          <p>Copyright Binar 2022</p>
          <img src={logo}/>
        </p>
      </div>
    </div>
  </div>
  );
};
