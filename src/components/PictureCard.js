import React, { useState } from "react";

const PictureCard = pic => {
    console.log(pic)
    const [hide, setHide] = useState(true);
    return (
        <div className="picture-container">
            <div className="picture-title">
                <h2>{pic.pic.title}</h2>
            </div>
            <div className="picture-nav">
              
                <div className="picture-date">{pic.pic.date}</div>
               
            </div>
            <div className="picture-img">
                <a href={pic.pic.hdurl}>
                <img className="picture" alt={pic.pic.title} src={pic.pic.url}></img>
                </a>
            </div>
            <div className="explanation-container">
                <button className="expand-button" onClick={() =>{
                    setHide(!hide)
                }}>Explanation</button>
                <div className={
                    hide ? 'explanation-close' : 'explanation-open'
                }>
                    <p>{pic.pic.explanation}</p>
                </div>
            </div>
        </div>
    );
};
export default PictureCard;