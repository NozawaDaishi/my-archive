<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useNavigation } from '@/composables/useNavigation'
import WorkHistoryComponents from '@/pages/work-history/components/WorkHistoryComponents.vue'

const { goBack } = useNavigation()

const isAuthenticated = ref(false)
const showModal = ref(true)
const authData = reactive({
  id: '',
  password: '',
})

const checkAuthentication = async (): Promise<void> => {
  const authHeader = `Basic ${btoa(`${authData.id}:${authData.password}`)}`
  const url = 'https://basic-authentication.nozanoza127.workers.dev'
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: authHeader,
      }),
      mode: 'cors',
    })

    if (response.ok) {
      isAuthenticated.value = true
      showModal.value = false
    } else {
      alert('IDまたはパスワードが間違っています。')
      isAuthenticated.value = false
    }
  } catch (error) {
    console.error('Error fetching authentication status:', error)
    isAuthenticated.value = false
  }
}

const submitAuth = (event: Event): void => {
  event.preventDefault()
  checkAuthentication()
}
</script>

<template>
  <div>
    <div v-if="isAuthenticated">
      <WorkHistoryComponents />
    </div>
    <div v-else>
      <div v-if="showModal" :class="classes.overlay">
        <div :class="classes.content">
          <div :class="classes.header" @click.prevent.stop="goBack()">
            <img src="@/assets/chevron-left.svg" />戻る
          </div>
          <form @submit="submitAuth">
            <div :class="classes.formGroup">
              <label for="id">ID:</label>
              <input
                id="id"
                v-model="authData.id"
                type="text"
                required
                autocomplete="current-username"
              />
            </div>
            <div :class="classes.formGroup">
              <label for="password">Password:</label>
              <input
                id="password"
                v-model="authData.password"
                type="password"
                required
                autocomplete="current-password"
              />
            </div>
            <button :class="classes.loginBtn" type="submit">Login</button>
          </form>
        </div>
      </div>
      <div v-else>認証エラー</div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.overlay {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans JP', sans-serif;
  .content {
    width: 50%;
    height: 30%;
    background-color: white;
    border-radius: 5px;
    .header {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-left: 1rem;
      color: #2c3e50;
      cursor: pointer;
      img {
        height: 18px;
        margin-right: 0.5rem;
      }
    }
    form {
      z-index: 100;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #2c3e50;
      .formGroup {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        font-size: 16px;
        input {
          width: 25vw;
          border: 1px solid lightgray;
          border-radius: 2px;
        }
      }
      .loginBtn {
        width: 35%;
        padding: 5px 0;
        text-align: center;
        border-radius: 5px;
        background-color: #2c3e50;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
      }
    }
  }
}
@media (max-width: 899px) {
  .overlay {
    .content {
      width: 80%;
      form {
        .formGroup {
          input {
            width: 100%;
          }
        }
        .loginBtn {
          width: 100%;
        }
      }
    }
  }
}
</style>
