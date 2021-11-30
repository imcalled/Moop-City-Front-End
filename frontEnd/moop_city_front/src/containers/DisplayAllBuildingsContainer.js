import { useState, useEffect } from "react";
import BuildingFormContainer from "./BuildingFormContainer";
// import './DisplayAllBuildingsContainer.css'
import BuildingList from "/Users/roset/Documents/FrontEndProject/Moop-City-Front-End/frontEnd/moop_city_front/src/components/BuildingsList.js";

const DisplayAllBuildingsContainer = () => {

    const [buildings, setBuildings] = useState([]);
    const [allotments, setAllotments] = useState([]);
    const [houses, setHouses] = useState([]);
    const [workplaces, setWorkplaces] = useState([]);

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

    return (
        <div> 
            <div className="form-container">
                <BuildingFormContainer  addBuilding={addBuilding}/>
            </div>
            <div className="building-container">
                <BuildingList houses={houses} workplaces={workplaces}/>
            </div>
            
           
        </div>
        
    )
}

export default DisplayAllBuildingsContainer;