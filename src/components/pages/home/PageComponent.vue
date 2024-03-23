<script setup lang="ts">
import BasicInfoComponent from '@/components/layouts/home/BasicInfoComponent.vue'
import CalendarComponent from '@/components/layouts/home/Calendar/CalendarComponent.vue'
</script>

<template>
  <BasicInfoComponent />
  <CalendarComponent />
  <div :class="classes.task">
    <div :class="classes.task_wrapper"></div>
  </div>
  <div :class="classes.qualification">
    <div :class="classes.qualification_wrapper"></div>
  </div>
</template>

<style lang="scss" module="classes">
.calendar {
  width: 100%;
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 80%;
    height: 20vh;
    border: 1px solid #002747;
    background-color: white;
    margin: 50px 0;
  }
}
.task {
  width: 100%;
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 80%;
    height: 20vh;
    border: 1px solid #002747;
    background-color: white;
    margin: 50px 0;
  }
}
</style>
