import {useState} from 'react';

const BuildingForm = ( {onFormSubmission}) => {

    const [buildingType, setBuildingType] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [allotmentCoordinates, setAllotmentCoordinates] = useState("0");

    const handleBuildingTypeChange = (event) => {
        setBuildingType(event.target.value);
    }

    const handleBuildingNameChange = (event) => {
        setBuildingName(event.target.value);
    }

    const handleCapacityChange = (event) => {
        setCapacity(event.target.value);
    }

    const handleAllotmentCoordinatesChange = (event) =>{
        setAllotmentID(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newBuilding = {
            buildingType: buildingType,
            buildingName: buildingName,
            capacity: capacity,
            allotmentCoordinates: allotmentCoordinates
        }

        onFormSubmission(newBuilding);

        setBuildingType("");
        setBuildingName("");
        setCapacity("");
        setAllotmentCoordinates("0");
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
                    <label htmlFor="allotmentCoordinates">Allotment Coordinates: </label>
                    <input type="text" id="allotmentCoordinates" value={allotmentCoordinates} onChange={handleAllotmentCoordinatesChange}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )
        
    
}

export default BuildingForm;