<template>
  <div class="sign-in">

    <h3 class="title">Sign in</h3>

    <vi-form-builder
        class="dark"
        button-label="Sign in"
        :config="SignInForm"
        :submit-action="submitAction"
    />

  </div>
</template>

<script>
import {SignInForm} from "@/modules/auth/forms";

export default {
  name: "SignIn",
  props: {
    submitAction: {
      type: Function,
      required: true
    },
  },
  data() {
    return {
      SignInForm
    }
  }
}
</script>

<style lang="scss">
@import "SignIn";
</style>
