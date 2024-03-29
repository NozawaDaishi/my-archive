import useBookService from '@/services/modules/useBookService'
import useCalendarService from '@/services/modules/useCalendarService'
import useResumeService from '@/services/modules/useResumeService'

export namespace Services {
  export const calendar = useCalendarService()
  export const book = useBookService()
  export const resume = useResumeService()
}
