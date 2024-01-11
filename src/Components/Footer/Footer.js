import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <footer className="footer">
    //   <div className="footer-logo">
    //     <h2>CruiseWheels.</h2>
    //   </div>
    //   <div className="footer-terms">
    //     <span>
    //       <p>Terms and condition</p>
    //     </span>{" "}
    //     <span>
    //       <p>Privacy Policy</p>
    //     </span>{" "}
    //     <span>
    //       <p>&copy; CruiseWheels</p>
    //     </span>
    //   </div>
    // </footer>

    <section className="footer">
      <div className="footer1">
        <div className="footer-get">
          <h1> CruiseCarts.</h1>
          <p>
            CruiseCart was created by Emerole Chinaeme a frontend mastermind ,it
            gives people an E-commerce enviroment that is fun to shop from .
            Please make sure you buy something before you leave. Thank you :)
          </p>

          <div className="privacy">
            <p>
              Terms of Use <span>Privacy Policy</span>
            </p>
          </div>
        </div>

        <div className="footer-use">
          <p>
            <span>Useful Links</span>
          </p>

          <div className="follow">
            <div>
              <h5>follow me</h5>
            </div>
            <div className="social">
              <Link className="linke" to="supportpage">
                <i class="fa-brands fa-square-x-twitter"></i>
              </Link>
              <Link className="linke" to="supportpage">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Created By Chinaeme Emerole © CruiseCart.</p>
      </div>
    </section>
  );
}

export default Footer;
