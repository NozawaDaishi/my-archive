import { ResumeData } from '@/types/resume'
import { resumeMockData } from '@/data/resumeData'

type FuncType = {
  fetchResumeData: () => Promise<ResumeData>
}

export default function useResumeService(): FuncType {
  const fetchResumeData = async (): Promise<ResumeData> => {
    try {
      return resumeMockData
    } catch (error) {
      throw new Error('エラーが発生しました。')
    }
  }

  return {
    fetchResumeData,
  }
}
