import { Holidays, WorkLog } from '@/types/calendar'
import axios from 'axios'
import { calculateTotalWorkTimeForMonth } from '@/utils/calculateWorkTime'
import mockWorkLog from '@/mocks/workLog'

type FuncType = {
  fetchHolidays: () => Promise<Holidays>
  fetchWorkLog: () => Promise<WorkLog[]>
  fetchTotalWorkTimeForMonth: (
    currentYear: number,
    currentMonth: number
  ) => Promise<string>
}

export default function useCalendarService(): FuncType {
  // 祝日情報取得
  const fetchHolidays = async (): Promise<Holidays> => {
    try {
      // TODO: 以下をapi層に分割する
      const { data } = await axios.get<Holidays>(
        'https://holidays-jp.github.io/api/v1/date.json'
      )
      return data
    } catch (error: unknown) {
      throw new Error('fetchHolidaysでエラーが発生しました。')
    }
  }
  // 作業ログ取得
  const fetchWorkLog = async (): Promise<WorkLog[]> => {
    try {
      const data = mockWorkLog
      return data
    } catch (error: unknown) {
      throw new Error('fetchWorkLogでエラーが発生しました。')
    }
  }
  // 指定された月の総稼働時間を取得
  const fetchTotalWorkTimeForMonth = async (
    currentYear: number,
    currentMonth: number
  ): Promise<string> => {
    try {
      // 指定された月の総稼働時間を計算
      const totalWorkTimeForMonth = calculateTotalWorkTimeForMonth(
        mockWorkLog,
        currentYear,
        currentMonth
      )
      const data = totalWorkTimeForMonth
      return data
    } catch (error: unknown) {
      throw new Error('fetchWorkLogでエラーが発生しました。')
    }
  }

  return {
    fetchHolidays,
    fetchWorkLog,
    fetchTotalWorkTimeForMonth,
  }
}
