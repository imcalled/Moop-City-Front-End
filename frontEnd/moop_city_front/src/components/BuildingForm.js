import {useState} from 'react';
// import './BuildingForm.scss';
import './BuildingForm.css';

const BuildingForm = ( {onFormSubmission}) => {

    const [buildingType, setBuildingType] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [allotment_id, setAllotment_id] = useState("");

    const handleBuildingTypeChange = (event) => {
        setBuildingType(event.target.value);
    }

    const handleBuildingNameChange = (event) => {
        setBuildingName(event.target.value);
    }

    const handleCapacityChange = (event) => {
        setCapacity(event.target.value);
    }

    const handleAllotment_id = (event) =>{
        setAllotment_id(event.target.value);
    }

    // const handlex_coordinateChange = (event) =>{
    //     setx_coordinates(event.target.value);
    // }
    // const handley_coordinateChange = (event) =>{
    //     sety_coordinates(event.target.value);
    // }


    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newBuilding = {
            buildingType: buildingType,
            buildingName: buildingName,
            capacity: capacity,
            allotment_id: allotment_id
        }

        onFormSubmission(newBuilding);

        setBuildingType("");
        setBuildingName("");
        setCapacity("");
        setAllotment_id("");
        // setx_coordinates("");
        // sety_coordinates("");
    }

    return (
        <div className="form-container">
            <h2>Add a New Building:</h2>
            <form onSubmit={handleFormSubmission} className="form">
                <div className="formElement">
                    <label htmlFor="buildingType">Choose building type: </label>
                    <select name="buildingType" id="buildingType" onChange={handleBuildingTypeChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="House">House</option>
                        <option value="Workplace">Workplace</option>
                    </select>
                </div>
                <div className="formElement">
                    <label htmlFor="buildingName">Building Name: </label>
                    <input type="text" id="buildingName" value={buildingName} onChange={handleBuildingNameChange} className="text-input-building"/>
                </div>
                <div className="formElement">
                    <label htmlFor="capacity">Capacity: </label>
                    <input type="text" id="capacity" value={capacity} onChange={handleCapacityChange} className="text-input-building"/>
                </div>
                <div className="formElement">
                    <label htmlFor="allotment_id">Allotment ID: </label>
                    <input type="text" id="allotment_id" value={allotment_id} onChange={handleAllotment_id} className="text-input-building"/>
                </div>
                <div className="formElement" id="submit-building">
                    <input type="submit" value="Add Building" className="submit"/>
                </div>
            </form>
        </div>
    )
        
    
}

export default BuildingForm;