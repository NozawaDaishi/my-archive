// 日付を指定のフォーマットに変換する関数
export function formatDate(
  date: Date,
  format: string
): string {
  // インデックスシグネチャを持つmapオブジェクトの定義
  const map: { [key: string]: string } = {
    yyyy: date.getFullYear().toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    dd: date.getDate().toString().padStart(2, '0'),
  }

  // 正規表現の置換でmapから値を取得
  return format.replace(
    /yyyy|MM|dd/g,
    (matched) => map[matched]
  )
}
