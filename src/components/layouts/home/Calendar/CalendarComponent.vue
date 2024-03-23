<script setup lang="ts">
import { useCalendarComponent } from './useCalendarComponent'

const {
  currentMonth,
  currentYear,
  focusedDate,
  months,
  weekdays,
  daysInMonth,
  blankDays,
  isTodayInCurrentMonth,
  weeksInMonth,
  isLastWeeks,
  isPastDate,
  isHoliday,
  changeMonth,
  resetToToday,
  focusDate,
} = useCalendarComponent()
</script>

<template>
  <div :class="classes.calendarComponent">
    <div :class="classes.calendar">
      <div :class="classes.header">
        <button :class="classes.changeMonthBtn" @click="changeMonth(-1)">
          ＜
        </button>
        <span>{{ currentYear }}年{{ months[currentMonth] }}</span>
        <button :class="classes.changeMonthBtn" @click="changeMonth(1)">
          ＞
        </button>
        <button :class="classes.calendarBtn">
          <img src="@/assets/calendar.svg" />
        </button>
        <button :class="classes.resetToTodayBtn" @click="resetToToday">
          今日
        </button>
      </div>
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
              [classes.today]:
                isTodayInCurrentMonth && day === new Date().getDate(),
            },
            { [classes.past]: isPastDate(day) },
            {
              [classes.holiday]: isHoliday(
                new Date(currentYear, currentMonth, day)
              ),
            },
            {
              [classes.focus]:
                day === focusedDate.getDate() &&
                currentMonth === focusedDate.getMonth() &&
                currentYear === focusedDate.getFullYear(),
            },
            {
              [classes.noBorder]:
                isLastWeeks && blankDays.length + day > weeksInMonth * 7 - 7,
            },
          ]"
          @click="focusDate(day)"
        >
          <span :class="classes.dayText">{{ day }}</span>
        </div>
      </div>
    </div>
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
      <!-- <div :class="classes.label">確定</div> -->
    </div>
    <!-- <div :class="classes.focusedDateInfo">
      <div :class="classes.wrapper">
        <div :class="classes.label">シフト時間</div>
        <div :class="classes.data">17:00~22:00（5時間）</div>
      </div>
      <div :class="classes.wrapper">
        <div :class="classes.label">出勤店舗</div>
        <div :class="classes.data">ダミーダミーダミー店</div>
      </div>
      <div :class="classes.wrapper">
        <div :class="classes.label">役割</div>
        <div :class="classes.data">ホール</div>
      </div>
      <div :class="classes.wrapper">
        <div :class="classes.label">見込給与</div>
        <div :class="classes.data">¥12,345,678</div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" module="classes">
.calendarComponent {
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0;
    margin: 0 10px 10px;
    .header {
      grid-column: span 7;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 18px;
      margin: 10px;
      button {
        cursor: pointer;
        &.changeMonthBtn {
          width: 40px;
          height: 40px;
          text-align: center;
        }
        &.calendarBtn {
          width: 40px;
          height: 40px;
          text-align: center;
          border: 1px solid #dedede;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.5);
        }
        &.resetToTodayBtn {
          width: 80px;
          height: 40px;
          text-align: center;
          border: 1px solid #dedede;
          border-radius: 4px;
          font-weight: bold;
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
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
          background-color: rgba(229, 157, 44, 0.2);
        }
        &:nth-child(7n) {
          background-color: rgba(14, 121, 149, 0.2);
        }
        &.today {
          color: white;
          &::after {
            content: '';
            position: absolute;
            z-index: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: rgba(78, 117, 186, 1);
          }
          color: white;
        }
        &.past {
          color: rgba(195, 195, 195, 1);
        }
        &.holiday {
          background-color: rgba(229, 157, 44, 0.2);
          &:after {
            content: '祝';
            position: absolute;
            top: 2px;
            right: 4px;
            font-size: 10px;
            color: rgba(199, 101, 101, 1);
            z-index: 8;
          }
        }
        &.focus {
          outline: 2px solid rgba(78, 117, 186, 1);
          outline-offset: -1.5px;
          z-index: 10;
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
  .focusedDateHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    border-radius: 4px;
    margin: 0 10px;
    padding: 0 10px;
    height: 42px;
    .focusedDate {
      color: #fbf1e8;
      .robotoFont {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
      }
      .notoFont {
        font-family: 'Noto Sans JP', sans-serif;
      }
    }
    .label {
      width: 70px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #60bc99;
      border-radius: 15px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  .focusedDateInfo {
    margin: 10px;
    .wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .label {
        width: 90px;
        height: 24px;
        border-radius: 4px;
        font-size: 14px;
        font-family: 'Noto Sans JP', sans-serif;
        color: #4e75ba;
        background-color: #5482d340;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }
      .data {
        font-size: 16px;
        font-family: 'Noto Sans JP', sans-serif;
      }
    }
  }
}
</style>
