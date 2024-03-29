export interface Holidays {
  [key: string]: string
}

export interface WorkLog {
  work_day: string
  works: {
    name: string // 8文字まで
    content: string
    start_time: string
    end_time: string
    time: string
    message: string | null
  }[]
}
