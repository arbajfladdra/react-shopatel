// import FooterImg from "./footer.png";
const Footer = () => {
  return (
    <footer className="row bg-dark">
      <section className="footer-wrapper smooth-scroll container">
        <div className="footer-img flex-col-1">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s20/images/galaxy-s20_highlights_kv_00.jpg?$ORIGIN_JPG$"
            alt=""
            className="f-img"
          />
        </div>
        <div className="footer-brand-name">
          <h2>SHOPATEL</h2>
        </div>
        <div className="footer-info flex-col-1">
          <div className="footer-details">
            <h2>
              {" "}
              SELLS NEW,OLD AND REFUBRISHED ELECTRONIC DEVICE / REPAIRING /
              WARRENY UPTO 1 YEAR / GAMING RIG/ TRUSTABLE ALWAYS ANYWHERE
            </h2>
          </div>
        </div>

        <div className="footer-contact flex-col-2">
          <div>
            {" "}
            <div className="contact-item">
              <span>Phone : </span>
              <a href="tel:1234567890" target="blank">
                {" "}
                +(91) 1234567890
              </a>
            </div>
            <div className="contact-item">
              <span>Mail : </span>

              <a href="mail:qwerty@email.com" target="blank">
                shopatel@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span>Address : </span>
              <a href="google_map_address_here" target="blank">
                Poona Camp, India, Asia.
              </a>
            </div>
          </div>

          {/*<nav className="footer-navlinks">
                      <ul type = "none"className="footer-nav-list">
                          <li className="footer-nav-list-item"><Link exact to="/">Home</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/services">Services</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/articles">Articles</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/about">About Us</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/register">Register</Link></li>
                      </ul>
                  </nav>*/}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
