import "./Footer.css";
import logo2 from "../../Assets/logo.png";
import phone from "../../Assets/phone.svg";
import location from "../../Assets/location.svg";
import fax from "../../Assets/fax.svg";
import instagram from "../../Assets/instagram.svg";
import linkedin from "../../Assets/linkedin.svg";
import pinterest from "../../Assets/pinterest.svg";
import rss from "../../Assets/rss.svg";
import twitter from "../../Assets/twitter.svg";
import facebook from "../../Assets/facebook.svg";
import youtube from "../../Assets/youtube.svg";
import google from "../../Assets/googleplus.svg";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-div">
        <img src={logo2} alt="logo" className="logo2"/>
        <section>
          <div>
            <img src={location} alt="location" />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="phone-no-div">
            <div id="footer-subdiv">
              <img src={phone} alt="phone" />
              <p>(123) 456-7890</p>
            </div>
            <div>
              <img src={fax} alt="fax" />
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div id="media">
            <p>Social Media</p>
            <div>
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
              <img src={youtube} alt="youtube" />
              <img src={instagram} alt="instagram" />
              <img src={google} alt="google" />
              <img src={pinterest} alt="pinterest" />
              <img src={rss} alt="rss" />
            </div>
          </div>
        </section>
      </div>
      <section className="footer-sect2">
        <div>
          <p>About us</p>
          <p>Contact us</p>
          <p>Help</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
        <p className="copyright">Copyright © 2020 Minimumlivingcost. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
