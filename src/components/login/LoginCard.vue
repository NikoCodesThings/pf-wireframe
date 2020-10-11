<template>
  <v-card cols="4">
    <v-card-title>Account Login</v-card-title>
    <v-container fluid>
      <v-row cols="12">
        <v-col offset="1">
          <v-text-field label="User Name" class="styled-input"/>
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col offset="1">
          <v-text-field label="Password" :type="'password'" class="styled-input"/>
        </v-col>
      </v-row>
      <v-row cols="12">
          <v-col offset="5">
              <v-btn type="button" color="primary" elevation="2">Login</v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {};
</script>
<style scoped>
.styled-input{
    max-width: 90%;
}
</style>