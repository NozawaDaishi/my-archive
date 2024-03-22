import { defineStore } from 'pinia'

interface State {
  headerRef: HTMLElement | null
  headerHeight: number
}

const useHeaderStore = defineStore('useHeaderStore', {
  state: (): State => ({
    headerRef: null,
    headerHeight: 0,
  }),
  actions: {},
})

export default useHeaderStore
