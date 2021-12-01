// import Loader from "./Loader";
// import TileMap from "./TileMap";

// class Grid {

//     constructor(context) {
//         this.context = context;
//         this.loader = new Loader();
//         this.tileMap = new TileMap();
//     }

//     init = async () => {
//         const tiles= await this.loader.loadImage("tiles", "../../images/tiles.png");
//         //store tiles in atlas/spritesheet, render small section
//         this.tileAtlas = this.loader.getImage("tiles");
//         this.images = {
//             tiles,
//         };
//     };

//     draw = () => {
//         for(let columnIndex = 0; columnIndex < this.tileMap.columns; columnIndex++) {
//             for(let rowIndex = 0; rowIndex < this.tileMap.rows; rowIndex++) {
//                 //draw according to tileMap .tiles
//                 let tile = this.tileMap.getTile(columnIndex, rowIndex);
//                 if(tile !== 0) { //if not empty tile
//                     this.context.drawImage(
//                         this.tileAtlas, //atlas image
//                         this.tileMap.tileSize * (tile -1), //atlas coordinates x
//                         0, //atlas coordinates y
//                         this.tileMap.tileSize, //width of tile in atlas
//                         this.tileMap.tileSize, //height of tile in atlas
//                         columnIndex * this.tileMap.tileSize, //target x
//                         rowIndex * this.tileMap.tileSize, //target y
//                         this.tileMap.tileSize, //target width
//                         this.tileMap.tileSize //target height
//                     )
//                 }
//             }
//         }
//     };

//     render() {
//         this.draw(0);
//     }
// }

// //      init = async () => {
// //         const tiles = await this.loader.loadImage("tiles", "../images/tiles.png");
// //         const character = await this.loader.loadImage("character", "../images/character.png");
// //         this.tileAtlas = this.loader.getImage("tiles");
// //         this.hero = { x: 128, y: 384, image: this.loader.getImage("character") };
// //         this.images = {
// //         tiles,
// //         character
// //         };
// //   };

// //   drawLayer = layerIndex => {
// //     for (let columnIndex = 0; columnIndex < this.tileMap.columns; columnIndex++) {
// //       for (let rowIndex = 0; rowIndex < this.tileMap.rows; rowIndex++) {
// //         let tile = this.tileMap.getTile(layerIndex, columnIndex, rowIndex);
// //         if (tile !== 0) { // 0 => empty tile
// //           this.context.drawImage(
// //             this.tileAtlas, // image
// //             (tile - 1) * this.tileMap.tileSize, // source x
// //             0, // source y
// //             this.tileMap.tileSize, // source width
// //             this.tileMap.tileSize, // source height
// //             columnIndex * this.tileMap.tileSize,  // target x
// //             rowIndex * this.tileMap.tileSize, // target y
// //             this.tileMap.tileSize, // target width
// //             this.tileMap.tileSize // target height
// //           );
// //         }
// //       }
// //     }
// //   };

// //   render() {
// //     // draw map background layer
// //     this.drawLayer(0);
// //     // draw game sprites
// //     this.context.drawImage(this.hero.image, this.hero.x, this.hero.y);
// //     // draw map top layer
// //     this.drawLayer(1);
// //   }
// // }

// export default Grid;

import loader from "./Loader";
import tileMap from "./TileMap";

export default class GridMap {
    constructor(context) {
      this.context = context;
      this.loader = new loader();
      this.tileMap = new tileMap();
    }
  
    init = async () => {
      const tiles = await this.loader.loadImage("tiles", "./assets/tiles.png");
      this.tileAtlas = this.loader.getImage("tiles");
      this.images = {
        tiles,
      };
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
              columnIndex * Math.ceil(Math.floor(this.context.canvas.height/5) /this.tileMap.tileSize) * this.tileMap.tileSize,  // target x
              rowIndex * Math.ceil(Math.floor(this.context.canvas.height/5) /this.tileMap.tileSize) * this.tileMap.tileSize, // target y
              Math.ceil(Math.floor(this.context.canvas.height/5) /this.tileMap.tileSize) * this.tileMap.tileSize, // target width
              Math.ceil(Math.floor(this.context.canvas.height/5) /this.tileMap.tileSize) * this.tileMap.tileSize // target height
            );
          }
        }
      }
    }; 
  
    render() {
      // draw map
      this.draw(0);
    }
  }