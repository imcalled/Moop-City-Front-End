import { useState, useEffect } from "react";
import BuildingFormContainer from "./BuildingFormContainer";

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
            .then(() => getBuildings())
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
            .then(() => getBuildings())
        } else {
            console.log("this is the problem")
        }
        
    }

    // const getHousesData = () => {
        
    //     fetch("http://localhost:8080/buildings/houses")
    //     .then(response => response.json())
    //     .then(data => {
    //         const modified_data1 = data.map(house => {
    //             house.buildingType = "House";

                
    //             return (
    //                 house
    //                 );

    //         });
    //         return modified_data1;

    //     })
    //     .then(modified_data1 => {
    //         const mod_data = modified_data1.map(house => {
    //             const id = house.allotment_id;
    //             const allotment = allotments.find(allotment => allotment.id === id);
    //             if (allotment === undefined) {
    //                     house.x_coordinate = "Why";
    //                     house.y_coordinate = "Not";
    //             } else {
    //                 house.x_coordinate = allotment["x_coordinate"];
    //                 house.y_coordinate = allotment["y_coordinate"];
    //             }
    //         })
    //     setHouses(mod_data);
    //     }
    //     )
    //     .catch(console.log("Please"))
        
    // }
    // const getWorkplaceData = () => {
    //     fetch("http://localhost:8080/buildings/workplaces")
    //     .then(response => response.json())
    //     .then(data => {
    //         const modified_data2 = data.map(workplace => {
    //             workplace.buildingType = "Workplace";
                
    //             return (
    //                 workplace
    //                 );
    //         });
    //         return modified_data2;
            
    //     })
    //     .then(modified_data2 => {
    //         const mod_data = modified_data2.map(workplace => {
    //             const id = workplace.allotment_id;
    //             const allotment = allotments.find(allotment => allotment.id === id);
    //             if (allotment === undefined) {
    //                     workplace.x_coordinate = "Why";
    //                     workplace.y_coordinate = "Not";
    //             } else {
    //                 workplace.x_coordinate = allotment["x_coordinate"];
    //                 workplace.y_coordinate = allotment["y_coordinate"];
    //             }
    //         })
    //         setWorkplaces(mod_data);
    //     })
    //     .catch(console.log("Help"))
    // }

    const getBuildings = () => {
        fetch("http://localhost:8080/buildings")
        .then(response => response.json())
        .then(data => setBuildings(data))
    }

    useEffect(() => {
        // getAllotments();
        // getHousesData();
        // getWorkplaceData();
        getBuildings();
        }, []);

    return (
        buildings.length > 0 ?
        <div> 
            <BuildingFormContainer  addBuilding={addBuilding}/>
            <BuildingList buildings={buildings}/>
           
        </div>
        // :
        // workplaces.length > 0 ?
        // <div>
        //     <BuildingList houses={[]} workplaces={workplaces}/>
        // </div>
        :
        <p>loading...</p>
    )
}

export default DisplayAllBuildingsContainer;