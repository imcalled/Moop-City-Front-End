// import { useState } from "react";
import BuildingForm from "../components/BuildingForm";

const BuildingFormContainer = ({addBuilding}) => {
    

    // const getAllotmentIDByCoordinates = (newBuilding) => {
    //     fetch("http://localhost:8080/allotments")
    //     .then(response => response.json())
    //     .then(
    //         data => {
    //             const newAllotment = data.find(allotment => allotment.x_coordinate == newBuilding.x_coordinate & allotment.y_coordinate == newBuilding.y_coordinate)
    //             setAllotmentID(newAllotment.id)
    //         }
            
    //         )
    // }

    

    return (
        <>
            <BuildingForm onFormSubmission={addBuilding} />
        </>
    )
}
export default BuildingFormContainer;