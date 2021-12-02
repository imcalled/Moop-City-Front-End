import './Citizen.css'
const Citizen = ({citizen}) => {
    
    
    return(
        < div className="citizen-w-image">
        <img src={`https://avatars.dicebear.com/api/avataaars/:${citizen.fullName}.svg`} height="70"></img>
        <div className="citizen">
            
            <div className="citizen-elem">
                <h4>Name:</h4>
                <p>{citizen.fullName}</p>
            </div>
            
            <div className="citizen-elem">
                <h4>Home:</h4>
                <p>{citizen.houseName}</p>
            </div>
            <div className="citizen-elem">
                <h4>Workplace:</h4>
                <p>{citizen.workplaceName}</p>
            </div> 
        </div>
        </div>
    )
}

export default Citizen;