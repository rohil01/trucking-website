import "./Page4.css"
import React, { Component } from "react";
import ReactDOM from "react-dom"
import { UseState } from 'react';

  

export default function Page4(){
    return(
        <>
            <div className="main-div"></div> 
            <div className="inner-div"></div>
            <div className="info">
                <h1>NEWS</h1>
                <div className="scrollmenu">
                    <div className="object">
                        <img src="src/assets/img1.png" />
                        <h1>Asia-US container rates tick
                        lower; Canada port strike
                        enters 7th day</h1>
                        <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones)</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="object">
                        <img src="src/assets/img2.png" />
                        <h1>World Shipping Council Releases
                            Containers Lost At Sea Report</h1>
                        <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) </p>
                        <button>READ MORE</button>
                    </div>
                    <div className="object">
                        <img src="src/assets/img3.png" />
                        <h1>Top Shipping Stocks for Q2 2023</h1>
                        <p>ZIM Integrated Shipping Services, Kirby Corp., and Ardmore Shipping are the top performers for value, growth, and momentum, respectively.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="object">
                        <img src="src/assets/img3.png" />
                        <h1>Aurizon wins rail freight 
                            contract from TGE in Australia</h1>
                        <p>The company will offer rail linehaul services that will link Perth, Adelaide, Melbourne, Sydney and Brisbane.</p>
                        <button>READ MORE</button>
                    </div>

                </div>
            </div>
        </>     
    )
}