<template>
  <v-list>
    <v-subheader>Current Characters</v-subheader>
    <v-list-item-group>
      <router-link class="character-link" to="/character">
        <v-list-item>Your Only Character (for now)</v-list-item>
      </router-link>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "DashCharList",
};
</script>

<style>
.character-link{
  text-decoration: none;
}
</style>