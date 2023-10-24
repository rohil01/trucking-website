import "react-slideshow-image/dist/styles.css";
import "./Home.css"
import ReactDOM from "react-dom"

import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

class Home extends Component{
        
        constructor() {
            super();
            this.slideRef = React.createRef();
            this.back = this.back.bind(this);
            this.next = this.next.bind(this);
            this.state = {
              current: 0
            };
          }
        
          back() {
            this.slideRef.current.goBack();
          }
        
          next() {
            this.slideRef.current.goNext();
          }
          
          render(){
            const properties = {
              duration: 5000,
              autoplay: true,
              transitionDuration: 500,
              arrows: false,
              canSwipe:true,
              infinite: true,
              easing: "ease",
              responsive: 'slidesToShow'
            };
            const indicators = () => (<div className="indicator" ><svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="white" stroke-width="2"/>
            </svg></div>);

            const images = [
                "src/assets/Home.png",
                "src/assets/Home.png",
                "src/assets/Home.png",
                "src/assets/Home.png"
            ];
            const heading=[
                "Cheaper delivery costs through innovative vehicle design",
                "Cheaper delivery costs through innovative vehicle design",
                "Cheaper delivery costs through innovative vehicle design",
                "Cheaper delivery costs through innovative vehicle design"
             ];
            const text=[
                "OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED",
                "OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED",
                "OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED",
                "OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED"
            ];
            const link=[
                "Taxi and Courier truck",
                "Taxi and Courier truck",
                "Taxi and Courier truck",
                "Taxi and Courier truck"
            ]
            
        return(
        <>
            <nav className="navigation-container">
                <div className="callus--container">
                    <img className="callus--icon" src="src/assets/landlineicon.svg" />
                    <div className="callus--desc">
                        <p>Call Us</p>
                        <p>1300 779 438</p>
                    </div>
                </div>
                <div className="nav--1">
                    <button>WHY SWIFT TRANSPORT</button>
                    <button>FLEET</button>
                    <button>COMPANY POLICIES</button>
                    <button>ABOUT US</button>
                    <button>Contact Us</button>
                </div>
                <div className="nav--2">
                    <button className="intermodal">Swift Intermodal</button>
                    <button>Container Transport Solutions</button>
                    <button>Complete Warehousing Solutions</button>
                </div>

            </nav>
            
            <Slide className="slide-section" indicators={indicators}  ref={this.slideRef} {...properties} >
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `linear-gradient(270deg, rgba(1, 3, 0, 0.86) 0%, rgba(36, 36, 36, 0.48) 50.31%, rgba(255, 255, 255, 0.00) 100%) , url(${images[0]})` }}>
                        <h1 className="slide-section-heading">{heading[0]}</h1>
                        <p className="slide-section-text">{text[0]}</p>
                        <a className="slide-section-link" href="url"><u>{link[0]}</u> &rarr;</a>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `linear-gradient(270deg, rgba(1, 3, 0, 0.86) 0%, rgba(36, 36, 36, 0.48) 50.31%, rgba(255, 255, 255, 0.00) 100%) , url(${images[0]})` }}>
                        <h1 className="slide-section-heading">{heading[0]}</h1>
                        <p className="slide-section-text">{text[1]}</p>
                        <a className="slide-section-link" href="url"><u>{link[0]}</u> &rarr;</a>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `linear-gradient(270deg, rgba(1, 3, 0, 0.86) 0%, rgba(36, 36, 36, 0.48) 50.31%, rgba(255, 255, 255, 0.00) 100%) , url(${images[0]})` }}>
                        <h1 className="slide-section-heading">{heading[0]}</h1>
                        <p className="slide-section-text">{text[2]}</p>
                        <a className="slide-section-link" href="url"><u>{link[0]}</u> &rarr;</a>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `linear-gradient(270deg, rgba(1, 3, 0, 0.86) 0%, rgba(36, 36, 36, 0.48) 50.31%, rgba(255, 255, 255, 0.00) 100%) , url(${images[0]})` }}>
                        <h1 className="slide-section-heading">{heading[0]}</h1>
                        <p className="slide-section-text">{text[3]}</p>
                        <a className="slide-section-link" href="url"><u>{link[0]}</u> &rarr;</a>
                    </div>
                </div>
            </Slide>
        </>)
    }
}
export default Home;