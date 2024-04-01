import { WorkLog } from '@/types/calendar'

const mockWorkLog: WorkLog[] = [
  {
    work_day: '2024-03-29',
    works: [
      {
        name: 'Udemy',
        content: 'TypeScript',
        start_time: '13:00',
        end_time: '18:00',
        time: '5時間00分',
        message: '',
      },
      {
        name: '個人開発',
        content: 'My-Archivesの実装',
        start_time: '18:00',
        end_time: '20:30',
        time: '2時間30分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-03-30',
    works: [
      {
        name: '個人開発',
        content: 'My-Archivesの実装',
        start_time: '15:30',
        end_time: '17:00',
        time: '1時間30分',
        message: '',
      },
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR5 午後1問1',
        start_time: '17:20',
        end_time: '18:30',
        time: '1時間10分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-03-31',
    works: [],
  },
  {
    work_day: '2024-04-01',
    works: [
      {
        name: '個人開発',
        content: 'My-Archivesの実装',
        start_time: '18:30',
        end_time: '19:30',
        time: '1時間00分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-02',
    works: [
      // {
      //   name: 'NWスペシャリスト',
      //   content: 'ネスペR5 10ページ',
      //   start_time: '18:00',
      //   end_time: '19:30',
      //   time: '1時間30分',
      //   message: '',
      // },
    ],
  },
]

export default mockWorkLog
