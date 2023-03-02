import "./MyCarViewer.css";
import "../../App.css";
import { useState, useContext } from "react";
import { CarDataContext } from "../../CarDataContext";
import { useNavigate } from "react-router-dom";
import { FaSearchPlus } from 'react-icons/fa'

export default function MyCarViewer() {
  const datanum = useContext(CarDataContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const setOptionsParam = () => {
    Object.entries(datanum.options).map(([key, value]) => {
      if (key === "params") {
        Object.entries(datanum.options.params).map(([key, value]) => {
          switch (key) {
            case "make":
              value = searchText;
              datanum.options.params.make = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "model":
              value = searchText;
              datanum.options.params.model = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "type":
              value = searchText;
              datanum.options.params.type = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "id":
              value = searchText;
              datanum.options.params.id = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "year":
              value = searchText;
              datanum.options.params.year = value;
              datanum.setOptions({ ...datanum.options });
             
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
        <div className="main-searchBar">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            id="searchText"
            placeholder="Search for a car by make"
            style={{ fontSize: "14px" }}
          />
           <span className="icon"><FaSearchPlus/></span>
        </div>
     
      </form>
    </div>
  );
}
