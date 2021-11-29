import Building from "./Building";

const BuildingList = ({buildings}) => {
    const buildingComponents = buildings.map(building =>{
        return (
            <Building building={building} key={building.id}/>
        )
    })

    return (
        <div className="building-list">
            {buildingComponents}
        </div>
    )
}

export default BuildingList;