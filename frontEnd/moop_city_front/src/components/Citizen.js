const Citizen = ({citizen}) => {
    
    return(
        <div>
            <h3>Name:{citizen.fullName}</h3>
            <h3>Home:{citizen.house_id}</h3>
            <h3>Workplace:{citizen.workplace_id}</h3>
        </div>
    )
}

export default Citizen;