const ShowCar = (props) => {
  return (
    <div className="cardata-direction">
        <div className="cardata-card">
        {/* <img src={props.path_img}/><br/> */}
        <span id="cardata-make-1">
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
