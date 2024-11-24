import type { TMapStore } from '@/model'
import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', {
  state: (): TMapStore => ({ map: null, coords: [], markers: [] }),
  actions: {
    setMap(map: any): void {
      this.map = map
    },
    addCoords(coord: any): void {
      this.coords.push(coord)
    },
    removeCoords(): void {
      this.coords = []
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
