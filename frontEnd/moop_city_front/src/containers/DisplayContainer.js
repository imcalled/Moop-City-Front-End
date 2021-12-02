import { useState, useEffect, useRef } from "react";
import React from "react";
import BuildingFormContainer from "./BuildingFormContainer";
import './DisplayAllBuildingsContainer.css';
import BuildingList from "../components/BuildingsList.js";
// import './DisplayAllBuildingsContainer.css'
import DisplayAllBuildingsContainer from "./DisplayAllBuildingsContainer";
import DisplayAllCitizensContainer from "./DisplayAllCitizensContainer";


const DisplayContainer = ({showHideCitizens, showHideBuildings, displayBuildings, displayCitizens}) => {

    const [houses, setHouses] = useState([]);
    const [workplaces, setWorkplaces] = useState([]);
    const [buildings, setBuildings] = useState([]);


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
        <div className="display-container"> 
            
            <div className="right-side">
                <DisplayAllBuildingsContainer display={displayBuildings} showHideBuildings={showHideBuildings} houses={houses} workplaces={workplaces} buildings={buildings} getHousesData={getHousesData} getWorkplaceData={getWorkplaceData}/>
                <DisplayAllCitizensContainer display={displayCitizens} showHideCitizens={showHideCitizens}/>
            </div>
        </div>
        
    )
}

export default DisplayContainer;