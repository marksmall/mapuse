declare module "proj4" {

  interface Transformer {
    forward: (p: Point) => Point;
    inverse: (p: Point) => Point;
  }

  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
  }

  function Proj(a:any, b:any): Transformer;

    function defs(name: string): any;
    function defs(name: string, def: string): void;
    function transform(from: any, to: any, pt: Point): Point;
    function parse(sr: string): any;

  module Proj {
    // export function defs(name: string): any;
    // export function defs(name: string, def: string): void;
    // export function transform(from: any, to: any, pt: Point): Point;
    // export function parse(sr: string): any;
  }
    
//   export = Proj;

}
