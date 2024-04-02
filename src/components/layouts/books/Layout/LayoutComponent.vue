<script setup lang="ts">
import { Status } from '@/types/book'
import useLayoutComponent from '@/components/layouts/books/Layout/useLayoutComponent'

const { sortedBooks } = useLayoutComponent()
</script>

<template>
  <div class="container mt-5 mb-5">
    <h2 :class="classes.headline">読書ログ</h2>
    <table class="table table-hover mb-5">
      <thead>
        <tr>
          <th scope="col">書籍名</th>
          <th class="text-center text-nowrap" scope="col">ステータス</th>
          <th class="text-center text-nowrap" scope="col">読んだ回数</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="book in sortedBooks" :key="book.ISBN">
          <th scope="row">{{ book.name }}</th>
          <td class="text-center text-nowrap align-middle">
            <span
              v-if="book.status === Status.Reading"
              :class="[classes.label, classes.Reading]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.Completed"
              :class="[classes.label, classes.Completed]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.Unread"
              :class="[classes.label, classes.Unread]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.ReReading"
              :class="[classes.label, classes.ReReading]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.Paused"
              :class="[classes.label, classes.Paused]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.Abandoned"
              :class="[classes.label, classes.Abandoned]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.OnHold"
              :class="[classes.label, classes.OnHold]"
              >{{ book.status }}</span
            >
            <span
              v-if="book.status === Status.Referencing"
              :class="[classes.label, classes.Referencing]"
              >{{ book.status }}</span
            >
          </td>
          <td class="text-center align-middle">{{ book.countRead }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" module="classes">
.headline {
  color: #002747;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.label {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  border-radius: 4px;
  padding: 1px 8px;
  &.Reading {
    background-color: rgba(255, 215, 0, 0.4);
    color: rgb(255, 170, 0);
  }
  &.Completed {
    background-color: rgba(76, 175, 80, 0.5);
    color: rgb(64, 147, 67);
  }
  &.Unread {
    background-color: rgba(176, 196, 222, 0.5);
    color: rgb(93, 125, 168);
  }
  &.ReReading {
    background-color: rgba(255, 160, 122, 0.5);
    color: rgb(252, 134, 87);
  }
  &.Paused {
    background-color: rgba(244, 164, 96, 0.5);
    color: rgb(194, 77, 77);
  }
  &.Abandoned {
    background-color: rgba(211, 211, 211, 0.5);
    color: rgb(62, 62, 62);
  }
  &.OnHold {
    background-color: rgba(173, 216, 230, 0.5);
    color: rgb(84, 135, 152);
  }
  &.Referencing {
    background-color: rgba(255, 218, 185, 0.5);
    color: rgb(226, 120, 27);
  }
}
</style>
