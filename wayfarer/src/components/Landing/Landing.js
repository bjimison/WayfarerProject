import React, { Component } from "react";
import About from "./About";
import Arrow from "./Arrow";
import Imageslide from "./Imageslide";
import SF from "./carouselImages/sf.jpg";
import Tokyo from "./carouselImages/tokyo.jpg";
import London from "./carouselImages/london.jpg";
import Paris from "./carouselImages/paris.jpg";

const imgUrls = [London, Tokyo, SF, Paris];

class Landing extends Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({ currentImageIndex: index });
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({ currentImageIndex: index });
  };

  // city = currentImageIndex => {
  //   if (currentImageIndex === 0) {
  //     this.setState({ currentCity: "London" });
  //   } else if (currentImageIndex === 1) {
  //     return this.setState({ currentCity: "Tokyo" });
  //   } else if (currentImageIndex === 2) {
  //     return this.setState({ currentCity: "San Francisco" });
  //   } else if (currentImageIndex === 3) {
  //     return this.setState({ currentCity: "Paris" });
  //   }
  // };

  render() {
    return (
      <div id="carousel-size">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
        <Imageslide
          url={imgUrls[this.state.currentImageIndex]}
          // city={this.city}
        />
        <About />
      </div>
    );
  }
}

export default Landing;
