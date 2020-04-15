import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"

const PictureGet = () => {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=p4C0QgA2Ec5R5E8oVlU5rXuLbdexPLk59gypoEGM")
        .then(response => {
            setPic(response.data)
            console.log(response)
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