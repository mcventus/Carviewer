const ShowCar = (props) => {
    return(
        <div className="cardata-card">
            {/* <img src={props.path}/>{" "} */}
            {props.make}{" "}
            {props.year}<br/><br/>
            {props.model}
        </div>
    )
}
export default ShowCar