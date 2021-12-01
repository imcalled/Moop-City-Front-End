
import BuildingFormContainer from './containers/BuildingFormContainer';
import DisplayAllBuildingsContainer from './containers/DisplayAllBuildingsContainer';

import './App.css';
import DisplayAllCitizensContainer from './containers/DisplayAllCitizensContainer';
import Sidebar from './components/Sidebar'

import {useState} from 'react';

function App() {
  const [displayCitizens, setDisplayCitizens] = useState(false);
  // true just for development
  const [displayBuildings, setDisplayBuildings] = useState(true);

  const showHideCitizens = () => {
    if (displayBuildings==false){
      setDisplayCitizens(!displayCitizens);
    }
    else {
      setDisplayCitizens(!displayCitizens);
      setDisplayBuildings(!displayBuildings);
    }
    
  } 

  const showHideBuildings = () => {
    if (displayCitizens==false){
      setDisplayBuildings(!displayBuildings);
    }
    else {
      setDisplayCitizens(!displayCitizens);
      setDisplayBuildings(!displayBuildings);
    }
    
  } 

  const hideAll = () => {
    setDisplayCitizens(false);
    setDisplayBuildings(false);
  }

  return (
    <>
    <div className="big-container">
    <Sidebar showHideCitizens={showHideCitizens} showHideBuildings={showHideBuildings} hideAll={hideAll}/>
    
      
    <div className="right-side">
      <DisplayAllBuildingsContainer display={displayBuildings} showHideBuildings={showHideBuildings}/>
      <DisplayAllCitizensContainer display={displayCitizens} showHideCitizens={showHideCitizens}/>
    </div>
    </div>
    </>
  );
}

export default App;
