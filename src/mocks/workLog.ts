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
        content: '午前Ⅱ対策ドキュメント準備',
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
        content: '午前Ⅱ対策令和5年春',
        start_time: '14:10',
        end_time: '15:50',
        time: '1時間40分',
        message: '',
      },
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR5 午後1問3',
        start_time: '16:20',
        end_time: '19:00',
        time: '2時間40分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-08',
    works: [],
  },
  {
    work_day: '2024-04-09',
    works: [],
  },
  {
    work_day: '2024-04-10',
    works: [],
  },
  {
    work_day: '2024-04-11',
    works: [
      {
        name: 'NWスペシャリスト',
        content: '午前Ⅱ令和4年春',
        start_time: '0:30',
        end_time: '2:00',
        time: '1時間30分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-12',
    works: [],
  },
  {
    work_day: '2024-04-13',
    works: [
      {
        name: 'NWスペシャリスト',
        content: '午前Ⅱ令和3年春~平成28年秋',
        start_time: '12:51',
        end_time: '17:232',
        time: '4時間32分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-14',
    works: [
      {
        name: '自作キーボード',
        content: 'Hatsukey70',
        start_time: '13:30',
        end_time: '17:30',
        time: '4時間00分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-15',
    works: [],
  },
  {
    work_day: '2024-04-16',
    works: [
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR4 午後1問1',
        start_time: '15:20',
        end_time: '17:20',
        time: '2時間00分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-17',
    works: [
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR4 午後1問2',
        start_time: '16:30',
        end_time: '18:00',
        time: '1時間30分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-18',
    works: [
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR4 午後1問3',
        start_time: '14:00',
        end_time: '17:30',
        time: '3時間30分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-19',
    works: [
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR3 午後1問3,1',
        start_time: '13:00',
        end_time: '17:30',
        time: '4時間30分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-20',
    works: [
      {
        name: 'NWスペシャリスト',
        content: 'ネスペR3 午後1問1,2',
        start_time: '12:00',
        end_time: '14:42',
        time: '2時間42分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-21',
    works: [
      {
        name: 'NWスペシャリスト',
        content: '試験日',
        start_time: '10:30',
        end_time: '16:30',
        time: '6時間0分',
        message: '',
      },
    ],
  },
  {
    work_day: '2024-04-22',
    works: [],
  },
  {
    work_day: '2024-04-23',
    works: [],
  },
  {
    work_day: '2024-04-24',
    works: [],
  },
  {
    work_day: '2024-04-25',
    works: [],
  },
  {
    work_day: '2024-04-26',
    works: [],
  },
  {
    work_day: '2024-04-27',
    works: [],
  },
  {
    work_day: '2024-04-28',
    works: [],
  },
  {
    work_day: '2024-04-29',
    works: [],
  },
  {
    work_day: '2024-04-30',
    works: [],
  },
  {
    work_day: '2024-05-01',
    works: [],
  },
  {
    work_day: '2024-05-02',
    works: [],
  },
  {
    work_day: '2024-05-03',
    works: [],
  },
  {
    work_day: '2024-05-04',
    works: [],
  },
  {
    work_day: '2024-05-05',
    works: [
      {
        name: '達人に学ぶDB設計徹底指南書',
        content: 'データベースを制する者はシステムを制す',
        start_time: '14:00',
        end_time: '15:00',
        time: '1時間0分',
        message: '',
      },
    ],
  },
]

export default mockWorkLog
