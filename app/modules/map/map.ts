import { View } from 'openlayers'

export interface Layer {
  type: string
  url: string
  attributions: string[]
  sublayers: string[]
  format: string
  opacity: number
}

export interface MapConfig {
  extent: number[]
  resolutions: number[]
  center: number[]
  crs: any,
  layers: Layer[]
}
// export interface MapConfig {
//   target: string
//   layers: Layer[]
//   view: View
//   controls: any
// }
