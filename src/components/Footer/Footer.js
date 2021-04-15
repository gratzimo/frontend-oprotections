import React from "react";
import "./Footer.scss";
import amazonIcon from "../../static/images/amazon.svg";
import instagramIcon from "../../static/images/instagram.svg";
import fbIcon from "../../static/images/facebook.svg";
import emailIcon from "../../static/images/email.svg";
import upArrow from "../../static/images/up-arrow.svg";

const amazonLink =
  "https://www.amazon.in/Air-purifier-FILTRATION-STERILIZES-DISINFECTS/dp/B08XTVCHZS/ref=sr_1_3?dchild=1&keywords=o+air+purifier&qid=1618497797&sr=8-3";

const instaLink = "https://www.instagram.com/oprotections/";

// const fbLink = ""

const emailLink = "mailto:someone@example.com";

function Footer(props) {
  const openLink = (link) => {
    window.open(link);
  };

  return (
    <div className="component-footer">
      <div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        Back to top <img height="20px" src={upArrow} alt="up-arrow" />
      </div>
      <div className="line-div"></div>
      <div className="inner-div">
        <div className="social-media-div">
          <div className="footer-title">FOLLOW #OPROTECTIONS</div>
          <div className="img-div">
            <img
              onClick={() => openLink(amazonLink)}
              src={amazonIcon}
              alt="amazon"
            />
            <img
              onClick={() => openLink(instaLink)}
              src={instagramIcon}
              alt="instagram"
            />
            {/* <img
              onClick={() => openLink(instaLink)}
              src={fbIcon}
              alt="facebook"
            /> */}
            <img
              onClick={() => openLink(emailLink)}
              src={emailIcon}
              alt="email"
            />
          </div>
        </div>
        <div className="details-div">
          <span>Contact us</span>
          <br />
          oprotections@gmail.com
          <br />
          Ph: +91-7982995992
        </div>
      </div>
    </div>
  );
}

export default Footer;
