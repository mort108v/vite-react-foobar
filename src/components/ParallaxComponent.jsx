import { React } from "react";
import { Parallax, Background } from "react-parallax";
import parallaxImage from "/images/foobar_small_splash_1.png";

const ParallaxComponent = () => (
  <div className="overview-header__paraScroll">
    {/* <Parallax
      blur={10}
      bgImage={parallaxImage}
      bgImageAlt="the cat"
      strength={200}
    >
      <div style={{ height: "150px" }} />
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={parallaxImage}
      bgImageAlt="the dog"
      strength={200}
    >
      <div style={{ height: "150px" }} />
    </Parallax> */}
    <Parallax strength={300}>
      <div style={{ height: "35vh" }} />
      <Background
        className="overview-header__paraScroll--div"
        // imageStyle={{ borderRadius: 6 }}
      >
        <img
          src={parallaxImage}
          className="overview-header__paraScroll--div-parallaxBackground"
          alt="parallaxImage"
        />
      </Background>
    </Parallax>
  </div>
);
export default ParallaxComponent;
