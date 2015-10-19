import { Point } from '../map/point';
import { ISearch } from './search.resource';

export class SearchResult { // } implements ISearch {

  name: string;
  zoomLevel: number;
  point: Point;

  constructor(name: string, zoomLevel: number, point: Point) {
      this.name = name;
      this.zoomLevel = zoomLevel;
      this.point = point;
  }
}
