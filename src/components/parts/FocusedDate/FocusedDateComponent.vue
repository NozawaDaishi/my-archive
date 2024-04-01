<script setup lang="ts">
import useCalendarComponent from '@/components/layouts/home/Layout/useCalendarComponent'

const { focusedDate, focusedWork, weekdays } = useCalendarComponent()
</script>

<template>
  <div :class="classes.focusedDateComponent">
    <div :class="classes.focusedDateHeader">
      <div :class="classes.focusedDate">
        <span :class="classes.robotoFont">{{
          (focusedDate.getMonth() + 1).toString().padStart(2, '0')
        }}</span
        ><span :class="classes.notoFont">月</span>
        <span :class="classes.robotoFont">{{
          focusedDate.getDate().toString().padStart(2, '0')
        }}</span
        ><span :class="classes.notoFont"
          >日({{ weekdays[focusedDate.getDay()] }})</span
        >
      </div>
    </div>
    <div v-if="focusedWork" :class="classes.focusedDateInfo">
      <div
        v-for="work in focusedWork.works"
        :key="work.start_time"
        :class="classes.work"
      >
        <div :class="classes.workName">{{ work.name }}</div>
        <div :class="classes.workDetail">
          <div :class="classes.label">
            内容｜<span :class="classes.data">{{ work.content }}</span>
          </div>
          <div :class="classes.label">
            時間｜<span :class="classes.data"
              >{{ work.start_time }}~{{ work.end_time }}({{ work.time }}）</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.focusedDateComponent {
  .focusedDateHeader {
    height: 42px;
    display: flex;
    align-items: center;
    background-color: #2c3e50;
    border-radius: 4px;
    padding: 0 10px;
    .focusedDate {
      color: white;
      .robotoFont {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
      }
      .notoFont {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 16px;
      }
    }
  }
  .focusedDateInfo {
    margin-top: 10px;
    .work {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      &Name {
        width: 300px;
        min-width: 150px;
        padding: 30px 0;
        text-align: center;
        font-family: 'Noto Sans JP', sans-serif;
        color: rgba(53, 162, 169, 1);
        background-color: rgba(53, 162, 169, 0.3);
        border-radius: 4px;
        margin-right: 10px;
      }
      &Detail {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .label {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 14px;
          color: #787979;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          .data {
            font-size: 16px;
            font-weight: bold;
            color: #002747;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
