import {useState} from 'react';

const BuildingForm = ( {onFormSubmission}) => {

    const [buildingType, setBuildingType] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [x_coordinate, setx_coordinates] = useState("");
    const [y_coordinate, sety_coordinates] = useState("");

    const handleBuildingTypeChange = (event) => {
        setBuildingType(event.target.value);
    }

    const handleBuildingNameChange = (event) => {
        setBuildingName(event.target.value);
    }

    const handleCapacityChange = (event) => {
        setCapacity(event.target.value);
    }

    const handlex_coordinateChange = (event) =>{
        setx_coordinates(event.target.value);
    }
    const handley_coordinateChange = (event) =>{
        sety_coordinates(event.target.value);
    }


    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newBuilding = {
            buildingType: buildingType,
            buildingName: buildingName,
            capacity: capacity,
            x_coordinate: x_coordinate,
            y_coordinate: y_coordinate
        }

        onFormSubmission(newBuilding);

        setBuildingType("");
        setBuildingName("");
        setCapacity("");
        setx_coordinates("");
        sety_coordinates("");
    }

    return (
        <>
            <h2>Add a new building:</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="formElement">
                    <label htmlFor="buildingType">Choose building type: </label>
                    <select name="buildingType" id="buildingType" onChange={handleBuildingTypeChange}>
                        <option value="house">House</option>
                        <option value="workplace">Workplace</option>
                    </select>
                </div>
                <div className="formElement">
                    <label htmlFor="buildingName">Building Name: </label>
                    <input type="text" id="buildingName" value={buildingName} onChange={handleBuildingNameChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="capacity">Capacity: </label>
                    <input type="text" id="capacity" value={capacity} onChange={handleCapacityChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="x_coordinate">Allotment x Coordinate: </label>
                    <input type="text" id="x_coordinate" value={x_coordinate} onChange={handlex_coordinateChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="y_coordinate">Allotment y Coordinate: </label>
                    <input type="text" id="y_coordinate" value={y_coordinate} onChange={handley_coordinateChange}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )
        
    
}

export default BuildingForm;