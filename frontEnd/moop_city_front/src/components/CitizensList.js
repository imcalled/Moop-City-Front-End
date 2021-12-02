import Citizen from './Citizen';
import { useEffect } from 'react';

const CitizenList = ({citizens, addNamesToCitizensData}) => {
    

    const citizensComponent = citizens.map(citizen => {
        return(
            <Citizen citizen={citizen} key={citizen.id}/>
        )});
    return(
        <div>
            {citizensComponent}
        </div>
    )
}

export default CitizenList;