import { useState, useEffect, useRef } from "react";
import React from "react";
import BuildingFormContainer from "./BuildingFormContainer";
import './DisplayAllBuildingsContainer.css';
import BuildingList from "../components/BuildingsList.js";
// import './DisplayAllBuildingsContainer.css'


const DisplayAllBuildingsContainer = ({display, showHideBuildings, houses, workplaces, buildings, getHousesData, getWorkplaceData}) => {

    const [building_form, setBuilding_form] = useState(true);
    const [all_buildings, setAll_buildings] = useState(false);
    const [button1, setFormButton1] = useState(true);
    const [button2, setFormButton2] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const addBuilding = (newBuilding) => {
        if (newBuilding.buildingType === "House") {
            const newHouse = {
                buildingName: newBuilding.buildingName,
                capacity: newBuilding.capacity,
                allotment_id: newBuilding.allotment_id
            }
            fetch("http://localhost:8080/buildings/houses", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newHouse)
            })
            .then(() => getHousesData())
        } else if (newBuilding.buildingType === "Workplace"){
            const newWorkplace = {
                buildingName: newBuilding.buildingName,
                capacity: newBuilding.capacity,
                allotment_id: newBuilding.allotment_id
            }
            fetch("http://localhost:8080/buildings/workplaces", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newWorkplace)
            })
            .then(() => getWorkplaceData())
        } else {
            console.log("this is the problem");
        }
        
    }
    
    const openTab = (tabName) => {
        if (tabName ==="building-form"){
            setBuilding_form(true);
            setAll_buildings(false);
            setFormButton1(true);
            setFormButton2(false);
        }
        else if (tabName ==="buildings"){
            setBuilding_form(false);
            setAll_buildings(true);
            setFormButton1(false);
            setFormButton2(true);
        } 
        
    }

    return (
        <div className={display ? "building-container" : "hide"}> 
            <div className="tab-bar">
                <button className={button1 ? "selected" : "unselected"} onClick={() => openTab("building-form")}>New Building</button>
                <button className={button2 ? "selected" : "unselected"} onClick={() => openTab("buildings")}>View All Buildings</button>
                <button onClick={showHideBuildings} className="exit-button-building">X</button>
            </div> 
            <div id="building-form"  className={building_form ? "show" : "hide"}>
                <BuildingFormContainer addBuilding={addBuilding}/>
            </div>
            <div id="buildings" className={all_buildings ? "show" : "hide"}>
                <BuildingList houses={houses} workplaces={workplaces}/>
            </div>
            
           
        </div>
        
    )
}

export default DisplayAllBuildingsContainer;