import { createPinia } from 'pinia'
import useBookStore from '@/stores/modules/useBookStore'
import useCalendarStore from '@/stores/modules/useCalendarStore'
import useHeaderStore from '@/stores/modules/useHeaderStore'
import useResumeStore from '@/stores/modules/useResumeStore'

const pinia = createPinia()

export namespace Stores {
  export const book = useBookStore
  export const calendar = useCalendarStore
  export const header = useHeaderStore
  export const resume = useResumeStore
}

export default pinia
