import { MapInteractionCSS } from 'react-map-interaction';
import './MapGrid.css'
import Modal from './Modal'
import {useState} from 'react';
import HouseImg from '../images/house.png'

// todo first:
// - (DONE) get rid of extra gap from tooltip div
// - (need to fit height better for laptop screens + reassess what want it to do... eg if want centred, atm puts top corners together) fit div to the images/grid at different screen sizes

// then mayb try:
// - (works based on assuming how data will be passed down) hover info
// - (functional looks bad) modal adapt to current proj

// can probably assume the allotment ids will be in order that current db setup suggests - 1a-e 2a-e going across rows
// building id will not match the allotment id as adding in random order not going across rows, do allotment_id

// the api does not display whether the building is a workplace or home so need to get different fetches?

// ---------------------------------------------

const dummyAllotments = [];
for (let i=1; i<=25; i++){
    dummyAllotments.push({
        "id": i,
        "x_coordinate": 1,
        "y_coordinate": "A"
      })
}

let dummyWorkplaces = [
    {
        "id": 1,
        "buildingName": "3 Mansfield Lane",
        "capacity": 131,
        "allotment_id": 1
      },
    {
        "id": 2,
        "buildingName": "31 Mansfield Street",
        "capacity": 10,
        "allotment_id": 20
      }
];

let mappedDummyWorkplaces = dummyWorkplaces.map(workplace => {
    workplace.work = true;
    return workplace;
})
console.log(dummyWorkplaces)
dummyWorkplaces = mappedDummyWorkplaces;

let dummyHouses = [
    {
        "id": 3,
        "buildingName": "10 House Street",
        "capacity": 131,
        "allotment_id": 5
      },
    {
        "id": 4,
        "buildingName": "31 Home Street",
        "capacity": 10,
        "allotment_id": 23
      }
];

let mappedDummyHouses = dummyHouses.map(house => {
    house.work = false;
    return house;
})
dummyHouses = mappedDummyHouses;

const dummyBuildings = dummyHouses.concat(dummyWorkplaces);
console.log(dummyBuildings)

const MapGrid = ({buildings}) => {

    const [show, setShow] = useState(false);
    const [tabSelected, setTabSelected] = useState(1);
  
    const handleClose = () => {
      setShow(false);
    }
  
    const switchTab = (event) => {
      const id = event.target.id;
      console.log(id)
      setTabSelected(parseInt(id))
    }
    const allotmentList = dummyAllotments.map(allotment => {
        return (
            <div class="tooltip">
                <img src={HouseImg} className={dummyBuildings.find(building => building.allotment_id==allotment.id)!=undefined? "houseImage": "hidden"}></img>
                    <img src="https://opengameart.org/sites/default/files/styles/medium/public/grass_0.png.preview.jpg" alt="Grass" className="grassPanel"></img>

                <span class="tooltiptext">{dummyBuildings.find(building => building.allotment_id==allotment.id)==undefined? "Empty Allotment" : dummyBuildings.find(building => building.allotment_id==allotment.id).buildingName}</span>
            </div>
        )
    })

    return (
        <>
        <div className="gridContainer">
        <MapInteractionCSS>
                <div className="testGrid">
                    {allotmentList}   
                </div>
        </MapInteractionCSS>
        
        </div>
        <button  className="menuButton" onClick={()=>setShow(true)}>Menu</button>
        <Modal show={show} handleClose={handleClose} switchTab={switchTab} tabSelected={tabSelected}/>
        </>
    )
}

export default MapGrid