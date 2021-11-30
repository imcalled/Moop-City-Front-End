import './Citizen.css'
const Citizen = ({citizen}) => {
    
    return(
        <div className="citizen">
            <div className="building-elem">
                <h4>Name:</h4>
                <p>{citizen.fullName}</p>
            </div>
            <div className="building-elem">
                <h4>Home:</h4>
                <p>{citizen.house_id}</p>
            </div>
            <div className="building-elem">
                <h4>Workplace:</h4>
                <p>{citizen.workplace_id}</p>
            </div>
            
           
            
        </div>
    )
}

export default Citizen;