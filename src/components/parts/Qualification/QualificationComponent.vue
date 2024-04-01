<script setup lang="ts">
import { onMounted } from 'vue'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'
import { useNavigation } from '@/composables/useNavigation'

const { navigateTo } = useNavigation()
const resumeStore = Stores.resume()
const { resumeData } = storeToRefs(resumeStore)
const { getResumeData } = resumeStore

onMounted(async () => {
  await getResumeData()
})
</script>

<template>
  <div :class="classes.qualificationComponent">
    <div v-if="resumeData" :class="classes.qualification">
      <h2 :class="classes.headline">保有資格</h2>
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
</template>

<style lang="scss" module="classes">
.qualificationComponent {
  .qualification {
    position: relative;
    .headline {
      font-family: 'Noto Sans JP', sans-serif;
      color: #002747;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
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
      white-space: nowrap;
      font-size: 14px;
      color: #777;
      .link {
        color: #0e7995;
        cursor: pointer;
      }
    }
  }
}
</style>
