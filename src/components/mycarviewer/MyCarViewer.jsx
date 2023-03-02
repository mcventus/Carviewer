import "./MyCarViewer.css";
import "../../App.css";
import { useState, useContext } from "react";
import { CarDataContext } from "../../CarDataContext";
import { useNavigate } from "react-router-dom";

export default function MyCarViewer() {
  const datanum = useContext(CarDataContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const setOptionsParam = () => {
   
    Object.entries(datanum.options).map(([key, value]) => {
      if (key === "params") {
        Object.entries(datanum.options.params).map(([key, value]) => {
          if (key === "make") {
            value = searchText;
            datanum.options.params.make = value;
          }
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return (
      <div className="main-home-container">
        {datanum.options.params.make !== ""
          ? navigate("/cardata")
          : navigate("/nodata")}
      </div>
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setOptionsParam();
    }
  };

  return (
    <div className="main-home-container">
      <form className="home-form" onSubmit={handleSubmit}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          id="searchText"
          placeholder="Search for a car by make"
          style={{ fontSize: "14px" }}
        />
      </form>
    </div>
  );
}
