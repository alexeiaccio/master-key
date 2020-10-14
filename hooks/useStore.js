import create from 'zustand'

export const useStore = create((set) => ({
  started: false,
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  zoom: 50,
  soundOn: true,
  scales: {},
  start: () => set(() => ({ started: true })),
  updatePositionX: (positionX) => set(() => ({ positionX })),
  updatePositionY: (positionY) => set(() => ({ positionY })),
  updateZoom: (zoom) => set(() => ({ zoom })),
  updateWidth: (width) => set(() => ({ width })),
  updateHeight: (height) => set(() => ({ height })),
  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),
  setScales: (idx, scales) =>
    set((state) => ({
      scales: {
        ...state.scales,
        [idx]: scales,
      },
    })),
}))
