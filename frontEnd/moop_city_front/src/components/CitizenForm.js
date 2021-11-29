import { useState } from "react";

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
        <>
            <h2>Add new Citizen</h2>
            <form onSubmit={handleFormSubmission}>
            <div>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={handleFullNameChange}/>
            </div>
            <div>
                <label>Home:</label>
                <input type="text" value={home} onChange={handleHomeChange}/>
            </div>
            <div>
                <label>Workplace:</label>
                <input type="text" value={workplace} onChange={handleWorkplaceChange}/>
            </div>
            <div className="formElement">
                    <input type="submit" value="Add Task"/>
            </div>
            </form>
        </>
    )
}

export default CitizenForm;