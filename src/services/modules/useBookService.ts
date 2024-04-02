import { Book } from '@/types/book'
import mockBooksData from '@/mocks/booksData'

type FuncType = {
  fetchBooks: () => Promise<Book[]>
}

export default function useBookService(): FuncType {
  const fetchBooks = async (): Promise<Book[]> => {
    try {
      const data = mockBooksData
      return data
    } catch {
      throw new Error('エラーが発生しました。')
    }
  }
  return {
    fetchBooks,
  }
}
