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

// import React, { Component } from "react";
// import Grid from "../components/Map/Grid";
// import "../App.css";

// const CANVAS_WIDTH = 512;
// const CANVAS_HEIGHT = 512;

// class AllotmentMapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasMapLoaded: false
//     };
//     this.canvasRef = React.createRef();
//   }

//   componentDidMount = () => {
//     this.start();
//   };

//   start = async () => {
//     if (!this.state.hasMapLoaded) {
//       this.grid = new Grid(this.getContext());
//       await this.grid.init();
//       this.renderGrid();
//     }
//     this.setState(state => ({ hasMapLoaded: !state.hasMapLoaded }));
//   };

//   renderGrid = () => {
//     requestAnimationFrame(() => {
//       this.grid.render();

//       if (this.state.hasMapLoaded) {
//         this.renderGrid();
//       }
//     });
//   };

//   getContext = () => this.canvasRef.current.getContext("2d");

//   render() {
//     return (
//       <div>
//         <div className="header">
//           Tilemaps examples (with React)
//         </div>
//         <div className="subheader">
//           No Scroll
//         </div>
//         <div className="AllotmentMapContainer">
//           <canvas
//             ref={this.canvasRef}
//             width={CANVAS_WIDTH}
//             height={CANVAS_HEIGHT}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default AllotmentMapContainer;

import React, { Component } from "react";
import GridMap from '../components/Map/GridMap';
import '../App.css';

class AllotmentMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGridMapRunning: false
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount = () => {
    this.start();
  };

  start = async () => {
    if (!this.state.isGridMapRunning) {
      this.gridMap = new GridMap(this.getContext());
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
    // var rect = this.canvasRef.current.parentNode.getBoundingClientRect();
    // this.canvas = this.canvasRef.current;
    // this.canvas.width = rect.width;
    // this.canvas.height = rect.height;
  
  render() {
    return (
      <div>
        <div className="header">
          Tilemaps examples (with React)
        </div>
        <div className="gridMapContainer">
          <canvas id="responsive-canvas"
            ref={this.canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            // canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
          />
        </div>
      </div>
    );
  }
}

export default AllotmentMapContainer;