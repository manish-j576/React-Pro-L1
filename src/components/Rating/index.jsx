import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
export default function Rating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function onClickHandler(currentIndex) {
    setRating(currentIndex);
  }
  function onMouseEnterHandler(currentIndex) {
    setHover(currentIndex);
  }
  function onMouseLeaveHandler(currentIndex) {
    setHover(rating);
  }
  return (
    <div className="main">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => onClickHandler(index)}
            onMouseEnter={() => onMouseEnterHandler(index)}
            onMouseLeave={() => onMouseLeaveHandler(index)}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}
