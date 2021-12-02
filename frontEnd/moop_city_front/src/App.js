
// import BuildingFormContainer from './containers/BuildingFormContainer';
// import DisplayAllBuildingsContainer from './containers/DisplayAllBuildingsContainer';

import './App.css';
// import DisplayAllCitizensContainer from './containers/DisplayAllCitizensContainer';
import Sidebar from './components/Sidebar'
import DisplayContainer from './containers/DisplayContainer';

import {useState} from 'react';
import AllotmentMapContainer from './containers/AllotmentMapContainer';

function App() {
  const [displayCitizens, setDisplayCitizens] = useState(false);
  // true just for development
  const [displayBuildings, setDisplayBuildings] = useState(false);
  const [displayMap, setDisplayMap] = useState(true);
  const [bigContainer, setBigContainer] = useState("allotment");

  const showHideCitizens = () => {
    
    if (!displayCitizens===false){
      setDisplayMap(true);
      setBigContainer("allotment");
    } else {
      setDisplayMap(false);
      setBigContainer("citizens");
    }
    setDisplayBuildings(false);
    setDisplayCitizens(!displayCitizens);
    // if (displayBuildings===false){
    //   setDisplayCitizens(!displayCitizens);
    // }
    // else {
    //   setDisplayCitizens(!displayCitizens);
    //   setDisplayBuildings(!displayBuildings);
    // }
    
  } 

  const showHideBuildings = () => {
    
    if (!displayBuildings===false){
      setDisplayMap(true);
      setBigContainer("allotment");
    } else {
      setDisplayMap(false);
      setBigContainer("buildings");
    }
    setDisplayBuildings(!displayBuildings);
    setDisplayCitizens(false);
    // if (displayCitizens===false){
    //   setDisplayBuildings(!displayBuildings);
    // }
    // else {
    //   setDisplayCitizens(!displayCitizens);
    //   setDisplayBuildings(!displayBuildings);
    // }
    
  } 

  const showHideMap = () => {
    setDisplayMap(true);
    setDisplayCitizens(false);
    setDisplayBuildings(false);
  }

  return (
    <>
    <div className={bigContainer==="allotment" ? "big-container big-container-allotment" : bigContainer==="buildings" ? "big-container big-container-buildings": bigContainer==="citizens" ? "big-container big-container-citizens" : "big-container"}>
      <Sidebar showHideCitizens={showHideCitizens} showHideBuildings={showHideBuildings} showHideMap={showHideMap}/>
      <DisplayContainer showHideCitizens={showHideCitizens} showHideBuildings={showHideBuildings} showHideMap={showHideMap} displayMap={displayMap} displayBuildings={displayBuildings} displayCitizens={displayCitizens}/> 
      
    
    </div>
    </>
  );
}

export default App;