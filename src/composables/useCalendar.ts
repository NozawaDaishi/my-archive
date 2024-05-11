import { computed, ComputedRef, onMounted, Ref } from 'vue'
import { months, weekdays } from '@/constants/calendar'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'
import { WorkLog } from '@/types/calendar'

interface UseCalendarReturns {
  blankDays: ComputedRef<null[]>
  changeMonth: (step: number) => void
  currentMonth: Ref<number>
  currentYear: Ref<number>
  daysInMonth: ComputedRef<number>
  focusDate: (day: number) => void
  focusedDate: Ref<Date>
  focusedWork: ComputedRef<WorkLog | undefined>
  isFocus: (day: number) => boolean
  isFocusedDateToday: ComputedRef<boolean>
  isHoliday: (day: number) => boolean
  isLastWeeks: ComputedRef<boolean>
  isPastDate: (day: number) => boolean
  isTodayInCurrentMonth: ComputedRef<boolean>
  isToday: (day: number) => boolean
  isNoBorder: (day: number) => boolean
  isWork: (day: number) => boolean
  months: string[]
  resetToToday: () => void
  totalWorkTimeForMonth: Ref<string>
  weekdays: string[]
  weeksInMonth: ComputedRef<number>
  workCountOnDay: (day: number) => number
}

export default function useCalendar(): UseCalendarReturns {
  const calendarStore = Stores.calendar()
  const {
    currentMonth,
    currentYear,
    focusedDate,
    holidayMap,
    workLog,
    totalWorkTimeForMonth,
  } = storeToRefs(calendarStore)
  const {
    getHolidays,
    getWorkLog,
    getTotalWorkTimeForMonth,
    changeMonth,
    resetToToday,
    focusDate,
  } = calendarStore

  onMounted(async () => {
    await getHolidays()
    await getWorkLog()
    await getTotalWorkTimeForMonth()
  })

  // 月の日数を計算する
  const daysInMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  })

  // 月の最初の日が何曜日かを計算する
  const firstDayOfMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value, 1).getDay()
  })

  // 月初めの空白日数を計算する
  const blankDays = computed(() => {
    return Array(firstDayOfMonth.value).fill(null)
  })

  // 月に含まれる週の数を計算する
  const weeksInMonth = computed(() => {
    const firstDayIndex = firstDayOfMonth.value // 月の最初の日が週の何日目か
    const totalDays = daysInMonth.value // その月の総日数
    return Math.ceil((firstDayIndex + totalDays) / 7) // 週の総数
  })

  // フォーカスした日の作業の情報を取得する
  const focusedWork = computed(() => {
    return workLog.value.find((schedule) => {
      const focusedDayStr = `${focusedDate.value.getFullYear()}-${(focusedDate.value.getMonth() + 1).toString().padStart(2, '0')}-${focusedDate.value.getDate().toString().padStart(2, '0')}`
      return schedule.work_day === focusedDayStr
    })
  })

  // 特定の日が祝日かどうかを判定する関数
  const isHoliday = (day: number): boolean => {
    const date = new Date(currentYear.value, currentMonth.value, day)
    const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    return Object.hasOwnProperty.call(holidayMap.value, dateStr)
  }

  // 月に含まれる週の数によって最終週を判定する
  const isLastWeeks = computed(
    () =>
      weeksInMonth.value === 6 ||
      weeksInMonth.value === 5 ||
      weeksInMonth.value === 4
  )

  // 過去の日付かどうかを判定する関数
  const isPastDate = (day: number): boolean => {
    const resetTime = (date: Date): Date => new Date(date.setHours(0, 0, 0, 0))
    const todayWithoutTime = resetTime(new Date())
    const dateToCheck = resetTime(
      new Date(currentYear.value, currentMonth.value, day)
    )
    return dateToCheck < todayWithoutTime
  }

  // 今日が現在の月に含まれるかどうかを判定する
  const isTodayInCurrentMonth = computed(
    () =>
      new Date().getFullYear() === currentYear.value &&
      new Date().getMonth() === currentMonth.value
  )

  const isToday = (day: number): boolean => {
    return isTodayInCurrentMonth.value && day === new Date().getDate()
  }

  const isFocus = (day: number): boolean => {
    return (
      day === focusedDate.value.getDate() &&
      currentMonth.value === focusedDate.value.getMonth() &&
      currentYear.value === focusedDate.value.getFullYear()
    )
  }

  // フォーカスした日が今日かどうかを判定する
  const isFocusedDateToday = computed(() => {
    const today = new Date()
    const focused = focusedDate.value
    return (
      today.getFullYear() === focused.getFullYear() &&
      today.getMonth() === focused.getMonth() &&
      today.getDate() === focused.getDate()
    )
  })

  const isNoBorder = (day: number): boolean => {
    return (
      isLastWeeks.value &&
      blankDays.value.length + day > weeksInMonth.value * 7 - 7
    )
  }

  // 特定の日に作業が記録されているかをチェックする関数
  const isWork = (day: number): boolean => {
    const dateStr = `${currentYear.value}-${(currentMonth.value + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
    return workLog.value.some((log) => log.work_day === dateStr)
  }

  const workCountOnDay = (day: number): number => {
    const dateStr = `${currentYear.value}-${(currentMonth.value + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
    const dayWorkLog = workLog.value.find((log) => log.work_day === dateStr)
    return dayWorkLog ? dayWorkLog.works.length : 0
  }

  return {
    blankDays,
    changeMonth,
    currentMonth,
    currentYear,
    daysInMonth,
    focusDate,
    focusedDate,
    focusedWork,
    isFocus,
    isFocusedDateToday,
    isHoliday,
    isLastWeeks,
    isPastDate,
    isTodayInCurrentMonth,
    isToday,
    isNoBorder,
    isWork,
    months,
    resetToToday,
    totalWorkTimeForMonth,
    weekdays,
    weeksInMonth,
    workCountOnDay,
  }
}
