<script setup lang="ts">
import { onMounted } from 'vue'
import { Services } from '@/services'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'

const qualificationStore = Stores.qualification()
const { qualificationData } = storeToRefs(qualificationStore)
const { setQualificationData } = qualificationStore

onMounted(async () => {
  const response = await Services.qualification.fetchQualificationData()
  setQualificationData(response)
})
</script>

<template>
  <div v-if="qualificationData" :class="classes.qualificationComponent">
    <h2 :class="classes.headline">保有資格</h2>
    <div :class="classes.listWrapper">
      <ul
        v-for="category in qualificationData.categories"
        :key="category.toString()"
        :class="classes.list"
      >
        <p>{{ category.name }}</p>
        <li
          v-for="qualification in category.qualifications"
          :key="qualification.toString()"
        >
          <span>{{ qualification }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.qualificationComponent {
  position: relative;
  .headline {
    font-family: 'Noto Sans JP', sans-serif;
    color: #002747;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .listWrapper {
    border: 2px solid #0e7995;
    border-radius: 10px;
    .list {
      list-style-type: disc;
      margin: 20px 0 10px;
      padding: 0 20px;
      & p {
        color: #002747;
        font-weight: bold;
      }
      li {
        color: #0e7995;
        margin: 30px;
        & span {
          color: #002747;
        }
      }
    }
  }
}
</style>
