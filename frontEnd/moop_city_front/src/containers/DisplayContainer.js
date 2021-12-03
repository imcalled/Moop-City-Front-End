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
    const [newFetchHousesData, setNewFetchHousesData] = useState(false);
    const [newFetchWorkplacesData, setNewFetchWorkplacesData] = useState(false);

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
            setHouses(modified_data1)
        })
        .then(setTimeout(() => {setNewFetchHousesData(!newFetchHousesData)}, 300));
        // .then(console.log(houses[0].id))  
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
        .then(setTimeout(() => {setNewFetchWorkplacesData(!newFetchWorkplacesData)}, 300));
    }

    const getBuildings = () => {
        fetch("http://localhost:8080/buildings")
        .then(response => response.json())
        .then(data => setBuildings(data))
    }

    useEffect(() => {
        getHousesData();
        getWorkplaceData();
        getBuildings();
        }, []);
    

    return (
        // houses.length & workplaces.length > 0 ?
        <div className="display-container"> 
            
            <div className="right-side">
                {/* <AllotmentMapContainer houses={houses} workplaces={workplaces}/> */}
                <AllotmentMapContainer displayMap={displayMap} showHideMap={showHideMap} newFetchHousesData={newFetchHousesData} newFetchWorkplacesData={newFetchWorkplacesData}/>
                <DisplayAllBuildingsContainer display={displayBuildings} showHideBuildings={showHideBuildings} houses={houses} workplaces={workplaces} buildings={buildings} getHousesData={getHousesData} getWorkplaceData={getWorkplaceData}/>
                <DisplayAllCitizensContainer display={displayCitizens} showHideCitizens={showHideCitizens} houses={houses} workplaces={workplaces} getHousesData={getHousesData} getWorkplaceData={getWorkplaceData}/>
            </div>
        </div>
        // :
        // <p>loading...</p>
        
    )
}

export default DisplayContainer;