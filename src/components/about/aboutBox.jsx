import React from "react";

const AboutBox = () => {
    return (
        <div className="about_boxes grid">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>
                
                <div>
                    <h3 className="about_title">60</h3>
                    <span className="about_subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-coffee"></i>
                
                <div>
                    <h3 className="about_title">1884</h3>
                    <span className="about_subtitle">Cups of coffee</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox