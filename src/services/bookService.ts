import { Book } from '@/types/book'

type FuncType = {
  fetchBooks: () => Promise<Book[]>
}

export default function useBookService(): FuncType {
  const fetchBooks = async (): Promise<Book[]> => {
    try {
      const response = [
        {
          name: 'Webを支える技術',
          ISBN: '978-4-7741-4204-3',
        },
        {
          name: 'プリンシプルオブプログラミング',
          ISBN: '978-4-7980-4614-3',
        },
        {
          name: 'Web API The Good Parts',
          ISBN: '978-4-7980-4614-3',
        },
        {
          name: 'フロントエンドの知識地図',
          ISBN: '978-4-7980-4614-3',
        },
      ]
      return response
    } catch {
      throw new Error('エラーが発生しました。')
    }
  }
  return {
    fetchBooks,
  }
}
