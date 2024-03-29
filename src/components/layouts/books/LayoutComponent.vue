<script setup lang="ts">
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'

const bookStore = Stores.book()
const { books } = storeToRefs(bookStore)
const { getBooks } = bookStore

getBooks()
</script>

<template>
  <ul>
    <li v-for="book in books" :key="book.ISBN">
      {{ book.name }}
    </li>
  </ul>
</template>
@/stores/modules/useBookStore
