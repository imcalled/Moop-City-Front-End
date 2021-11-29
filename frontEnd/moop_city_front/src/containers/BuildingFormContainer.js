import { useState } from "react";
import BuildingForm from "../components/BuildingForm";

const BuildingFormContainer = () => {
    
    const [allotmentID, setAllotmentID] = useState("");

    const getAllotmentIDByCoordinates = (newBuilding) => {
        fetch("http://localhost:8080/allotments")
        .then(response => response.json())
        .then(
            data => {
                const newAllotment = data.find(allotment => allotment.x_coordinate + allotment.y_coordinate== newBuilding.allotmentCoordinate)
                setAllotmentID(newAllotment.id)
            }
            
            )
    }

    const addBuilding = (newBuilding) => {
        getAllotmentIDByCoordinates(newBuilding);
        if (newBuilding.buildingType == "house") {
            const newHouse = {
                buildingName = newBuilding.buildingName,
                capacity = newBuilding.capacity,
                allotmentID = allotmentID
            }
            fetch("http://localhost:8080/buildings/houses", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newHouse)
            })
            .then(setAllotmentID(""))
        }
        
    }

    return (
        <>
            <BuildingForm onFormSubmission={addBuilding} />
        </>
    )
}