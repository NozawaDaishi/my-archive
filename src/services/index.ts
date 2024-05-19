import useBookService from '@/services/modules/useBookService'
import useCalendarService from '@/services/modules/useCalendarService'
import useQualificationService from '@/services/modules/useQualificationService'
import useResumeService from '@/services/modules/useResumeService'

export namespace Services {
  export const calendar = useCalendarService()
  export const book = useBookService()
  export const qualification = useQualificationService()
  export const resume = useResumeService()
}
