import { mockQualificationData } from '@/mocks/qualificationData'
import type { QualificationData } from '@/types/qualification'

type FuncType = {
  fetchQualificationData: () => Promise<QualificationData>
}

export default function useQualificationService(): FuncType {
  const fetchQualificationData = async (): Promise<QualificationData> => {
    try {
      return mockQualificationData
    } catch (error) {
      throw new Error('エラーが発生しました。')
    }
  }

  return {
    fetchQualificationData,
  }
}
