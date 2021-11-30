import { useState, useEffect, useRef } from "react";
import React from "react";
import BuildingFormContainer from "./BuildingFormContainer";
import './DisplayAllBuildingsContainer.css';
import BuildingList from "/Users/roset/Documents/FrontEndProject/Moop-City-Front-End/frontEnd/moop_city_front/src/components/BuildingsList.js";

const DisplayAllBuildingsContainer = () => {

    const [buildings, setBuildings] = useState([]);
    const [allotments, setAllotments] = useState([]);
    const [houses, setHouses] = useState([]);
    const [workplaces, setWorkplaces] = useState([]);
    const [building_form, setBuilding_form] = useState(true);
    const [all_buildings, setAll_buildings] = useState(false);
    const [button1, setFormButton1] = useState(true);
    const [button2, setFormButton2] = useState(false);

    const getAllotments = () => {
        fetch("http://localhost:8080/allotments")
        .then(response => response.json())
        .then(data => setAllotments(data))
    }
    const addBuilding = (newBuilding) => {
        // getAllotmentIDByCoordinates(newBuilding);
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
            console.log("this is the problem")
        }
        
    }

    const getHousesData = () => {
        
        fetch("http://localhost:8080/buildings/houses")
        .then(response => response.json())
        .then(data => {
            const modified_data1 = data.map(house => {
                house.buildingType = "House";
                return (
                    house
                    );
            });
            setHouses(modified_data1);

        })
        
    }
    const getWorkplaceData = () => {
        fetch("http://localhost:8080/buildings/workplaces")
        .then(response => response.json())
        .then(data => {
            const modified_data2 = data.map(workplace => {
                workplace.buildingType = "Workplace";
                
                return (
                    workplace
                    );
            });
            setWorkplaces(modified_data2);
            
        })
    }

    const getBuildings = () => {
        fetch("http://localhost:8080/buildings")
        .then(response => response.json())
        .then(data => setBuildings(data))
    }

    useEffect(() => {
        // getAllotments();
        getHousesData();
        getWorkplaceData();
        getBuildings();
        }, []);
    
    const openTab = (tabName) => {
        // const container1 = refContainer1.current;
        // const container2 = refContainer2.current;
        // if (tabName ==="building-form"){
        //     container2.style.display = "block";
        //     container1.style.display = "none";
        // }
        // if (tabName ==="buildings"){
        //     container1.style.display = "block";
        //     container2.style.display = "none";
        // }    
        
        // document.getElementById(tabName).style.display = "block";
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
        <div className="building-container"> 
            <div class="w3-bar w3-black tab-bar">
                <button class={button1 ? "selected" : "unselected"} onClick={() => openTab("building-form")}>New Building</button>
                <button class={button2 ? "selected" : "unselected"} onClick={() => openTab("buildings")}>View All Buildings</button>
            </div> 
            <div id="building-form"  className={building_form ? "show" : "hide"}>
                <BuildingFormContainer  addBuilding={addBuilding}/>
            </div>
            <div id="buildings" className={all_buildings ? "show" : "hide"}>
                <BuildingList houses={houses} workplaces={workplaces}/>
            </div>
            
           
        </div>
        
    )
}

export default DisplayAllBuildingsContainer;