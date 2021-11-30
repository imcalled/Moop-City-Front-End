
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
    
  } 

  const showHideBuildings = () => {
    if (displayCitizens==false){
      setDisplayBuildings(!displayBuildings);
    }
    
  } 

  return (
    <>
    <div>
    <Sidebar showHideCitizens={showHideCitizens} showHideBuildings={showHideBuildings}/>
    <DisplayAllBuildingsContainer display={displayBuildings} showHideBuildings={showHideBuildings}/>
    <DisplayAllCitizensContainer display={displayCitizens} />
    </div>
    </>
  );
}

export default App;
