import React, { useState } from "react";
import styled from "styled-components";

const PictureCard = pic => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const mediaType = pic.pic.media_type;
    const [hide, setHide] = useState(true);
    const getDate = (num) => {
        if (num % 10 === 1 && num !== 11) {
            return `${num}st`
        }else if(num % 10 === 2 && num !== 12) {
            return `${num}nd`
        }else if(num % 10 === 3 && num !== 13) {
            return `${num}rd`
        }else{
            return `${num}th`
        }
    }
    const formatDate = (str='') =>{
        const dateArr = str.split('-').map(Number);
        return `The ${getDate(dateArr[2])} of ${months[dateArr[1]-1]}, ${dateArr[0]}`
        
        
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
            {mediaType === 'image' &&
            <div className="picture-img">
                <a href={pic.pic.hdurl}>
                <img className="picture" alt={pic.pic.title} src={pic.pic.url}></img>
                </a>
            </div>
            }
            {mediaType === 'video' &&
            <div className="video-container">
                <iframe src={pic.pic.url} frameborder="0" allowfullscreen>

                </iframe>
            </div>
            }
            <div className="explanation-container">
                <div className="explanation-header">
                    <button className="expand-button" onClick={() =>{
                        setHide(!hide)
                    }}>Explanation</button>
                    {pic.pic.copyright !== undefined &&
                    <div className="copyright">
                <p>Copyright: {pic.pic.copyright}</p>
                    </div>}
                </div>
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