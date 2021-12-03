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
  }

  componentDidMount = () => {
    setTimeout(() => this.start(), 300);
  }

  componentDidUpdate = (prevProps) => {
    console.log("comparing house props");
    if(this.props.houses.length != prevProps.houses.length || this.props.workplaces.length != prevProps.workplaces.length) {
      this.setState({isGridMapRunning: false}, this.start);
  }
}

  start = async () => {
    if (!this.state.isGridMapRunning) {
      this.gridMap = new GridMap(this.getContext(), this.props.houses, this.props.workplaces);
      await this.gridMap.init();
      this.renderGridMap();
    }
    this.setState(state => ({ isGridMapRunning: !state.isGridMapRunning }));
  };

  renderGridMap = () => {
    requestAnimationFrame(() => {
        this.gridMap.render();
      if (this.state.isGridMapRunning) {
          this.renderGridMap();
      }
    });
  };

  getContext = () => this.canvasRef.current.getContext("2d");
  
  render() {
    return (
      
      <div className={this.props.displayMap ? "show-map" : "hide-map"}>
        <div className="gridMapContainer">
        <MapInteractionCSS value={this.state.value} 
        translation={this.state.value.translation}
        translationBounds={this.state.value.translationBounds}
        onChange={(value) => this.setState({ value })}>
                <canvas
                  ref={this.canvasRef}
                  width={960}
                  height={960}
                  style = {{margin: "0 auto"}}
                  />
        </MapInteractionCSS>
      </div>
      </div>  
      
    );
  }
}

export default AllotmentMapContainer;