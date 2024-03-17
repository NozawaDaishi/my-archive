<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToBooks = (): void => {
  router.push('books')
}
</script>

<template>
  <a
    style="--clr: #7808d0"
    :class="classes.button"
    @click.stop.prevent="navigateToBooks"
  >
    <span :class="classes.button__icon_wrapper">
      <svg
        width="10"
        :class="classes.button__icon_svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 15"
      >
        <path
          fill="currentColor"
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        ></path>
      </svg>

      <svg
        :class="[
          classes.button__icon_svg,
          classes.button__icon_svg__copy,
        ]"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        fill="none"
        viewBox="0 0 14 15"
      >
        <path
          fill="currentColor"
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        ></path>
      </svg>
    </span>
    Go to Books
  </a>
</template>

<style lang="scss" module="classes">
.title {
  font-size: 24px;
}

.button {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--clr);
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s;
}

.button__icon_wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--clr);
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background-color: #000;
}

.button:hover .button__icon_wrapper {
  color: #000;
}

.button__icon_svg__copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon_svg:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon_svg__copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
}
</style>
