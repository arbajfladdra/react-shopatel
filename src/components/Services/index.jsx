import "./Services.style.css";
import * as Icons from "../Icons/Icons";
import "../HeroPage/HeroPage.style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    y: "50vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.0,
      duration: 1,
      type: "tween",
      stiffness: 50,
    },
  },
  exit: {
    y: "-50vh",
    opacity: 0,
    transition: {
      type: "tween",
    },
  },
};
const Services = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="services-wrapper row bg-white "
      >
        <section className="section-flex-wrapper  smooth-scroll container">
          <div className="section-flex-item section-details">
            <h2>A Few Areas Where We Work </h2>
            <p className="lead" style={{ width: "100%", fontSize: "1.3rem" }}>
              We will greet in a powerfull manner
            </p>
          </div>
        </section>
        <section className="section-flex-wrapper  smooth-scroll container">
          <div className="section-flex-item section-img-wrapper">
            <img
              src="https://i.pinimg.com/originals/20/61/9b/20619b195a28f29a5743441ba6811b27.jpg"
              alt=""
              className="section-img"
            />
          </div>
          <div className="section-flex-item section-details">
            <h2 className="section-headline">Repair</h2>
            <p className="lead">
              We can repair your all electronic devices. Laptops,mobile and
              watches
            </p>
          </div>
        </section>
        <section className="section-flex-wrapper  smooth-scroll container reverse-section-flex">
          <div className="section-flex-item section-img-wrapper">
            <img
              src="https://www.droidmen.com/wp-content/uploads/2019/07/Things-to-Consider-before-Buying-a-New-Laptop.jpg"
              alt=""
              className="section-img"
            />
          </div>
          <div className="section-flex-item section-details">
            <h2 className="section-headline">Sell New & Refubrished </h2>
            <p className="lead">
              We sell refubirhsed and new elctronice devices at low cost. In our
              refubrished products 1 year warrent only T&C.
            </p>
          </div>
        </section>
        <section className="section-flex-wrapper  smooth-scroll container">
          <div className="section-flex-item section-img-wrapper">
            <img
              src="https://media.gq-magazine.co.uk/photos/60ad10bf8f49c47fbca5e53d/master/pass/24052021_ROB_01.jpg"
              alt=""
              className="section-img"
            />
          </div>
          <div className="section-flex-item section-details">
            <h2 className="section-headline">Gaming World*</h2>
            <p className="lead">
              we sell combos on Gaming Rig on your budget and provide 2 years
              warrenty
            </p>
          </div>
        </section>
        <section className="section-flex-wrapper  smooth-scroll container reverse-section-flex">
          <div className="section-flex-item section-img-wrapper">
            <img
              src="https://source.unsplash.com/random/?trust"
              alt=""
              className="section-img"
            />
          </div>
          <div className="section-flex-item section-details">
            <h2 className="section-headline">WE BUILD TRUST ALWAYS,ANYWAY! </h2>
            <p className="lead">
              Our trust on clients is important to provide good services, our
              clients that makes us happy always!
            </p>
          </div>
        </section>

        <section className="section-flex-wrapper  smooth-scroll container bg-paper">
          <div className="section-flex-item section-details">
            <h2>Start your journey with us</h2>
            <p className="lead" style={{ width: "100%", fontSize: "1.3rem" }}>
              Take a first step to bring your career at next level!
            </p>
            <div className="btn-group">
              <Link to="/about">
                <div className="btn btn-primary">
                  <span> About Us</span>
                  <div className="btn-arrow">
                    <Icons.ArrowRightP />
                  </div>
                </div>
              </Link>
              <Link to="/register">
                <div className="btn btn-secondary">
                  <span> Register</span>
                  <div className="btn-arrow">
                    <Icons.ArrowRightS />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Services;
