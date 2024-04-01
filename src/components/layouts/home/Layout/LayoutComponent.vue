<script setup lang="ts">
import BasicInformationComponent from '@/components/parts/BasicInformation/BasicInformationComponent.vue'
import CalendarComponent from '@/components/parts/Calendar/CalendarComponent.vue'
import FocusedDateComponent from '@/components/parts/FocusedDate/FocusedDateComponent.vue'
import QualificationComponent from '@/components/parts/Qualification/QualificationComponent.vue'
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md">
        <BasicInformationComponent />
      </div>
      <div class="col-md">
        <QualificationComponent />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col">
        <CalendarComponent />
        <div class="mt-5 mb-5"><FocusedDateComponent /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes"></style>
