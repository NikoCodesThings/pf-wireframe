<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card id="welcome" elevation="2" outlined class="mx-auto">
          <v-card-title class="justify-center">Welcome</v-card-title>
          <v-img id="python" class="mx-auto" contain max-width="600" src="@/assets/welcome.png"></v-img>
          <v-card-actions class="mx-auto">
            <v-spacer/>
            <router-link to="/login">
              <v-btn type="button" color="primary" elevation="2" class="test-button">Click Here to Login</v-btn>
            </router-link>
            <router-link to="/404">
              <v-btn type="button" color="primary" elevation="2" class="test-button">Sample 404</v-btn>
            </router-link>
            <v-spacer/>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
<style lang="scss">
#welcome{
  text-align: center;
  align-content: center;
}
#python{
  padding: 10px;
}
.test-button{
  margin: 0 20px;
}

</style>
