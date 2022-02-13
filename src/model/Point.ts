export class Point {
  x: number;
  y: number;
  type: any;
  type2: number;
  adjacent: any;
  adjacent_dia: any[];
  surround: any;
  neighbor: any[];
  use: any;
  constructor(x, y, type, adjacent, surround, use, neighbor = [], adjacent_dia = [], type2 = 0) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.type2 = type2;
    this.adjacent = adjacent;
    this.adjacent_dia = adjacent_dia;
    this.surround = surround;
    this.neighbor = neighbor;
    this.use = use;
  }
}