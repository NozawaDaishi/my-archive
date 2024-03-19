<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useBookStore from '@/stores/useBookStore'

const bookStore = useBookStore()
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
