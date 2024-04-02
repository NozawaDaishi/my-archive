export interface Book {
  ISBN: string
  name: string
  countRead: number | null
  status: Status
}

export enum Status {
  Reading = '読書中', // 現在読んでいる途中の状態。
  Completed = '読了', // 最後まで読み終えた状態。
  Unread = '積読', // 購入したがまだ読み始めていない状態。
  ReReading = '再読', // 一度読み終えた後、再度読んでいる状態。
  Paused = '一時停止中', // 読み始めたが、何らかの理由で一時的に読むのをやめた状態。
  OnHold = '保留中', // 読みたいが、他の本を優先して読んでいる状態。
  Abandoned = '放棄', //  読み始めたが、途中で読むのを完全にやめた状態。
  Referencing = '参照用', // 特定の情報を探すために、部分的に読んでいる状態。
}
