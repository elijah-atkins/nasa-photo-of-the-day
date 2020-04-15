import React, { useState } from "react";

const PictureCard = pic => {
    var dateStr = pic.pic.date;

    const months = ["January", "Febuary", "Marh", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [hide, setHide] = useState(true);
    const getDate = (num) => {
        if (num === 1) {
            return '1st'
        }else if(num === 2) {
            return '2nd'
        }else if(num === 3) {
            return '3rd'
        }else{
            return `${num}th`
        }
    }
    const formatDate = (str='') =>{
        let arr = str.split('-').map(Number);
        return `The ${getDate(arr[2])} of ${months[arr[1]-1]}, ${arr[0]}`
        
        
    }
    if (!pic.pic.url) return <h3>Loading...</h3>;
    return (
        <div className="picture-container">
            <div className="picture-title">
                <h2>{pic.pic.title}</h2>
            </div>
            <div className="picture-nav">
              
                <div className="picture-date">
                    <p>{formatDate(pic.pic.date)}</p>
                </div>
               
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