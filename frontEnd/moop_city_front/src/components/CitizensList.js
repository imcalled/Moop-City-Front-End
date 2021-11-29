import Citizen from './Citizen';

const CitizenList = ({citizens}) => {
    
    const citizensComponent = citizens.map(citizen => {
        return(
            <Citizen citizen={citizen} keys={citizen.id}/>
        )
    })

    return(
        <div>
            {citizensComponent}
        </div>
    )
}

export default CitizenList;