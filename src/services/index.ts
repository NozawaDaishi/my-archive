import useBookService from '@/services/bookService'
import useResumeService from '@/services/resumeService'

const bookService = useBookService()
const resumeService = useResumeService()

export { bookService, resumeService }
