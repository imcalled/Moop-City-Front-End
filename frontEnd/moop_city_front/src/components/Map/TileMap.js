// class TileMap {
//     constructor() {
//         this.columns = 2;
//         this.rows = 2;
//         this.tileSize = 64;
//         this.tiles = [
//             1, 1,
//             1, 1
//         ];
//     }
//     // getTile(layerIndex, columnIndex, rowIndex) {
//     //     return this.layers[layerIndex][rowIndex * this.columns + columnIndex];
//     // }

//     //TODO: GET request to map indexes to allotments
//     getTile = (columnIndex, rowIndex) => {
//         return this.tiles[rowIndex * this.columns + columnIndex];
//     }
// }
// export default TileMap;

export default class TileMap {
    constructor() {
      this.columns = 5;
      this.rows = 5;
      this.tileSize = 64;
      // this.tiles = [
      //   1, 3, 3, 3, 1,
      //   1, 1, 1, 1, 1, 
      //   1, 1, 1, 1, 1,
      //   1, 1, 1, 1, 1,
      //   1, 1, 1, 1, 2
      // ];
      this.randomTiles = Array.from({length: 25}, () => Math.floor((Math.random() * 3)+1));
      this.tiles = this.randomTiles;
      this.onClick = this.onClick.bind(this);
      this.state = {clickedIndex: []};
    // }
  }
  
    getTile(columnIndex, rowIndex) {
      return this.tiles[rowIndex * this.columns + columnIndex];
    }

    onClick(i) {
      const index = this.state.clickedIndex.slice();
      if(index.indexOf(i) === -1) { //handle duplicates
        index.push(i);
        this.setState({clickedIndex: index})
      }
    }

  }