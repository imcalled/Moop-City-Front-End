import Building from "./Building";

const BuildingList = ({buildings}) => {
    // const houseComponents = houses.map(house =>{
    //     return (
    //         <Building building={house} key={house.id}/>
    //     )
    // })
    // const workplaceComponents = workplaces.map(workplace =>{
    //     return (
    //         <Building building={workplace} key={workplace.id}/>
    //     )
    // })
    const buildingComponents = buildings.map(building => {
        return (
            <Building building={building}/>
        )
    })

    return (
        // <div className="building-list">
        //     <h2>Houses</h2>
        //     {houseComponents}
        //     <h2>Workplace</h2>
        //     {workplaceComponents}
        // </div>
        <div>
            {buildingComponents}
        </div>
    )
}

export default BuildingList;