import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PicturePick = props =>{
    const [date, setDate] = useState(new Date())
    const dayValue = day =>{
        let dayPicked = `${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`
        console.log(dayPicked)

}
    return (
        <div className="calendar-container">
            <Calendar
                className="calendar"
                value={date}
                minDate={new Date(1995, 5, 16)}
                maxDate={new Date()}
                onClickDay={dayValue}
            />
        </div>
    )
    
}

export default PicturePick;