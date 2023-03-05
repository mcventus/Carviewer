import "./MyCarViewer.css";
import "../../App.css";
import { useState, useContext, useEffect } from "react";
import { CarDataContext } from "../../CarDataContext";
import { useNavigate, Link } from "react-router-dom";
import ShowCar from "../cardata/ShowCar";


export default function MyCarViewer() {
  const [searchCar, setSearchCar] = useState("");
  const [limit, setLimit] = useState("");
  const [page, setPage] = useState("");
  const [preViewedCar, setprevedCar] = useState("");

  useEffect(() => {
    const savedSelections = localStorage.getItem("selections");
    const previousView = JSON.parse(savedSelections);
    previousView ? setprevedCar(previousView) : setprevedCar({
      prev: "DEFAULT",
      make: "Toyota",
      year: "2023",
      model: "Yaris"
      }
    );
    
  }, []);

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };
  const handleChangePage = (e) => {
    setPage(e.target.value);
  };

  const datanum = useContext(CarDataContext);
  const navigate = useNavigate();

  const setOptionsParam = () => {
    Object.entries(datanum.options).map(([key, value]) => {
      if (key === "params") {
        Object.entries(datanum.options.params).map(([key, value]) => {
          if (key === "limit") {
            value = limit;
            datanum.options.params.limit = value;
          }

          if (key === "page") {
            value = page;
            datanum.options.params.page = value;
          }

          if (key === "make") {
            value = searchCar;
            datanum.options.params.make = value;
          }
        });
      }
    });
    console.log("setOptionsParam() ends.");
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
      handleSubmit(e);
    }
  };

  return (
    <div className="main-home-container">
      <div className="previous-view">
        <ShowCar
          prev={"PREVIOUSLY VIEWED"}
          make={preViewedCar.make}
          year={preViewedCar.year}
          model={preViewedCar.model}
        />
      </div>
      <form className="home-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          id="limit"
          placeholder="number of cars"
        />
        <input
          type="text"
          name="page"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          id="page"
          placeholder="page"
        />
        <div className="search-bar">
          <input
            type="text"
            name="searchCar"
            value={searchCar}
            onChange={(e) => setSearchCar(e.target.value)}
            onKeyDown={handleKeyDown}
            id="search-text"
            placeholder="Search by make"
          />
        </div>
      </form>
      <div>
        <button id="link-button" type="">
          <Link to="/">Cancel</Link>
        </button>
      </div>
    </div>
  );
}
