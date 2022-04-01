<template>
  <div class="container animated-background">
    <ul class="animated-background__shapes">
      <li /><li /><li /><li /><li /><li /><li /><li /><li /><li />
    </ul>

    <div class="login-card">
      <div class="login-card__title">
        Вход в профиль
      </div>

      <van-form
        class="login-card__form"
        @click="errorMessage = ''"
      >
        <van-field
          v-model="username"
          name="Логин"
          label="Логин"
          placeholder="username"
        />
        <van-field
          v-model="password"
          type="password"
          name="Password"
          label="Пароль"
          placeholder="******"
        />
      </van-form>

      <template v-if="errorMessage">
        <div class="login-card__error-text">
          {{ errorMessage }}
        </div>
      </template>

      <van-button
        class="login-card__button"
        type="primary"
        block
        round
        native-type="submit"
        @click="onEnterButton"
      >
        Войти
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions('auth', [
      'auth'
    ]),
    async onEnterButton () {
      const result = await this.auth({
        username: this.username,
        password: this.password
      })

      if (result) {
        this.errorMessage = ''
        this.$router.push('/admin')
      } else {
        this.errorMessage = 'Неверный логин или пароль'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: Fix path.
@import "../assets/styles/animated_background";
@import "../assets/styles/vars";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  position: relative;
  width: 90%;
  max-width: 400px;
  background: $white;
  border-radius: $border-radius;
  box-shadow: $box-shadow-strong;

  &__title {
    display: flex;
    justify-content: center;
    margin: 24px;
    margin-top: 28px;
    color: $text-color;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
  }

  &__form {
    width: calc(100% - 16px);
    margin: 8px;
  }

  &__button {
    width: calc(100% - 48px);
    margin: 24px;
  }

  &__error-text {
    margin-left: 24px;
    color: $red-dark;
    font-size: $font-size-sm;
  }
}
</style>
