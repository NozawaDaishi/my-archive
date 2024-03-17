<script setup lang="ts"></script>

<template>
  <div :class="classes.self_introduction">
    <div :class="classes.self_introduction_wrapper">
      <h2 :class="classes.headline">基本情報</h2>
      <table :class="classes.table">
        <tbody>
          <tr>
            <th>氏名</th>
            <td>野澤大士</td>
          </tr>
          <tr>
            <th>年齢</th>
            <td>26歳</td>
          </tr>
          <tr>
            <th>生年月日</th>
            <td>1998年1月27日</td>
          </tr>
          <tr>
            <th>居住地</th>
            <td>神奈川</td>
          </tr>
        </tbody>
      </table>
      <div :class="classes.h_space"></div>
      <h2 :class="classes.headline">資格</h2>
      <ul :class="classes.list">
        <li><span>情報セキュリティマネジメント</span></li>
        <li><span>基本情報技術者</span></li>
        <li><span>応用情報技術者試験</span></li>
        <li><span>情報処理安全確保支援士</span></li>
      </ul>
    </div>
  </div>
  <div :class="classes.calendar">
    <div :class="classes.calendar_wrapper"></div>
  </div>
  <div :class="classes.task">
    <div :class="classes.task_wrapper"></div>
  </div>
  <div :class="classes.qualification">
    <div :class="classes.qualification_wrapper"></div>
  </div>
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
    .table {
      border-collapse: collapse;
      width: 100%;
      color: #002747;
      & th {
        padding: 1em 0;
      }
      & td {
        padding: 1em 1.5em;
      }
      & th {
        color: #0e7995;
        font-weight: bold;
        text-align: left;
        width: 10%;
        position: relative;
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
    .h_space {
      height: 50px;
    }
    .list {
      border: 2px solid #0e7995;
      border-radius: 10px;
      list-style-type: disc;
      margin: 20px 0;
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
}
.calendar {
  width: 100%;
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 80%;
    height: 20vh;
    border: 1px solid #002747;
    background-color: white;
    margin: 50px 0;
  }
}
.task {
  width: 100%;
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 80%;
    height: 20vh;
    border: 1px solid #002747;
    background-color: white;
    margin: 50px 0;
  }
}
</style>
