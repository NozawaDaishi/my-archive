import { Holidays, WorkLog } from '@/types/calendar'
import { defineStore } from 'pinia'
import { Services } from '@/services'

interface State {
  currentMonth: number
  currentYear: number
  focusedDate: Date
  totalWorkTimeForMonth: string
  holidayMap: Holidays
  workLog: WorkLog[]
}

const useCalendarStore = defineStore('useCalendar', {
  state: (): State => ({
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    focusedDate: new Date(),
    totalWorkTimeForMonth: '',
    holidayMap: {},
    workLog: [],
  }),
  actions: {
    // 祝日情報の取得
    async getHolidays(): Promise<Holidays> {
      this.$patch({
        // holidayMap: await Services.calendar.fetchHolidays(),
        holidayMap: {
          '2024-03-29': '元日',
        },
      })
      return this.holidayMap
    },
    // スタッフシフトの取得
    async getWorkLog(): Promise<WorkLog[]> {
      this.$patch({
        workLog: await Services.calendar.fetchWorkLog(),
      })
      return this.workLog
    },
    async getTotalWorkTimeForMonth(): Promise<string> {
      this.$patch({
        totalWorkTimeForMonth:
          await Services.calendar.fetchTotalWorkTimeForMonth(
            this.currentYear,
            this.currentMonth
          ),
      })
      return this.totalWorkTimeForMonth
    },
    // 月を変更する関数
    changeMonth(step: number): void {
      const newMonth = this.currentMonth + step
      this.focusedDate = new Date()
      if (newMonth < 0) {
        this.currentMonth = 11
        this.currentYear -= 1
      } else if (newMonth > 11) {
        this.currentMonth = 0
        this.currentYear += 1
      } else {
        this.currentMonth = newMonth
      }
      this.getTotalWorkTimeForMonth()
    },
    // 今日の日付にリセットする関数
    resetToToday(): void {
      const today = new Date()
      this.currentMonth = today.getMonth()
      this.currentYear = today.getFullYear()
      this.focusedDate = today
      this.getTotalWorkTimeForMonth()
    },
    // 日付をフォーカスする関数
    focusDate(day: number): void {
      this.focusedDate = new Date(this.currentYear, this.currentMonth, day)
    },
  },
})

export default useCalendarStore
