import { useState, useEffect } from "react";

import BuildingList from "/Users/roset/Documents/FrontEndProject/Moop-City-Front-End/frontEnd/moop_city_front/src/components/BuildingsList.js";

const DisplayAllBuildingsContainer = () => {

    const [buildings, setBuildings] = useState([]);

    const getBuildingData = () => {
        fetch("http://localhost:8080/buildings/houses")
        .then(response => response.json)
        .then(data => {
            const modified_data = data.map(house => {
                house.buildingType = "house"
                return (
                    house
                    );
            });
            setBuildings(modified_data);
        })
        .then(fetch("http://localhost:8080/buildings/workplaces"))
        .then(response => response.json)
        .then(data => {
            const modified_data = data.map(workplace => {
                workplace.buildingType = "workplace"
                return (
                    workplace
                    );
            });
            setBuildings([...BuildingList,modified_data]);
        })
    }

    useEffect(() => {
        getBuildingData();
    }, []);

    return (
        buildings.length > 0 ?
        <div>
            <BuildingList buildings={buildings}/>
        </div>
        :
        <p>loading...</p>
    )
}

export default DisplayAllBuildingsContainer;