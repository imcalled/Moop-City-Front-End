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
                <p>{citizen.houseName}</p>
            </div>
            <div className="building-elem">
                <h4>Workplace:</h4>
                <p>{citizen.workplaceName}</p>
            </div>
            
           
            
        </div>
    )
}

export default Citizen;