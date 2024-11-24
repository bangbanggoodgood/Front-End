import type { TMapStore } from '@/model'
import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', {
  state: (): TMapStore => ({ map: null, coords: {}, markers: [] }),
  actions: {
    setMap(map: any): void {
      this.map = map
    },
    addCoord(key: string, coord: any): void {
      this.coords[key] = coord
    },
    removeCoords(): void {
      this.coords = {}
    },
    addMarker(marker: any): void {
      this.markers.push(marker)
    },
    removeMarkers(): void {
      for (const marker of this.markers) {
        marker.setMap(null)
      }
    },
  },
})
