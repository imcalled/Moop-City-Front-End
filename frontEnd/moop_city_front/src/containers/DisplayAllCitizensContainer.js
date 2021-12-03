import {useState, useEffect} from 'react';
import CitizenList from '../components/CitizensList';
import CitizenForm from '../components/CitizenForm';
import Citizen from '../components/Citizen';
import './DisplayAllCitizensContainer.css'

import Sidebar from '../components/Sidebar';

const DisplayAllCitizensContainer = ({display, showHideCitizens, houses, workplaces, getHousesData, getWorkplaceData}) => {

    const [citizens, setCitizens] = useState([]);
    const [citizens_form, setCitizens_form] = useState(true);
    const [all_citizens, setAll_citizens] = useState(false);
    const [button1, setFormButton1] = useState(true);
    const [fetchedData, setFetchedData] = useState(false);
    const [button2, setFormButton2] = useState(false);
    

    const getCitizensData = () => {
        fetch("http://localhost:8080/citizens")
        .then(response => response.json())
        .then(data => {
            setCitizens(data);
            console.log("first", data);

        })
        .then(console.log("here",citizens))
        .then(setTimeout(() => {setFetchedData(!fetchedData)}, 300));
        
        // .then(()=>getHousesData())
        // .then(() => getWorkplaceData())
        // .then(() => addNamesToCitizensData());
    }

    const addNamesToCitizensData = () => {
        if (houses.length> 0 && workplaces.length > 0) {
            const modified_citizens = citizens.map(citizen => {
                    if (citizen.workplace_id == 0){
                        citizen.workplaceName = "Hello";
                    } else {
                        console.log("citizen:", citizen);
                        const workplace_name = workplaces.find(workplace => workplace.id == citizen.workplace_id);
                        citizen.workplaceName = workplace_name.buildingName;
                    }
                    if (citizen.house_id == 0 ){
                        citizen.houseName = "";
                    } else {
                        const house_name = houses.find(house => house.id == citizen.house_id);
                        citizen.houseName = house_name.buildingName;
                    }
                    
                    return (citizen);
                })
            console.log("this is ", modified_citizens);
            setCitizens(modified_citizens);
        }
        
    }

    useEffect(()=> {getCitizensData(); console.log("loop?");}, []);
    //if fetchedData changed, run addNamesToCitizensData() and reload
    useEffect(() => {console.log("useEffect", citizens); addNamesToCitizensData();}, [fetchedData]);

    const addNewCitizen = (newCitizen) => {
        const modified_citizen = {
            
        }
        fetch("http://localhost:8080/citizens", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCitizen)
        })
        .then(() => getCitizensData());
    }
    const openTab =(tabName ) => {
        if (tabName=="citizen-form"){
            setCitizens_form(true);
            setAll_citizens(false);
            setFormButton1(true);
            setFormButton2(false);
        } else if (tabName ==="citizens") {
            setCitizens_form(false);
            setAll_citizens(true);
            setFormButton1(false);
            setFormButton2(true);
        }
    }

    return(
        citizens.length > 0 ?
      
        <div className={display ? "citizen-container" : "hide"}>
            <div className="tab-bar">
                <button className={button1 ? "selected-citizen" : "unselected-citizen"} onClick={() => openTab("citizen-form")}>New Citizen</button>
                <button className={button2 ? "selected-citizen" : "unselected-citizen"} onClick={() => openTab("citizens")}>View All Citizens</button>
                <button onClick={showHideCitizens} className="exit-button-citizen">X</button>
            </div>
            <div id="citizen-form" className={citizens_form ? "show" : "hide"}>
                <CitizenForm onCitizenSubmission={addNewCitizen}  houses={houses} workplaces={workplaces} />
            </div>
            <div id="citizens" className={all_citizens ? "show": "hide"}>
                <CitizenList citizens={citizens} addNamesToCitizensData={addNamesToCitizensData}/>
            </div>
            
        </div>
      
        :
       <p>Loading...</p>
    )

}

export default DisplayAllCitizensContainer;