import { Book } from '@/types/book'
import { defineStore } from 'pinia'
import { Services } from '@/services'

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
        books: await Services.book.fetchBooks(),
      })
    },
  },
})

export default useBookStore
