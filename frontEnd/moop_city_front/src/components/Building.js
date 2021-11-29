const Building = ({building}) => {

    return(
        <div className = {"building"}>
            <h4>Type: </h4>
            <p>{building.buildingType}</p>
            <h4>Address: </h4>
            <p>{building.buildingName}</p>
            <h4>Capacity: </h4>
            <p>{building.capacity}</p>
            <h4>Allotment: </h4>
            <p>{building.x_coordinate + building.y_coordinate}</p>
        </div>
    )
}

export default Building;