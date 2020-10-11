<template>
  <v-container>
    <v-row cols="12">
      <v-col cols="6" offset="3">
        <LoginCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginCard from "@/components/login/LoginCard";
export default {
  name: "Login",
  components: {
    LoginCard,
  },
};
</script>
<style lang="scss" scoped>
</style>