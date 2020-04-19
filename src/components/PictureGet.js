import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"
import Calendar from 'react-calendar';
import log from '../img/NASA_logo_alt.svg'


const PictureGet = (props) => {

    const [pic, setPic] = useState([]);
    const [date, setDate] = useState(new Date())
    const dateToString = day =>{
        return `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`
    }
    const dayValue = day =>{
        setDate(day)
}
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=p4C0QgA2Ec5R5E8oVlU5rXuLbdexPLk59gypoEGM&date=${dateToString(date)}`)
        .then(response => {
            setPic(response.data)
        })
        .catch(error => alert(`${error}, Please try again later, or try selecting a different day`))
    }, [date]);
    return (
        <div className="content-container">
            <div className="calendar-container">
                <div className="big-logo">
                    <img src={log} alt="NASA Astronomy Picture of the Day"></img>
                </div>
                <Calendar
    
                    value={date}
                    minDate={new Date('1995-6-16')}
                    maxDate={new Date()}
                    onClickDay={dayValue}
                />
            </div>
            <div className="picture-card">
                <PictureCard pic={pic} date={date}/>
            </div>

        </div>
    )
}

export default PictureGet