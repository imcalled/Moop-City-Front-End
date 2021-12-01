import { useState } from "react";
import './CitizenForm.css';

const CitizenForm = ({onCitizenSubmission}) => {

    const[fullName, setFullName] = useState("");
    const[home, setHome] = useState("");
    const[workplace, setWorkplace] = useState("");

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    }

    const handleHomeChange = (event) => {
        setHome(event.target.value);
    }

    const handleWorkplaceChange = (event) => {
        setWorkplace(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
    
    const newCitizen ={
        fullName: fullName,
        house_id: parseInt(home, 10),
        workplace_id: parseInt(workplace, 10)
    }

    onCitizenSubmission(newCitizen);

    setFullName("");
    setHome("");
    setWorkplace("");
}

    return(
        <div className="form-container-citizen">
            <h2>Add new Citizen</h2>
            <form onSubmit={handleFormSubmission} className="form-citizen">
            <div className="formElement-citizen">
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={handleFullNameChange} className="text-input-citizen"/>
            </div>
            <div className="formElement-citizen">
                <label>Home:</label>
                <input type="text" value={home} onChange={handleHomeChange} className="text-input-citizen"/>
            </div>
            <div className="formElement-citizen">
                <label>Workplace:</label>
                <input type="text" value={workplace} onChange={handleWorkplaceChange} className="text-input-citizen"/>
            </div>
            <div className="formElement-citizen">
                    <input type="submit" value="Add Citizen" className="submit-citizen"/>
            </div>
            </form>
        </div>
    )
}

export default CitizenForm;