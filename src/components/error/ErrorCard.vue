<template>
    <v-card>
        <v-card-title  class="justify-center">An Error Has Occured</v-card-title>
        <v-img id="error-img" class="mx-auto" contain max-width="600" src="@/assets/404.png"></v-img>
        <v-card-text id="error-card">
            <p class="text--primary">What did you think would happen?</p>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
  name: "ErrorCard",
  data: () => ({}),
};
</script>
<style scoped>
    #error-img{
        padding: 10px;
    }
    #error-card{
        text-align: center;
        align-content: center;
    }
</style>