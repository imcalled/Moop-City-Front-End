import {useState, useEffect} from 'react';
import CitizenList from '../components/CitizensList';
import CitizenForm from '../components/CitizenForm';
import Citizen from '../components/Citizen';
import './DisplayAllCitizensContainer.css'

import Sidebar from '../components/Sidebar';

const DisplayAllCitizensContainer = () => {

    const [citizens, setCitizens] = useState([]);
    const [citizens_form, setCitizens_form] = useState(true);
    const [all_citizens, setAll_citizens] = useState(false);
    const [button1, setFormButton1] = useState(true);
    const [button2, setFormButton2] = useState(false);

    const getCitizensData = () => {
        fetch("http://localhost:8080/citizens")
        .then(response => response.json())
        .then(data => setCitizens(data));
    }

    useEffect(getCitizensData, []);

    const addNewCitizen = (newCitizen) => {
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
      <Sidebar />
        <div className="citizen-container">
            <div className="tab-bar">
                <button class={button1 ? "selected" : "unselected"} onClick={() => openTab("citizen-form")}>New Building</button>
                <button class={button2 ? "selected" : "unselected"} onClick={() => openTab("citizens")}>View All Buildings</button>
            </div>
            <div id="citizen-form" className={citizens_form ? "show" : "hide"}>
                <CitizenForm onCitizenSubmission={addNewCitizen}/>
            </div>
            <div id="citizens" className={all_citizens ? "show": "hide"}>
                <CitizenList citizens={citizens}/>
            </div>
            
        </div>
      
        :
       <p>Loading...</p>
    )

}

export default DisplayAllCitizensContainer;