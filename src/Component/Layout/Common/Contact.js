import { React, Component } from "react";
import { Route, Link } from "react-router-dom";


class contact extends Component {
  render() {
    return (
        // <!-- Hero Area Start-->
        <div class="slider-area ">
            <div class="single-slider section-overly slider-height2 d-flex align-items-center" 
            style={{ 
                backgroundImage: `url("https://technext.github.io/jobfinderportal/assets/img/hero/about.jpg")` 
              }}
            // data-background="assets/img/hero/about.jpg"
            >
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Contact us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            // <!-- Hero Area End -->
    );
  }
}
export default contact;