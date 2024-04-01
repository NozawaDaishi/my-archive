<script setup lang="ts">
import {
  DATE_FORMAT_YEAR_MONTH,
  DATE_FORMAT_YEAR_MONTH_DAY,
} from '@/constants/dateFormats'
import { formatDate } from '@/utils/formatDate'
import { onMounted } from 'vue'
import { Stores } from '@/stores'
import { storeToRefs } from 'pinia'

const resumeStore = Stores.resume()
const { resumeData } = storeToRefs(resumeStore)
const { getResumeData } = resumeStore

onMounted(async () => {
  await getResumeData()
})
</script>

<template>
  <div v-if="resumeData">
    <!-- 個人情報 -->
    <h2>個人情報</h2>
    <p>氏名: {{ resumeData.selfInformation.fullName }}</p>
    <p>ふりがな: {{ resumeData.selfInformation.furigana }}</p>
    <p>
      生年月日:
      {{
        formatDate(
          resumeData.selfInformation.birthDate,
          DATE_FORMAT_YEAR_MONTH_DAY
        )
      }}
    </p>
    <p>メールアドレス: {{ resumeData.selfInformation.email }}</p>
    <p>電話番号: {{ resumeData.selfInformation.phoneNumber }}</p>

    <!-- 学歴 -->
    <h2>学歴</h2>
    <ul>
      <li
        v-for="background in resumeData.academicBackground"
        :key="background.date.toString()"
      >
        {{ background.date }} - {{ background.content }} ({{
          background.status
        }})
      </li>
    </ul>

    <!-- 職歴 -->
    <h2>職歴</h2>
    <ul>
      <li
        v-for="experience in resumeData.workExperience"
        :key="experience.date.toString()"
      >
        {{ formatDate(experience.date, DATE_FORMAT_YEAR_MONTH) }}
        - {{ experience.content }} ({{ experience.status }})
      </li>
    </ul>

    <!-- 資格 -->
    <h2>資格</h2>
    <ul>
      <li
        v-for="qualification in resumeData.qualifications"
        :key="qualification.date.toString()"
      >
        {{ formatDate(qualification.date, DATE_FORMAT_YEAR_MONTH) }}
        - {{ qualification.content }} ({{ qualification.status }})
      </li>
    </ul>
  </div>
  <div v-else>データを取得中...</div>
</template>
