import Building from "./Building";
import './BuildingList.css'

const BuildingList = ({houses, workplaces}) => {

    const houseDisplay = () => {
        if (houses.length <= 0) {
        return (
            <p>Empty</p>
        )
        } else {
            const houseComponents = houses.map(house =>{
            return (
                <Building building={house} key={house.id}/>
            )
            })
            return (
                houseComponents
            )
        }
    }
    
    const workplaceDisplay = () => {
        if (workplaces.length <= 0) {
        return (
            <p>Empty</p>
        )
        } else {
            const workplaceComponents = workplaces.map(workplace =>{
            return (
                <Building building={workplace} key={workplace.id}/>
            )
            })
            return (
                workplaceComponents
            )
        }
    }
   

    return (
        <div className="building-list">
            <h2>Houses</h2>
            {houseDisplay()}
            <h2>Workplaces</h2>
            {workplaceDisplay()}
        </div>
    )
}

export default BuildingList;