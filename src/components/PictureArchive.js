import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"
import Calendar from 'react-calendar';
import log from '../img/NASA_logo_alt.svg'
import { useHistory, useParams } from 'react-router-dom'


const PictureArchive = (props) => {
    const param = useParams();
    const history = useHistory();
    const dateToString = day =>{
        var y = day.getFullYear().toString();
        var m = (day.getMonth() + 1).toString();
        var d = day.getDate().toString();
        (d.length === 1) && (d = '0' + d);
        (m.length === 1) && (m = '0' + m);
        return `${y}-${m}-${d}`;    }
    const [pic, setPic] = useState([]);
    const [date, setDate] = useState(new Date(param.id));

    const dayValue = day =>{
        const newDate = dateToString(day)
        history.push(`/${newDate}`)
        setDate(day)
}
    useEffect(() => {
        const { id } = param;
        console.log(id)
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=p4C0QgA2Ec5R5E8oVlU5rXuLbdexPLk59gypoEGM&date=${id}`)
        .then(response => {
       //     console.log(response.data)
            setPic(response.data)
        })
        .catch(error => alert(`${error}, Please try again later, or try selecting a different day`))
    }, [param.id]);
    return (
        <div className="content-container">
            <div className="calendar-container">
                <div className="big-logo">
                    <img src={log} alt="NASA Astronomy of the Day"></img>
                </div>
                <Calendar
    
                    value={new Date(param.id)}
                    minDate={new Date('1995-6-16')}
                    maxDate={new Date()}
                    onClickDay={dayValue}
                />
            </div>
            <div className="picture-card">
                <PictureCard pic={pic} key={date}/>
            </div>

        </div>
    )
}

export default PictureArchive