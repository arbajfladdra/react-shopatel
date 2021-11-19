//Components
import * as Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
// import Vid from "../../hero.mp4";
import HeroImg from "../../alpha.jpg";
const Hero = () => {
  return (
    <div
      // variants={containerVariants}
      // initial = "hidden"
      // animate = "visible"
      // exit = "exit"
      className="row bg-yellow"
    >
      <section className="hero-section container smooth-scroll">
        <div className="hero-item hero-info">
          <h1 className="hero-head">
            {/* Explore your <br /> power of <br /> passion here! */}
            Take the step <br /> of gen alpha
          </h1>
          <p className="lead">
            we will attach your passion with carrier that brings you to become
            Steve Jobs & guides to achieve goals with power of mistakes. To
            start hilarious journey grab our hand!
          </p>
          <div className="btn-group">
            <Link to="/services">
              <div className="btn btn-primary">
                <span> Services</span>
                <div className="btn-arrow">
                  <Icons.ArrowRightP />
                </div>
              </div>
            </Link>
            <Link to="/about">
              <div className="btn btn-secondary">
                <span> Contact Us</span>
                <div className="btn-arrow">
                  <Icons.ArrowRightS />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-item">
          <div className="hero-img-wrapper">
            <img src={HeroImg} alt="" className="hero-img" />
            {/* <Icons.Ill className = 'hero-img'/> */}
            {/* <video id="" webboost_found_paused="true" muted autoPlay loop>
              <source src={Vid} type="video/mp4" />
              <source src="hero.webm" type="video/webm" />
              <source src="hero.mp4" type="video/mp4" />
              <source src="hero.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
