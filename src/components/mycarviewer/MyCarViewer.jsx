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
    console.log(savedSelections);
    const previousView = JSON.parse(savedSelections);
    setprevedCar(previousView);
  }, []);

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
    console.log("limit " + limit);
  };
  const handleChangePage = (e) => {
    setPage(e.target.value);
    console.log("page " + page);
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
            console.log(datanum.options.params.limit);
          }

          if (key === "page") {
            value = page;
            datanum.options.params.page = value;
            console.log(datanum.options.params.page);
          }

          if (key === "make") {
            value = searchCar;
            console.log(searchCar);
            datanum.options.params.make = value;
            console.log("search text " + datanum.options.params.make);
          }
        });
      }
    });
    console.log("setOptionsParam() ends.");
  };

  const handleSubmit = (e) => {
    console.log("submit" + datanum.options.params.make);
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
    console.log("search text is " + searchCar);
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
