// import { useState, useEffect, useRef, createRef } from "react";
// import Grid from "../components/Map/Grid";

// const AllotmentMapContainer = () => {
//     //useRef returns mutable ref object,
//     //.current property initialised to passed argument 
//     //reference to canvas DOM element
//     // const canvasRef = useRef(null);
//     const canvasRef = createRef();
//     const [mapLoaded, setMapLoaded] = useState(false);

//     // useEffect(() => {
//     //     start();
//     // })
//     useEffect(() => start(), []);
//     var grid;
    
//     const start = async () => {
//         if(!mapLoaded) {
//             grid = new Grid(getContext());
//             await grid.init();
//             renderMap();
//         }
//         setMapLoaded = !mapLoaded;
//     }

//     const getContext = () => {
//         canvasRef.current.getContext("2d");
//     }

//     const renderMap = () => {
//         requestAnimationFrame(() => {
//             grid.render();
//         })

//         if(mapLoaded) {
//             renderMap();
//         }
//     }

//     // useEffect(() => {
//     //     getContext();
//     //     mapLoading = renderMap();
//     // }
//     // , []);
    
//     return (
//         <>
//             <h1>TileMaps</h1>
//             <canvas
//                 ref = {canvasRef}
//                 width = {window.innerWidth}
//                 height = {window.innerHeight}
//                 // onClick = {(e) => {
//                 //     const canvas = canvasRef.current;
//                 //     //getContext, super method returns drawing context on canvas
//                 //     //allows you to draw within the canvas gets the image
//                 //     const ctx = canvas.getContext('2d');
//                 //     //implement draw on context here
//                 //     // Grid.draw{};
//                 // }}
//             />
//         </>
//     )
// }
// export default AllotmentMapContainer;

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
    return this.setState(state => ({ houses: modified_data}))
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

  componentDidUpdate = (prevState) => {
    if(this.state.workplaces != prevState.workplaces) {
      this.getWorkplacesData();
    // useEffect(() => {console.log("useEffect", citizens); addNamesToCitizensData();}, [fetchedData]);
  }
}

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

// import React, { Component, useState, useEffect, useRef, createRef } from "react";
// import GridMap from '../components/Map/GridMap';
// import '../App.css';

// const AllotmentMapContainer = () => {
  
//   const [isGridMapRunning, setIsGridMapRunning] = useState(false);
//   const [houses, setHouses] = useState([]);
//   const [workplaces, setWorkplaces] = useState([]);
//   // const [canvasRef, setCanvasRef] = useState(createRef());
//   const [context, setContext] = useState("");
//   const canvasRef = useRef(null);
  
//   // getCanvas = () => { return canvasRef.current }
//     // this.canvasRef = React.createRef();

//   const getHousesData = () => {
//     fetch("http://localhost:8080/buildings/houses")
//       .then(response => response.json())
//       .then(data => {
//         const modified_data = data.map(house => {
//           house.buildingType = "House";
//           return house;
//         })
//       setHouses(modified_data);
//   })
// }

//   const getWorkplacesData = () => {
//     fetch("http://localhost:8080/buildings/workplaces")
//       .then(response => response.json())
//       .then(data => {
//         const modified_data1 = data.map(workplaces => {
//           workplaces.buildingType = "Workplace";
//           return workplaces;
//       })
//       setWorkplaces(modified_data1);
//     })
//   }
//     // .then(response => response.json())
//     // .then(data => {
//     //     const modified_data1 = data.map(house => {
//     //         house.buildingType = "House";
//     //         return (
//     //             house
//     //             );
//     //     });
//         // setHouses(modified_data1)
//         // this.setState(state => ({ houses: modified_data1}));


//   // componentDidUpdate = (prevProps, prevState) => {
//   //   if(this.props.workplaces != prevProps.workplaces) {
//   //     this.getWorkplacesData();
//   //   // useEffect(() => {console.log("useEffect", citizens); addNamesToCitizensData();}, [fetchedData]);
//   // }

//   const start = async () => {
//     if (!isGridMapRunning) {
//       // this.gridMap = new GridMap(this.getContext(), this.props.houses, this.props.workplaces);
//       const gridMap = new GridMap(getContext(), {houses, workplaces});
//       // this.state.{houses}
//       await gridMap.init();
//       renderGridMap(gridMap);
//     }
//     setIsGridMapRunning(!isGridMapRunning);
//   };

//   const renderGridMap = (gridMap) => {
//     requestAnimationFrame(() => {
//         // this.canvasRef.current.getContext("2d").canvas.height = this.canvasRef.current.getContext("2d").canvas.width;
//         gridMap.render();
//       if (isGridMapRunning) {
//           // this.canvasRef.current.getContext("2d").canvas.height = this.canvasRef.current.getContext("2d").canvas.width;
//           renderGridMap();
//       }
//     });
//   };

//   const getContext = () => canvasRef.current.getContext("2d");

//   useEffect(() => {
//     getHousesData();
//     getWorkplacesData();
//     setTimeout(() => start(), 300);
//   }, [])

//   return (
//     <div>
//       {/* <div className="header">
//         Tilemaps examples (with React)
//       </div> */}
//       <div className="gridMapContainer">
//         {/* <p>Grid map container</p> */}
//           <canvas
//             ref={canvasRef}
//             width={960}
//             height={960}
//             style = {{margin: "0 auto"}}
//             // canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
//             />
//       </div>
//     </div>
//   );
// }
// export default AllotmentMapContainer;