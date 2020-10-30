import create from 'zustand'

export const useStore = create((set) => ({
  started: false,
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  prevPosition: null,
  home: null,
  bounds: null,
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
      zoom: 10,
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
  moveToHome: () => set((state) => ({ moveTo: state.home })),
  moveToLeft: () => set((state) => ({ moveTo: [state.bounds[0], state.positionY] })),
  moveToRight: () => set((state) => ({ moveTo: [state.bounds[2], state.positionY] })),
  moveToTop: () => set((state) => ({ moveTo: [state.positionX, state.bounds[1]] })),
  moveToBottom: () => set((state) => ({ moveTo: [state.positionX, state.bounds[3]] })),
  setHome: (home) => set(() => ({ home })),
  setBounds: (bounds) => set(() => ({ bounds })),
  swing: () => set((state) => ({ moveTo: state.bounds ? [
    Math.random() * (state.bounds[2] - state.bounds[0]) + state.bounds[0],
    Math.random() * (state.bounds[1] - state.bounds[3]) + state.bounds[3],
  ] : [0, 0] })),
  noop: () => set(() => ({})),
}))
