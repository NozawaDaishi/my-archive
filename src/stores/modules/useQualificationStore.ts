import { defineStore } from 'pinia'
import type { QualificationData } from '@/types/qualification'

interface State {
  qualificationData: QualificationData
}

const useQualificationStore = defineStore('useQualificationStore', {
  state: (): State => ({
    qualificationData: { categories: [] },
  }),
  actions: {
    // qualificationDataの追加
    setQualificationData(qualificationData: QualificationData) {
      this.$patch({
        qualificationData,
      })
    },
  },
})

export default useQualificationStore
