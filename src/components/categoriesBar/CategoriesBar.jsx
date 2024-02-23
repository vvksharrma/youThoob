import React, { useState } from "react";
import "./categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const CategoriesBar = () => {
  const keyword = [
    "All",
    "React js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art ",
    "Guitar",
    "Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh",
  ];
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keyword.map((value, i) => {
        return (
          <span
            key={i}
            onClick={() => handleClick(value)}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
