
import BuildingFormContainer from './containers/BuildingFormContainer';
import DisplayAllBuildingsContainer from './containers/DisplayAllBuildingsContainer';

import './App.css';
import DisplayAllCitizensContainer from './containers/DisplayAllCitizensContainer';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <div>
    <Sidebar />
    <DisplayAllBuildingsContainer/>
    <DisplayAllCitizensContainer />
    </div>
    </>
  );
}

export default App;
