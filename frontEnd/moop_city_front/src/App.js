
import BuildingFormContainer from './containers/BuildingFormContainer';
import DisplayAllBuildingsContainer from './containers/DisplayAllBuildingsContainer';

import './App.css';
import DisplayAllCitizensContainer from './containers/DisplayAllCitizensContainer';

function App() {
  return (
    <>
    <DisplayAllBuildingsContainer/>
    <h2>Citizens</h2>
    <DisplayAllCitizensContainer />
    </>
  );
}

export default App;
