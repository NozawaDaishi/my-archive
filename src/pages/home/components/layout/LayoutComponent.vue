<script setup lang="ts">
import BasicInformationComponent from '@/pages/home/components/parts/BasicInformationComponent.vue'
import CalendarComponent from '@/pages/home/components/parts/CalendarComponent.vue'
import CurrentGoalsComponent from '@/pages/home/components/parts/CurrentGoalsComponent.vue'
import FocusedDateComponent from '@/pages/home/components/parts/FocusedDateComponent.vue'
import QualificationComponent from '@/pages/home/components/parts/QualificationComponent.vue'
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-xl">
        <BasicInformationComponent />
      </div>
      <div class="col-xl">
        <CurrentGoalsComponent />
      </div>
    </div>
    <div class="row mt-5">
      <QualificationComponent />
    </div>
    <div class="row mt-5 mb-5">
      <div class="col mb-5">
        <CalendarComponent />
        <div class="mt-5 mb-5"><FocusedDateComponent /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes"></style>
