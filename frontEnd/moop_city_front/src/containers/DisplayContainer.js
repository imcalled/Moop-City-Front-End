import { useState, useEffect, useRef } from "react";
import React from "react";
import BuildingFormContainer from "./BuildingFormContainer";
import './DisplayAllBuildingsContainer.css';
import BuildingList from "../components/BuildingsList.js";
// import './DisplayAllBuildingsContainer.css'
import DisplayAllBuildingsContainer from "./DisplayAllBuildingsContainer";
import DisplayAllCitizensContainer from "./DisplayAllCitizensContainer";
import AllotmentMapContainer from "./AllotmentMapContainer";


const DisplayContainer = ({showHideCitizens, showHideBuildings, displayBuildings, displayCitizens, displayMap, showHideMap}) => {

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
        // houses.length & workplaces.length > 0 ?
        <div className="display-container"> 
            
            <div className="right-side">
                <AllotmentMapContainer displayMap={displayMap} showHideMap={showHideMap}/>
                <DisplayAllBuildingsContainer display={displayBuildings} showHideBuildings={showHideBuildings} houses={houses} workplaces={workplaces} buildings={buildings} getHousesData={getHousesData} getWorkplaceData={getWorkplaceData}/>
                <DisplayAllCitizensContainer display={displayCitizens} showHideCitizens={showHideCitizens} houses={houses} workplaces={workplaces} getHousesData={getHousesData} getWorkplaceData={getWorkplaceData}/>
            </div>
        </div>
        // :
        // <p>loading...</p>
        
    )
}

export default DisplayContainer;