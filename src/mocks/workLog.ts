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
      {
        name: '個人開発',
        content: 'My-Archivesの実装',
        start_time: '23:30',
        end_time: '24:00',
        time: '0時間30分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-02',
    works: [
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR5 午後1問2',
        start_time: '15:35',
        end_time: '18:50',
        time: '3時間15分',
        message: '',
      },
      {
        name: '個人開発',
        content: 'My-Archivesの実装',
        start_time: '18:30',
        end_time: '20:30',
        time: '2時間00分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-03',
    works: [
      {
        name: '個人開発',
        content: 'My-Archivesの実装',
        start_time: '0:30',
        end_time: '02:40',
        time: '2時間10分',
        message: '',
      },
      {
        name: 'NWスペシャリスト',
        content: '午前Ⅱ対策用ドキュメントの用意',
        start_time: '18:40',
        end_time: '19:40',
        time: '1時間00分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-04',
    works: [],
  },
  {
    work_day: '2024-04-05',
    works: [],
  },
  {
    work_day: '2024-04-06',
    works: [],
  },
  {
    work_day: '2024-04-07',
    works: [
      {
        name: 'NWスペシャリスト',
        content: '午前Ⅱ対策用ドキュメント令和5年春',
        start_time: '14:10',
        end_time: '15:50',
        time: '1時間40分',
        message: '',
      },
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR5 午後1問3',
        start_time: '16:00',
        end_time: ':',
        time: '時間分',
        message: '',
      },
    ],
  },
]

export default mockWorkLog
