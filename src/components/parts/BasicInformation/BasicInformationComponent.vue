<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { calculateAge } from '@/utils/calculateAge'
import { DATE_FORMAT_YEAR_MONTH_DAY } from '@/constants/dateFormats'
import { formatDate } from '@/utils/formatDate'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'

const resumeStore = Stores.resume()
const { resumeData } = storeToRefs(resumeStore)
const { getResumeData } = resumeStore

const age = computed(() =>
  resumeData.value
    ? calculateAge(new Date(resumeData.value.selfInformation.birthDate))
    : 0
)

onMounted(async () => {
  await getResumeData()
})
</script>

<template>
  <div v-if="resumeData" :class="classes.basic_info">
    <h2 :class="classes.headline">基本情報</h2>
    <div class="row align-items-center">
      <div class="col">
        <table :class="classes.table">
          <tbody>
            <tr>
              <th>氏名</th>
              <td>{{ resumeData.selfInformation.fullName }}</td>
            </tr>
            <tr>
              <th>年齢</th>
              <td>{{ age }}歳</td>
            </tr>
            <tr>
              <th>生年月日</th>
              <td>
                {{
                  formatDate(
                    resumeData.selfInformation.birthDate,
                    DATE_FORMAT_YEAR_MONTH_DAY
                  )
                }}
              </td>
            </tr>
            <tr>
              <th>居住地</th>
              <td>{{ resumeData.selfInformation.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-xl p-3">
        <img class="img-fluid" src="/profile_img.jpg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.basic_info {
  .headline {
    color: #002747;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  // img {
  //   width: 300px;
  // }
  .table {
    display: flex;
    align-items: center;
    border-collapse: collapse;
    color: #002747;
    & td {
      padding: 1em 1.5em;
      min-width: 10em;
    }
    & th {
      padding: 1em 0;
      color: #0e7995;
      font-weight: bold;
      text-align: left;
      width: 10%;
      position: relative;
      min-width: 6em;
      &::after {
        content: '';
        background-color: #c1c7c6;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        width: 1px;
        height: 60%;
      }
    }
  }
}
</style>
