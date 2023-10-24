import "./Page2.css"
import React, { Component } from "react";

export default function Page2()
{
    return(
        <div>
            <div className="empty--block"></div>
            <div className="block--2">
                <img className="truck--img" src="src/assets/truck.png" />
                <div className="text-info-box">
                    <div className="head--1">A fleet capable of much more than you’d think</div>
                    <div className="text--1">With a diverse range of utes, trucks and semi-trailers, Swift Transport is capable 
                        of much more than you'd think. Combine our 
                        versatile fleet wth our industry leading technology and 'can-do' 
                        attitude for a winning logistics partnership with your organization.
                    </div>
                    <a className="link--1" href="url">Why Swift</a>
                </div>
            </div>
        </div>    
        
    )
}