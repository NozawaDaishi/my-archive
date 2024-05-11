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

const navigateToExternalSite = (): void => {
  // window.location.href = 'https://nozawadaishi.github.io/private-my-archive/resume'
  window.location.href = 'http://localhost:5174/private-my-archive/resume'
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
      <div :class="classes.nav_wrapper">
        <nav :class="classes.nav">
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
        <div
          :class="classes.lock_icon"
          @click.prevent.stop="navigateToExternalSite()"
        >
          <img src="@/assets/lock.svg" />
        </div>
      </div>
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
    <footer>
      <nav :class="classes.nav">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :class="[classes.link, isActive(link.path) ? classes.active : '']"
          @click.stop.prevent="navigateTo(link.path)"
        >
          <span v-if="link.name === navLinks[0].name"
            ><img src="@/assets/home.svg"
          /></span>
          <span v-if="link.name === navLinks[1].name"
            ><img src="@/assets/book.svg"
          /></span>
          <span v-if="link.name === navLinks[2].name"
            ><img src="@/assets/hat.svg"
          /></span>
        </a>
        <span
          :class="classes.lock_icon"
          @click.prevent.stop="navigateToExternalSite()"
          ><img src="@/assets/lock.svg"
        /></span>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss" module="classes">
.wrapper {
  header {
    width: 100%;
    background-color: #2c3e50;
    padding: 10px;
    .title {
      color: white;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      padding: 50px 0 30px 0;
      cursor: pointer;
    }
    & .nav_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 10px;
      & .nav {
        position: relative;
        width: 300px;
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
        color: white;
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
      .lock_icon {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 30px;
        background-color: #34495e;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          width: 25px;
        }
      }
    }
  }
  .body {
    background-color: white;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
@media (max-width: 519px) {
  .wrapper {
    header {
      & .nav_wrapper {
        display: none;
      }
    }
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      background-color: #34495e;
      & .nav {
        border-radius: 8px;
      }
      a {
        line-height: 50px;
        width: calc(100vw / 4);
        display: inline-block;
        z-index: 1;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        color: white;
        cursor: pointer;
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
      .lock_icon {
        line-height: 50px;
        width: calc(100vw / 4);
        display: inline-block;
        text-align: center;
        cursor: pointer;
        img {
          width: 25px;
        }
      }
    }
  }
}
</style>
