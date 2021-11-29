import { useState } from "react";
import BuildingForm from "../components/BuildingForm";

const BuildingFormContainer = () => {
    
    const [allotmentID, setAllotmentID] = useState("");

    const getAllotmentIDByCoordinates = (newBuilding) => {
        fetch("http://localhost:8080/allotments")
        .then(response => response.json())
        .then(
            data => {
                const newAllotment = data.find(allotment => allotment.x_coordinate == newBuilding.x_coordinate & allotment.y_coordinate == newBuilding.y_coordinate)
                setAllotmentID(newAllotment.id)
            }
            
            )
    }

    const addBuilding = (newBuilding) => {
        getAllotmentIDByCoordinates(newBuilding);
        if (newBuilding.buildingType === "House") {
            const newHouse = {
                buildingName: newBuilding.buildingName,
                capacity: newBuilding.capacity,
                allotmentID: allotmentID
            }
            fetch("http://localhost:8080/buildings/houses", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newHouse)
            })
            .then(setAllotmentID(""))
            .then(console.log(newHouse))
        } else if (newBuilding.buildingType === "Workplace"){
            const newWorkplace = {
                buildingName: newBuilding.buildingName,
                capacity: newBuilding.capacity,
                allotment_id: allotmentID
            }
            fetch("http://localhost:8080/buildings/workplaces", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newWorkplace)
            })
            .then(setAllotmentID(""))
            .then(console.log(newWorkplace))
        }
        
    }

    return (
        <>
            <BuildingForm onFormSubmission={addBuilding} />
        </>
    )
}
export default BuildingFormContainer;