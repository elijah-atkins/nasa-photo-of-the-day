import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"

const PictureGet = () => {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=p4C0QgA2Ec5R5E8oVlU5rXuLbdexPLk59gypoEGM")//&date=2019-04-20
        .then(response => {
            setPic(response.data)

        })
        .catch(error => console.log("Error!", error))
    }, []);
    return (
        <div className="picture-card">
            <PictureCard pic={pic}/>
        </div>
    )
}

export default PictureGet