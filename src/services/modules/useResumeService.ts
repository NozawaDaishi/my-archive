import { mockResumeData } from '@/mocks/resumeData'
import { ResumeData } from '@/types/resume'

type FuncType = {
  fetchResumeData: () => Promise<ResumeData>
}

export default function useResumeService(): FuncType {
  const fetchResumeData = async (): Promise<ResumeData> => {
    try {
      return mockResumeData
    } catch (error) {
      throw new Error('エラーが発生しました。')
    }
  }

  return {
    fetchResumeData,
  }
}
