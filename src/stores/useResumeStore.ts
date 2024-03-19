import { defineStore } from 'pinia'
import { ResumeData } from '@/types/resume'
import { resumeService } from '@/services'

interface State {
  resumeData: ResumeData | null
}

const useResumeStore = defineStore('useResumeStore', {
  state: (): State => ({
    resumeData: null,
  }),
  actions: {
    async getResumeData() {
      this.$patch({
        resumeData: await resumeService.fetchResumeData(),
      })
    },
  },
})

export default useResumeStore
