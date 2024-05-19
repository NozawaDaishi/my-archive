import type { QualificationData } from '@/types/qualification'

export const mockQualificationData: QualificationData = {
  categories: [
    {
      name: '情報処理技術者試験',
      qualifications: [
        '経済産業省主催 基本情報技術者試験',
        '経済産業省主催 情報セキュリティマネジメント試験',
        '経済産業省主催 応用情報技術者試験',
        '経済産業省主催 情報処理安全確保支援士試験',
      ],
    },
    {
      name: '情報系資格',
      qualifications: [
        '文部科学省後援 情報検定 情報システム試験 システムエンジニア',
        'ORACLE MASTER Bronze 11g SQL基礎1',
        'オラクル認定 Javaプログラマ試験（Bronze SE7/8)',
      ],
    },
    {
      name: 'その他',
      qualifications: [
        '日本商工会議所 簿記検定試験 3級',
        'CG-ARTS協会 CGクリエイター検定 ベーシック',
      ],
    },
  ],
}
