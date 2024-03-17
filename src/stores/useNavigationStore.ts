import { defineStore } from 'pinia'

interface State {
  activeNavigation: string
}

const useNavigationStore = defineStore(
  'useNavigationStore',
  {
    state: (): State => ({
      activeNavigation: '',
    }),
    actions: {},
  }
)

export default useNavigationStore
