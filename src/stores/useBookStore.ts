import { Book } from '@/types/book'
import { bookService } from '@/services'
import { defineStore } from 'pinia'

interface State {
  books: Book[]
}

const useBookStore = defineStore('useBookStore', {
  state: (): State => ({
    books: [],
  }),
  actions: {
    async getBooks() {
      this.$patch({
        books: await bookService.fetchBooks(),
      })
    },
  },
})

export default useBookStore
