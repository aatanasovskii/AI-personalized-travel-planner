<template>
  <div class="sign-in-page">

    <sign-in
        class="before-submit"
        :submit-action="signIn"
    />

  </div>
</template>

<script>
import SignIn from "../components/auth/SignIn.vue";
export default {
  name: "SignInPage",
  components: {SignIn},
  data() {
    return {}
  },

  methods: {
    signIn(formData) {
      return this.$store.dispatch('auth/signIn', formData)
          .then(() => this.$router.push({name: 'HomePage'}))
          .catch(err => {
            console.error("err", err)
            throw err || {message: 'Wrong username or password'}
          })
    }
  }
}
</script>

<style lang="scss">
@import "SignInPage";
</style>
