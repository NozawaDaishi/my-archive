<script setup lang="ts"></script>

<template>
  <div :class="classes.currentGoalsComponent">
    <div :class="classes.headline">
      現在の目標({{ new Date().getFullYear() }}年{{
        new Date().getMonth() + 1
      }}月{{ new Date().getDay() }}日時点)
    </div>
    <ul :class="classes.list">
      <li><span>ネットワークスペシャリスト(2024年04月21日 受験予定)</span></li>
      <li><span>データベーススペシャリスト(2024年10月 受験予定)</span></li>
      <li><span>TOEIC初受験</span></li>
    </ul>
  </div>
</template>

<style lang="scss" module="classes">
.currentGoalsComponent {
  .headline {
    color: #002747;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .list {
    border: 2px solid #0e7995;
    border-radius: 10px;
    list-style-type: disc;
    padding: 0 20px;
    li {
      color: #0e7995;
      margin: 30px;
      & span {
        color: #002747;
      }
    }
  }
}
</style>
