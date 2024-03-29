import { WorkLog } from '@/types/calendar'

// // 指定された月の総稼働時間を計算する関数
// export const calculateTotalWorkTimeForMonth = (
//   workLog: WorkLog[],
//   year: number,
//   month: number
// ): string => {
//   let totalWorkTimeMinutes = 0

//   workLog.forEach((day) => {
//     const [dayYear, dayMonth] = day.work_day.split('-').map(Number)
//     if (dayYear === year && dayMonth === month) {
//       day.works.forEach((work) => {
//         // 時間を時間と分に分解
//         const [hours, minutes] = work.time.split('時間')[1].split('分')
//         // 合計に加算
//         totalWorkTimeMinutes += parseInt(hours, 10) * 60 + parseInt(minutes, 10)
//       })
//     }
//   })

//   // 合計を時間と分に変換
//   const totalHours = Math.floor(totalWorkTimeMinutes / 60)
//   const totalMinutes = totalWorkTimeMinutes % 60

//   return `${totalHours}時間${totalMinutes}分`
// }

// // 指定された月の総稼働時間を計算する関数
// export const calculateTotalWorkTimeForMonth = (
//   workLog: WorkLog[],
//   year: number,
//   month: number
// ): string => {
//   let totalWorkTimeMinutes = 0

//   workLog.forEach((day) => {
//     const [dayYear, dayMonth] = day.work_day.split('-').map(Number)
//     if (dayYear === year && dayMonth === month + 1) {
//       // 月のインデックスを修正
//       day.works.forEach((work) => {
//         // 時間を時間と分に分解
//         const [hours, minutes] = work.time.split('時間')[1].split('分')
//         // 合計に加算
//         totalWorkTimeMinutes += parseInt(hours, 10) * 60 + parseInt(minutes, 10)
//       })
//     }
//   })

//   // 合計を時間と分に変換
//   const totalHours = Math.floor(totalWorkTimeMinutes / 60)
//   const totalMinutes = totalWorkTimeMinutes % 60

//   return `${totalHours}時間${totalMinutes}分`
// }

export const calculateTotalWorkTimeForMonth = (
  workLog: WorkLog[],
  year: number,
  month: number
): string => {
  let totalWorkTimeMinutes = 0

  workLog.forEach((day) => {
    const [dayYear, dayMonth] = day.work_day.split('-').map(Number)
    if (dayYear === year && dayMonth === month + 1) {
      day.works.forEach((work) => {
        // 正規表現を使用して時間と分を抽出
        const timeMatch = work.time.match(/(\d+)時間(\d+)分/)
        if (timeMatch) {
          const hours = parseInt(timeMatch[1], 10)
          const minutes = parseInt(timeMatch[2], 10)
          // 合計に加算
          totalWorkTimeMinutes += hours * 60 + minutes
        }
      })
    }
  })

  // 合計を時間と分に変換
  const totalHours = Math.floor(totalWorkTimeMinutes / 60)
  const totalMinutes = totalWorkTimeMinutes % 60

  return `${totalHours}時間${totalMinutes}分`
}
