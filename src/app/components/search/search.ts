import { Point } from './point';
import { ISearch } from './search.resource';

export class SearchResult { // } implements ISearch {

  searchTerm: string;
  zoomLevel: number;
  point: Point;

  constructor(searchTerm: string, zoomLevel: number, point: Point) {
      this.searchTerm = searchTerm;
      this.zoomLevel = zoomLevel;
      this.point = point;
  }
}
