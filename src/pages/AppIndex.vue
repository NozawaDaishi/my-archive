<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigation'
import { useRoute } from 'vue-router'

const { navigateTo } = useNavigation()
const route = useRoute()

const isActive = (path: string): boolean => {
  return route.path === path
}
import { nextTick, onMounted, ref } from 'vue'

const headerRef = ref<HTMLElement | null>(null)
const headerHeight = ref(0)

onMounted(() => {
  nextTick(() => {
    if (headerRef.value) {
      headerHeight.value = headerRef.value.offsetHeight
    }
  })
})
</script>

<template>
  <div :class="classes.wrapper">
    <header ref="headerRef">
      <h1 :class="classes.title" @click.stop.prevent="navigateTo('/')">
        Archives of Daishi Nozawa
      </h1>
      <nav>
        <a
          :class="[classes.link, isActive('/') ? classes.active : '']"
          @click.stop.prevent="navigateTo('/')"
        >
          Home
        </a>
        <a
          :class="[classes.link, isActive('/books') ? classes.active : '']"
          @click.stop.prevent="navigateTo('books')"
        >
          Books
        </a>
        <a
          :class="[classes.link, isActive('/study') ? classes.active : '']"
          @click.stop.prevent="navigateTo('study')"
        >
          Study
        </a>
        <a
          :class="[classes.link, isActive('/resume') ? classes.active : '']"
          @click.stop.prevent="navigateTo('resume')"
        >
          履歴書
        </a>
        <a
          :class="[classes.link, isActive('/cv') ? classes.active : '']"
          @click.stop.prevent="navigateTo('cv')"
        >
          職務経歴書
        </a>
      </nav>
    </header>
    <div
      :class="classes.body"
      :style="{
        height: `calc(100vh - ${headerHeight}px)`,
        overflowY: 'auto',
      }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.wrapper {
  background-color: #fbf1e8;
  header {
    width: 100%;
    .title {
      color: #002747;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      padding: 30px 0 45px 0;
      cursor: pointer;
    }
    nav {
      display: flex;
      justify-content: space-around;
      .link {
        color: #002747;
        font-size: 14px;
        padding: 30px;
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        text-decoration: none;
        transition: all 0.3s;
        border-bottom: 1.5px solid #002747;
        &:hover {
          background-color: #35a2a9;
          color: #fbf1e8;
          border-bottom: 1.5px solid #35a2a9;
        }
        &.active {
          background-color: #0e7995;
          color: #fbf1e8;
          border-bottom: 1.5px solid #0e7995;
        }
      }
    }
  }
  .body {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
