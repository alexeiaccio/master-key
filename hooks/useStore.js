import create from 'zustand'

export const useStore = create((set) => ({
  started: true,
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  prevPosition: null,
  moveTo: null,
  zoom: 50,
  soundOn: false,
  lang: 'eng',
  scales: {},
  start: () => set(() => ({ started: true })),
  updatePositionX: (positionX) => set(() => ({ positionX })),
  updatePositionY: (positionY) => set(() => ({ positionY })),
  updateZoom: (zoom) => set(() => ({ zoom })),
  updateWidth: (width) => set(() => ({ width })),
  updateHeight: (height) => set(() => ({ height })),
  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),
  toggleLang: () =>
    set((state) => ({ lang: state.lang === 'eng' ? 'rus' : 'eng' })),
  setScales: (idx, scales) =>
    set((state) => ({
      scales: {
        ...state.scales,
        [idx]: scales,
      },
    })),
  zoomOut: () =>
    set((state) => ({
      zoom: 5,
      prevPosition: [state.positionX, state.positionY],
      moveTo: [0, 0],
    })),
  zoomIn: () =>
    set((state) => ({
      zoom: 50,
      moveTo: state.prevPosition,
      prevPosition: null,
    })),
  setMoveTo: (moveTo) => set(() => ({ moveTo })),
  noop: () => set(() => ({})),
}))
