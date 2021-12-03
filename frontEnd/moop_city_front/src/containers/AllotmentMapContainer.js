import React, { Component } from "react";
import GridMap from '../components/Map/GridMap';
import '../App.css';
import './AllotmentMapContainer.css';
import { MapInteractionCSS } from 'react-map-interaction';

class AllotmentMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGridMapRunning: false,
      houses: [],
      workplaces: [],
      fetchedHousesData: this.props.newFetchedHousesData,
      fetchedWorkplacesData: this.props.newFetchedWorkplacesData,

      value: {
        scale: 1,
        translation: { x: 0, y: 0 },
        translationBounds: ({xMin:0, yMin:0, xMax:0, yMax:0}),
        disablePan: true
      }
    };
    this.canvasRef = React.createRef();
    // console.log(this.props)
    // this.houses = this.props.houses;
    // this.workplaces = this.props.workplaces;
    // this.allotments = allotments;

  }

  // const [houses, setHouses] = useState([]);
  getHousesData = async () => {
    const res = await fetch("http://localhost:8080/buildings/houses");
    const data = await res.json();
    const modified_data = await data.map(house => {
      house.buildingType = "House";
      return house;
    })
    this.setState(state => ({ houses: modified_data}))
    return setTimeout(() => {
      this.setState(state => ({fetchedHousesData: !this.state.fetchedHousesData})
    )}, 300);
  }

  getWorkplacesData = async () => {
    const res = await fetch("http://localhost:8080/buildings/workplaces");
    const data = await res.json();
    const modified_data1 = await data.map(workplaces => {
      workplaces.buildingType = "Workplace";
      return workplaces;
    })
    return this.setState(state => ({ workplaces: modified_data1}))
  }
    // .then(response => response.json())
    // .then(data => {
    //     const modified_data1 = data.map(house => {
    //         house.buildingType = "House";
    //         return (
    //             house
    //             );
    //     });
        // setHouses(modified_data1)
        // this.setState(state => ({ houses: modified_data1}));
  
  componentDidMount = () => {
    // fitContainer(this.)
    this.getHousesData();
    this.getWorkplacesData();
    setTimeout(() => this.start(), 300);
  }

//   componentDidUpdate = (prevProps, prevState) => {
//     if(this.state.fetchedHousesData != prevState.fetchedHousesData) {
//       this.getHousesData();
//       // this.canvasRef.currentclearRect();
//       setTimeout(() => this.setState(state => ({isGridMapRunning: false})));
//       setTimeout(() => this.start, 300);
//     // useEffect(() => {console.log("useEffect", citizens); addNamesToCitizensData();}, [fetchedData]);
//   }
// }

  start = async () => {
    if (!this.state.isGridMapRunning) {
      // this.gridMap = new GridMap(this.getContext(), this.props.houses, this.props.workplaces);
      this.gridMap = new GridMap(this.getContext(), this.state.houses, this.state.workplaces);
      // this.state.{houses}
      await this.gridMap.init();
      this.renderGridMap();
    }
    this.setState(state => ({ isGridMapRunning: !state.isGridMapRunning }));
  };

  renderGridMap = () => {
    requestAnimationFrame(() => {
        // this.canvasRef.current.getContext("2d").canvas.height = this.canvasRef.current.getContext("2d").canvas.width;
        this.gridMap.render();
      if (this.state.isGridMapRunning) {
          // this.canvasRef.current.getContext("2d").canvas.height = this.canvasRef.current.getContext("2d").canvas.width;
          this.renderGridMap();
      }
    });
  };

  getContext = () => this.canvasRef.current.getContext("2d");
  
  render() {
    return (
      
      <div className={this.props.displayMap ? "show-map" : "hide-map"}>
        {/* <div className="header">
          Tilemaps examples (with React)
        </div> */}
        <div className="gridMapContainer">
        <MapInteractionCSS value={this.state.value} 
        translation={this.state.value.translation}
        translationBounds={this.state.value.translationBounds}
        onChange={(value) => this.setState({ value })}>
        {/* <div id="zoom1">
          <div id="zoom2" >
            <div id="zoom3" > */}
               
                {/* <p>Grid map container</p> */}
                <canvas
                  ref={this.canvasRef}
                  width={960}
                  height={960}
                  style = {{margin: "0 auto"}}
                  // canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
                  />
               
            {/* </div>
          </div>
        </div> */}
        </MapInteractionCSS>
      </div>
      </div>  
      
    );
  }
}

export default AllotmentMapContainer;