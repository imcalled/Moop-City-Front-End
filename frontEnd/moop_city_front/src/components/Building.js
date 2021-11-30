import './Building.css';

const Building = ({building}) => {

    return(
        <div className = "building">
            {/* <h4>Type: </h4>
            <p>{building.buildingType}</p> */}
            <div className="building-elem">
                <h4>Address: </h4>
                <p>{building.buildingName}</p>
            </div>
            <div className="building-elem">
                <h4>Capacity: </h4>
                <p>{building.capacity}</p>
            </div>
            <div className="building-elem">
                <h4>Allotment: </h4>
                <p>{building.allotment_id}</p>
            </div>
            
           
            
        </div>
    )
}

export default Building;