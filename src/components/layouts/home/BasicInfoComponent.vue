<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { calculateAge } from '@/utils/calculateAge'
import { DATE_FORMAT_YEAR_MONTH_DAY } from '@/constants/dateFormats'
import { formatDate } from '@/utils/formatDate'
import { storeToRefs } from 'pinia'
import { useNavigation } from '@/composables/useNavigation'
import useResumeStore from '@/stores/useResumeStore'

const { navigateTo } = useNavigation()
const resumeStore = useResumeStore()
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
  <div v-if="resumeData" :class="classes.self_introduction">
    <div :class="classes.self_introduction_wrapper">
      <div :class="classes.basic_info">
        <h2 :class="classes.headline">基本情報</h2>
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
      <div :class="classes.h_space"></div>
      <div :class="classes.qualification">
        <h2 :class="classes.headline">資格</h2>
        <ul :class="classes.list">
          <li
            v-for="qualification in resumeData.qualifications"
            :key="qualification.date.toString()"
          >
            <span>{{ qualification.content }}</span>
          </li>
        </ul>
        <p :class="classes.description">
          ※詳細情報につきましては、
          <a :class="classes.link" @click.stop.prevent="navigateTo('resume')"
            >履歴書 </a
          >をご確認ください。
        </p>
      </div>
    </div>
  </div>
  <div v-else>データを取得中...</div>
</template>

<style lang="scss" module="classes">
.self_introduction {
  width: 100%;
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 80%;
    margin: 50px 0;
    .headline {
      color: #002747;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .basic_info {
      .table {
        border-collapse: collapse;
        width: 100%;
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
    .h_space {
      height: 50px;
    }
    .qualification {
      position: relative;
      .list {
        border: 2px solid #0e7995;
        border-radius: 10px;
        list-style-type: disc;
        margin: 20px 0 10px;
        padding: 0 20px;
        li {
          color: #0e7995;
          margin: 30px;
          & span {
            color: #002747;
          }
        }
      }
      .description {
        text-align: right;
        font-size: 14px;
        color: #777;
        .link {
          color: #0e7995;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
