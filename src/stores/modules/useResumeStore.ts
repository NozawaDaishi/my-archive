import { defineStore } from 'pinia'
import { ResumeData } from '@/types/resume'

interface State {
  resumeData: ResumeData | null
}

const useResumeStore = defineStore('useResumeStore', {
  state: (): State => ({
    resumeData: null,
  }),
  actions: {
    // resumeDataの追加
    async setResumeData(resumeData: ResumeData) {
      this.$patch({
        resumeData,
      })
    },
  },
})

export default useResumeStore
