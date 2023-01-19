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

const Footer = () => {
  return (
    <footer>
      <hr />
      <div>
        <img src={logo2} alt="logo" />
        <section>
          <div>
            <img src={location} alt="location" />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div>
            <div>
              <img src={phone} alt="phone" />
              <p>(123) 456-7890</p>
            </div>
            <div>
              <img src={fax} alt="fax" />
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div>
            <p>Social Media</p>
            <img src={facebook} alt="" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
