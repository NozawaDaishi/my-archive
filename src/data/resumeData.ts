import { ResumeData } from '@/types/resume'

export const resumeMockData: ResumeData = {
  selfInformation: {
    fullName: '野澤 大士',
    furigana: 'のざわ だいし',
    birthDate: new Date('1998-01-27'),
    email: 'nozanoza127@gmail.com',
    phoneNumber: '070-4231-4149',
  },
  academicBackground: [
    {
      date: new Date('2017-04-01'),
      content: '北海道情報大学',
      status: '入学',
    },
    {
      date: new Date('2021-03-31'),
      content: '北海道情報大学',
      status: '卒業',
    },
  ],
  workExperience: [
    {
      date: new Date('2021-04-01'),
      content: '株式会社USEN-NEXT HOLDINGS',
      status: '入社',
    },
  ],
  qualifications: [
    {
      date: new Date('2017-12-01'),
      content: '日本商工会議所 簿記検定試験 3級',
      status: '合格',
    },
    {
      date: new Date('2018-05-01'),
      content: '経済産業省主催 基本情報技術者試験',
      status: '合格',
    },
    {
      date: new Date('2018-12-01'),
      content: '文部科学省後援 情報検定 情報システム試験 システムエンジニア',
      status: '認定',
    },
    {
      date: new Date('2019-02-01'),
      content: 'ORACLE MASTER Bronze 11g SQL基礎1',
      status: '合格',
    },
    {
      date: new Date('2019-07-01'),
      content: 'オラクル認定 Javaプログラマ試験（Bronze SE7/8)',
      status: '合格',
    },
    {
      date: new Date('2019-12-01'),
      content: 'CG-ARTS協会 CGクリエイター検定 ベーシック',
      status: '合格',
    },
    {
      date: new Date('2022-7-01'),
      content: '経済産業省主催 情報セキュリティマネジメント試験',
      status: '合格',
    },
    {
      date: new Date('2022-12-01'),
      content: '経済産業省主催 応用情報技術者試験',
      status: '合格',
    },
    {
      date: new Date('2023-06-01'),
      content: '経済産業省主催 情報処理安全確保支援士試験',
      status: '合格',
    },
  ],
}
