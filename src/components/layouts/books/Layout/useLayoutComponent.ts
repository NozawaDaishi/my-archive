import { Book, Status } from '@/types/book'
import { computed, ComputedRef, onMounted } from 'vue'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'

interface UseLayoutComponentReturns {
  sortedBooks: ComputedRef<Book[]>
}

export default function useCalendarComponent(): UseLayoutComponentReturns {
  const bookStore = Stores.book()
  const { books } = storeToRefs(bookStore)
  const { getBooks } = bookStore

  onMounted(async () => {
    await getBooks()
  })

  // computedを使ってbooksをソートされた順にする
  const sortedBooks = computed(() => {
    // ステータスのソート順を日本語のステータス値に基づいて定義
    const statusOrder: { [key in Status]: number } = {
      [Status.Reading]: 1,
      [Status.Completed]: 2,
      [Status.Unread]: 3,
      [Status.ReReading]: 4,
      [Status.Paused]: 5,
      [Status.OnHold]: 6,
      [Status.Abandoned]: 7,
      [Status.Referencing]: 8,
    }
    return books.value.sort((a, b) => {
      return statusOrder[a.status] - statusOrder[b.status]
    })
  })
  return {
    sortedBooks,
  }
}
