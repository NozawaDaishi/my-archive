<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
import { navLinks } from '@/constants/navigationPath'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'
import { useNavigation } from '@/composables/useNavigation'
import { useRoute } from 'vue-router'

const headerStore = Stores.header()
const { headerRef, headerHeight } = storeToRefs(headerStore)
const { navigateTo } = useNavigation()
const route = useRoute()

const isActive = (path: string): boolean => {
  return route.path === path
}

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
          v-for="(link, index) in navLinks"
          :key="index"
          :class="[classes.link, isActive(link.path) ? classes.active : '']"
          @click.stop.prevent="navigateTo(link.path)"
        >
          {{ link.name }}
        </a>
        <div :class="classes.animation"></div>
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
  header {
    width: 100%;
    background-color: #2c3e50;
    padding: 10px;
    .title {
      color: #fbf1e8;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      padding: 50px 0 30px 0;
      cursor: pointer;
    }
    nav {
      margin: 0 auto 30px;
      position: relative;
      width: 500px;
      height: 50px;
      background-color: #34495e;
      border-radius: 8px;
      font-size: 0;
      .animation {
        position: absolute;
        height: 100%;
        top: 0;
        z-index: 0;
        transition: all 0.5s ease 0s;
        border-radius: 8px;
      }
    }
    a {
      line-height: 50px;
      height: 100%;
      width: 100px;
      font-size: 15px;
      display: inline-block;
      position: relative;
      z-index: 1;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      color: #fbf1e8;
      cursor: pointer;
      &:nth-child(1):hover ~ .animation {
        width: 100px;
        left: 0;
        background-color: #1abc9c;
      }
      &:nth-child(2):hover ~ .animation {
        width: 100px;
        left: 100px;
        background-color: #e74c3c;
      }
      &:nth-child(3):hover ~ .animation {
        width: 100px;
        left: 200px;
        background-color: #3498db;
      }
      &:nth-child(4):hover ~ .animation {
        width: 100px;
        left: 300px;
        background-color: #9b59b6;
      }
      &:nth-child(5):hover ~ .animation {
        width: 100px;
        left: 400px;
        background-color: #e67e22;
      }
      &:nth-child(1).active {
        background-color: #1abc9c;
        border-radius: 8px;
      }
      &:nth-child(2).active {
        background-color: #e74c3c;
        border-radius: 8px;
      }
      &:nth-child(3).active {
        background-color: #3498db;
        border-radius: 8px;
      }
      &:nth-child(4).active {
        background-color: #9b59b6;
        border-radius: 8px;
      }
      &:nth-child(5).active {
        background-color: #e67e22;
        border-radius: 8px;
      }
    }
  }
  .body {
    background-color: #fbf1e8;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
@/stores/modules/useHeaderStore
