import loader from "./Loader";
import tileMap from "./TileMap";
// import tileAtlas from '../../images/tiles.png';

export default class GridMap {
    constructor(context, houses, workplaces) {
      // super(props);
      this.context = context;
      this.loader = new loader();
      this.houses = houses;
      this.workplaces = workplaces;
      this.tileMap = new tileMap(this.houses, this.workplaces);
      // this.tileAtlas = null;
      // this.allotments = allotments;
    }   
  
    init = async () => {
      const tiles = await this.loader.loadImage("tiles", "./assets/tiles.png");
      this.tileAtlas = this.loader.getImage("tiles");
      this.images = {
        tiles,
      };
      this.tileMap.placeInitialBuildings();

      // const image = new Image();

      // this.tileAtlas = image;
      // image.onload = () => {
      //   this.draw();
      // };
      // image.src = "../../images/tiles.png";
    };
  
    draw = () => {
      for (let columnIndex = 0; columnIndex < this.tileMap.columns; columnIndex++) {
        for (let rowIndex = 0; rowIndex < this.tileMap.rows; rowIndex++) {
          let tile = this.tileMap.getTile(columnIndex, rowIndex);
          if (tile !== 0) { // 0 => empty tile
            this.context.drawImage(
              this.tileAtlas, // image
              (tile - 1) * this.tileMap.tileSize, // source x
              0, // source y
              this.tileMap.tileSize, // source width
              this.tileMap.tileSize, // source height
              // columnIndex * this.tileMap.tileSize,
              // rowIndex * this.tileMap.tileSize,
              // this.tileMap.tileSize,
              // this.tileMap.tileSize
              columnIndex * (this.context.canvas.height/5) /this.tileMap.tileSize * this.tileMap.tileSize,  // target x
              rowIndex * (this.context.canvas.height/5) /this.tileMap.tileSize * this.tileMap.tileSize, // target y
              (this.context.canvas.height/5) /this.tileMap.tileSize * this.tileMap.tileSize, // target width
              (this.context.canvas.height/5) /this.tileMap.tileSize * this.tileMap.tileSize // target height
            );
          }
        }
      }
    }; 
  
    render() {
      // draw map
      this.draw();
      return(<> </>);
    }
  }