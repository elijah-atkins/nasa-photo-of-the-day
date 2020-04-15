import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"

const PictureGet = (props) => {
    console.log(props.date)
    const [pic, setPic] = useState([]);
    const [date, setDate] = useState(props.date)
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=p4C0QgA2Ec5R5E8oVlU5rXuLbdexPLk59gypoEGM&date=${date}`)
        .then(response => {
            setPic(response.data)
            console.log(response.data)
        })
        .catch(error => console.log("Error!", error))
    }, [date]);
    return (
        <div className="picture-card">
            <PictureCard pic={pic}/>
        </div>
    )
}

export default PictureGet