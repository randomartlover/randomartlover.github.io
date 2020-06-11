import React from "react";
import Phone from "../social_media_logos/Phone.png";
import Message from "../social_media_logos/Message.png";
import Facebook from "../social_media_logos/Facebook.png";
import Copyright from "../social_media_logos/Copyright.png";
import GooglePlus from "../social_media_logos/GooglePlus.png";
import Add from "../social_media_logos/Add.png";
import Twitter from "../social_media_logos/Twitter.png";

export default function Footer() {
  return (
    <footer className="row">
      <nav className="col-md-3">
        <div className="col-sm-3 icon-align">
          <img src={Phone} alt="Phone" className="material-icons" />
        </div>
        <div className="col-sm-9">
          <h6>
            <b>Call</b>
          </h6>
          <h6>T: +2348124685807</h6>
          <h6>F: +2348124685807</h6>
        </div>
      </nav>

      <nav className="row col-md-3">
        <div className="col-sm-3 icon-align">
          <img src={Message} alt="Message" className="material-icons" />
        </div>

        <div className="col-sm-9">
          <h6>
            <b>Contact</b>
          </h6>
          <h6>github.com/randomartlover</h6>
        </div>
      </nav>

      <nav className="row col-md-3">
        <div className="col-sm-3 icon-align ">
          <img src={Add} alt="Add" className="material-icons"/>
        </div>
        <div className="col-md-9">
          <h6>
            <b>Follow me </b>
          </h6>
          
          <img src={Facebook} alt="Facebook"  className="social-icons"/>
          <img src={Twitter} alt="Twitter"  className="social-icons"/>
          <img src={GooglePlus} alt="GooglePlus"  className="social-icons"/>
         
        </div>
      </nav>

      <nav className="row col-md-3">
        <div className="col-sm-3 icon-align">
          <img src={Copyright} alt="Copyright" className="material-icons"/>
        </div>
        <div className="col-sm-9">
          <h5>© 2020 by Alexandra</h5>
        </div>
      </nav>
    </footer>
  );
}
