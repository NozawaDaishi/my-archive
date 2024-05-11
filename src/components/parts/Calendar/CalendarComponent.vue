<script setup lang="ts">
import useCalendar from '@/composables/useCalendar'

const {
  blankDays,
  changeMonth,
  currentMonth,
  currentYear,
  daysInMonth,
  focusDate,
  isFocus,
  isFocusedDateToday,
  isHoliday,
  isPastDate,
  isTodayInCurrentMonth,
  isToday,
  isNoBorder,
  isWork,
  months,
  resetToToday,
  totalWorkTimeForMonth,
  weekdays,
  workCountOnDay,
} = useCalendar()
</script>

<template>
  <div :class="classes.calendarComponent">
    <div :class="classes.header">
      <div :class="classes.headline">作業ログ</div>
      <div :class="classes.label">
        稼働時間｜<span :class="classes.data">{{ totalWorkTimeForMonth }}</span>
      </div>
    </div>
    <div :class="classes.wrapper">
      <div :class="classes.left">
        <button
          :class="classes.changeMonthBtn"
          @click.stop.prevent="changeMonth(-1)"
        >
          <img src="@/assets/chevron-left.svg" />
        </button>
        <span :class="classes.current"
          >{{ currentYear }}年{{ months[currentMonth] }}</span
        >
        <button
          :class="classes.changeMonthBtn"
          @click.stop.prevent="changeMonth(1)"
        >
          <img src="@/assets/chevron-right.svg" />
        </button>
      </div>
      <div :class="classes.right">
        <button
          :disabled="isFocusedDateToday"
          :class="classes.resetToTodayBtn"
          @click.stop.prevent="resetToToday"
        >
          今日
        </button>
      </div>
    </div>
    <div :class="classes.calendar">
      <div :class="classes.weekdays">
        <div
          v-for="weekday in weekdays"
          :key="weekday"
          :class="classes.weekday"
        >
          {{ weekday }}
        </div>
      </div>
      <div :class="classes.days">
        <div
          v-for="emptyDay in blankDays"
          :key="`empty-${emptyDay}`"
          :class="classes.day"
        ></div>
        <div
          v-for="day in Array.from({ length: daysInMonth }, (_, i) => i + 1)"
          :key="'day-' + day"
          :class="[
            classes.day,
            {
              [classes.today]: isToday(day),
            },
            { [classes.past]: isPastDate(day) },
            {
              [classes.holiday]: isHoliday(day),
            },
            {
              [classes.focus]: isFocus(day),
            },
            {
              [classes.noBorder]: isNoBorder(day),
            },
          ]"
          @click.stop.prevent="focusDate(day)"
        >
          <span :class="classes.dayText">{{ day }}</span>
          <span
            v-if="isTodayInCurrentMonth && day === new Date().getDate()"
            :class="classes.todayMarker"
          ></span>
          <span v-if="isHoliday(day)" :class="classes.holidayMarker">祝</span>
          <span v-if="isWork(day)" :class="classes.workMarker">{{
            workCountOnDay(day)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.calendarComponent {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headline {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 20px;
      font-weight: bold;
      color: #002747;
      margin-left: 20px;
    }
    .label {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 14px;
      color: #787979;
      .data {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: bold;
        color: #002747;
      }
    }
  }
  .wrapper {
    grid-column: span 7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18px;
    button {
      cursor: pointer;
    }
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      .current {
        margin: 0 10px;
      }
      .changeMonthBtn {
        width: 40px;
        height: 40px;
        text-align: center;
        color: #002747;
        img {
          width: 22px;
          height: 22px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      .resetToTodayBtn {
        width: 80px;
        height: 40px;
        text-align: center;
        border-radius: 4px;
        font-weight: bold;
        color: white;
        background-color: rgba(229, 157, 44, 0.6);
        &:disabled {
          background-color: rgba(229, 157, 44, 0.3);
        }
      }
    }
  }
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0;
    .weekdays {
      display: contents;
      font-family: 'Noto Sans JP', sans-serif;
      .weekday {
        padding: 3px 17px;
        text-align: center;
        border-bottom: 1px solid #dedede;
        &:nth-child(1) {
          color: #c76565;
        }
        &:nth-child(7) {
          color: #4e75ba;
        }
      }
    }
    .days {
      display: contents;
      font-family: 'Roboto', sans-serif;
      .day {
        position: relative;
        padding: 8px 0;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        border-bottom: 1px solid #dedede;
        cursor: pointer;
        &:nth-child(7n + 1) {
          background-color: rgba(199, 101, 101, 0.05);
        }
        &:nth-child(7n) {
          background-color: rgba(78, 117, 186, 0.05);
        }
        &.today {
          color: rgba(251, 241, 232, 1);
        }
        &.past {
          color: rgba(195, 195, 195, 1);
        }
        &.holiday {
          background-color: rgba(199, 101, 101, 0.05);
        }
        &.focus {
          outline: 2px solid rgba(14, 121, 149, 1);
          outline-offset: -1.5px;
          z-index: 10;
        }
        .todayMarker {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(14, 121, 149, 1);
        }
        .holidayMarker {
          position: absolute;
          top: 2px;
          right: 2px;
          font-size: 10px;
          color: rgba(199, 101, 101, 1);
          z-index: 9;
        }
        .workMarker {
          position: absolute;
          bottom: 1px;
          right: 1px;
          padding: 0.1px 4px;
          border-radius: 100%;
          background-color: rgba(53, 162, 169, 0.3);
          font-size: 9px;
          color: rgba(53, 162, 169, 1);
          z-index: 9;
        }
      }
      .noBorder {
        border-bottom: none !important;
      }
      .dayText {
        position: relative;
        z-index: 9;
      }
    }
  }
}
</style>
