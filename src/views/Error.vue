<template>
  <v-container>
    <v-row>
      <v-col>
        <ErrorCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ErrorCard from "@/components/error/ErrorCard.vue";
export default {
  name: "Error",
  components: {
    ErrorCard,
  },
};
</script>