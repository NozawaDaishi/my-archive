import { Book } from '@/types/book'
import { defineStore } from 'pinia'

interface State {
  books: Book[]
}

const useBookStore = defineStore('useBookStore', {
  state: (): State => ({
    books: [],
  }),
  actions: {
    // booksを追加
    setBooks(books: Book[]) {
      this.$patch({
        books,
      })
    },
  },
})

export default useBookStore
