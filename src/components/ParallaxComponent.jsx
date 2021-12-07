import { React } from "react";
import { Parallax, Background } from "react-parallax";
import parallaxImage from "/images/foobar_small_splash_1.png";

const ParallaxComponent = () => (
  <div className="paraScroll">
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
      <div style={{ height: "350px" }} />
      <Background className="custom-bg">
        <img src={parallaxImage} alt="parallaxImage" />
      </Background>
    </Parallax>
  </div>
);
export default ParallaxComponent;
