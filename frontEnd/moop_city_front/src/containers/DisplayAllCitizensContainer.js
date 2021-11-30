import {useState, useEffect} from 'react';
import CitizenList from '../components/CitizensList';
import CitizenForm from '../components/CitizenForm';
import Citizen from '../components/Citizen';
import Sidebar from '../components/Sidebar';

const DisplayAllCitizensContainer = () => {

    const [citizens, setCitizens] = useState([]);

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

    return(
        citizens.length > 0 ?
        <>
        <Sidebar />
        <CitizenForm onCitizenSubmission={addNewCitizen}/>
        <hr/>
        <CitizenList citizens={citizens}/>
        </>
        :
       <p>Loading...</p>
    )

}

export default DisplayAllCitizensContainer;