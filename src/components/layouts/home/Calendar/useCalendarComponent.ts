import { computed, ComputedRef, onMounted, ref, Ref } from 'vue'
import { months, weekdays } from '@/constants/calendar'
import axios from 'axios'

interface UseCalendarComponentReturns {
  currentMonth: Ref<number>
  currentYear: Ref<number>
  focusedDate: Ref<Date>
  months: string[]
  weekdays: string[]
  daysInMonth: ComputedRef<number>
  blankDays: ComputedRef<null[]>
  isTodayInCurrentMonth: ComputedRef<boolean>
  weeksInMonth: ComputedRef<number>
  isLastWeeks: ComputedRef<boolean>
  isPastDate: (day: number) => boolean
  isHoliday: (date: Date) => boolean
  changeMonth: (step: number) => void
  resetToToday: () => void
  focusDate: (day: number) => void
}

export function useCalendarComponent(): UseCalendarComponentReturns {
  const currentMonth = ref(new Date().getMonth())
  const currentYear = ref(new Date().getFullYear())
  const focusedDate = ref(new Date())
  const holidayMap = ref<{ [key: string]: string }>({})

  // 祝日情報を取得する
  onMounted(async () => {
    try {
      const { data } = await axios.get<{ [key: string]: string }>(
        'https://holidays-jp.github.io/api/v1/date.json'
      )
      holidayMap.value = data
    } catch (error) {
      console.error('Failed to fetch holidays:', error)
    }
  })

  // 特定の日が祝日かどうかを判定する関数
  const isHoliday = (date: Date): boolean => {
    const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    return Object.hasOwnProperty.call(holidayMap.value, dateStr)
  }

  // 過去の日付かどうかを判定する関数
  const isPastDate = (day: number): boolean => {
    const resetTime = (date: Date): Date => new Date(date.setHours(0, 0, 0, 0))
    const todayWithoutTime = resetTime(new Date())
    const dateToCheck = resetTime(
      new Date(currentYear.value, currentMonth.value, day)
    )
    return dateToCheck < todayWithoutTime
  }

  // 月に含まれる週の数によって最終週を判定する
  const isLastWeeks = computed(
    () =>
      weeksInMonth.value === 6 ||
      weeksInMonth.value === 5 ||
      weeksInMonth.value === 4
  )

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

  // 今日が現在の月に含まれるかどうかを判定する
  const isTodayInCurrentMonth = computed(
    () =>
      new Date().getFullYear() === currentYear.value &&
      new Date().getMonth() === currentMonth.value
  )

  // 月に含まれる週の数を計算する
  const weeksInMonth = computed(() => {
    const firstDayIndex = firstDayOfMonth.value // 月の最初の日が週の何日目か
    const totalDays = daysInMonth.value // その月の総日数
    return Math.ceil((firstDayIndex + totalDays) / 7) // 週の総数
  })

  // 月を変更する関数
  const changeMonth = (step: number): void => {
    const newMonth = currentMonth.value + step
    focusedDate.value = new Date()
    if (newMonth < 0) {
      currentMonth.value = 11
      currentYear.value -= 1
    } else if (newMonth > 11) {
      currentMonth.value = 0
      currentYear.value += 1
    } else {
      currentMonth.value = newMonth
    }
  }

  // 今日の日付にリセットする関数
  const resetToToday = (): void => {
    const today = new Date()
    currentMonth.value = today.getMonth()
    currentYear.value = today.getFullYear()
    focusedDate.value = today
  }

  // 日付をフォーカスする関数
  const focusDate = (day: number): void => {
    focusedDate.value = new Date(currentYear.value, currentMonth.value, day)
  }
  return {
    currentMonth,
    currentYear,
    focusedDate,
    months,
    weekdays,
    daysInMonth,
    blankDays,
    isTodayInCurrentMonth,
    weeksInMonth,
    isLastWeeks,
    isPastDate,
    isHoliday,
    changeMonth,
    resetToToday,
    focusDate,
  }
}
