import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard";
import Calendar from "react-calendar";
import log from "../img/NASA_logo_alt.svg";
import { useParams } from "react-router-dom";
import dateToString from "../util/dateToString";

const PictureArchive = (props) => {
  const param = useParams();
  const [pic, setPic] = useState([]);
  const [date, setDate] = useState(new Date(param.date));

  const dayValue = (day) => {
    const newDate = dateToString(day);
    props.history.push(`/${newDate}`);
    setDate(day);
  };
  useEffect(() => {
    const { date } = param;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=p4C0QgA2Ec5R5E8oVlU5rXuLbdexPLk59gypoEGM&date=${date}`
      )
      .then((response) => {
        setPic(response.data);
      })
      .catch((error) =>
        alert(
          `${error}, Please try again later, or try selecting a different day`
        )
      );
  }, [param.id, param]);
  return (
    <div className="content-container">
      <div className="calendar-container">
        <div className="big-logo">
          <img src={log} alt="NASA Astronomy of the Day"></img>
        </div>
        <Calendar
          minDate={new Date("1995-6-16")}
          maxDate={new Date()}
          onClickDay={dayValue}
        />
      </div>
      <div className="picture-card">
        <PictureCard pic={pic} key={date} />
      </div>
    </div>
  );
};

export default PictureArchive;
