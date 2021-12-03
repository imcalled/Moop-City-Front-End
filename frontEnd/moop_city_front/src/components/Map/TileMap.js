export default class TileMap {
    constructor(houses, workplaces) {
      this.columns = 5;
      this.rows = 5;
      this.tileSize = 64;
      this.tiles = [
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1
      ];
      this.houses = houses;
      this.workplaces = workplaces;

      // random tiles
      // this.randomTiles = Array.from({length: 25}, () => Math.floor((Math.random() * 3)+1));
      // this.tiles = this.randomTiles;
  }

    placeInitialBuildings = () => {      
      this.houses.map(house => {
        this.tiles[house.allotment_id - 1] = 4;
      })

      this.workplaces.map(workplace => {
        this.tiles[workplace.allotment_id - 1] = 5;
      })
    }

    getTile(columnIndex, rowIndex) {
      return this.tiles[rowIndex * this.columns + columnIndex];
    }
  }