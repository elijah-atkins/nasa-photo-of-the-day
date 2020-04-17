import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
            console.log(response.data)
        })
        .catch(error => console.log("Error!", error))
    }, [date]);
    return (
        <div>
            <div className="calendar-container">
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