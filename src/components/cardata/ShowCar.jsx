const ShowCar = (props) => {
  return (
    <div className="cardata-direction">
      <div className="cardata-card">
        <span id="cardata-make-1">
          {props.prev}
          <br />
          <br />
          {props.make} {props.year}
          <br />
          <br />
          {props.model}
        </span>
      </div>
    </div>
  );
};
export default ShowCar;
