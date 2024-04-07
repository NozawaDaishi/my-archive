import { Book, Status } from '@/types/book'

const mockBooksData: Book[] = [
  {
    name: 'Webを支える技術',
    ISBN: '978-4-7741-4204-3',
    countRead: 1,
    readingPeriod: ['2024年1月'],
    status: Status.Completed,
  },
  {
    name: 'プリンシプルオブプログラミング',
    ISBN: '978-4-7980-4614-3',
    countRead: 1,
    readingPeriod: ['2024年2月'],
    status: Status.Completed,
  },
  {
    name: 'フロントエンドの知識地図',
    ISBN: '978-4-297-13871-4',
    countRead: null,
    readingPeriod: ['2023年12月'],
    status: Status.Paused,
  },
  {
    name: '伝わる！動画テロップの作り方',
    ISBN: '978-4-7683-1867-6',
    countRead: 1,
    readingPeriod: ['2024年2月'],
    status: Status.Completed,
  },
  {
    name: 'ノンデザイナーズ・デザインブック[第4版]',
    ISBN: '978-4-8399-5555-7',
    countRead: null,
    readingPeriod: [''],
    status: Status.Referencing,
  },
  {
    name: '一気にビギナー卒業！動画でわかるAfter Effects教室',
    ISBN: '978-4-297-12369-7',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: 'Web API The Good Parts',
    ISBN: '978-4-7980-4614-3',
    countRead: null,
    readingPeriod: ['2024年3月~'],
    status: Status.Reading,
  },
  {
    name: 'ソフトウェアアーキテクチャの基礎',
    ISBN: '978-4-87311-982-3',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: '良いコード/悪いコードで学ぶ設計入門',
    ISBN: '978-4-297-12783-1',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: '達人に学ぶDB設計徹底指南書',
    ISBN: '978-4-7981-2470-4',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: '実装で学ぶフルスタックWeb開発',
    ISBN: '978-4-7981-2470-4',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: 'これからはじめるReact実践入門',
    ISBN: '978-4-8156-1948-0',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: 'Webデザイン良質見本帳',
    ISBN: '978-4-7973-8903-6',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
  {
    name: 'GitLabに学ぶ世界最先端のリモート組織のつくりかた',
    ISBN: '978-4-7981-7942-1',
    countRead: null,
    readingPeriod: [''],
    status: Status.Unread,
  },
]

export default mockBooksData
