<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="3" offset="1">
        <p>HIT POINTS</p>
      </v-col>
      <v-col cols="3">
        <p>SPEED</p>
      </v-col>
      <v-col cols="3">
        <p>AC</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" offset="1">
        <v-row>
          <p>STR:</p>
        </v-row>
        <v-row>
          <p>DEX</p>
        </v-row>
        <v-row>
          <p>CON</p>
        </v-row>
        <v-row>
          <p>WIS</p>
        </v-row>
        <v-row>
          <p>INT</p>
        </v-row>
        <v-row>
          <p>CHA</p>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row>
          <p>FORT</p>
        </v-row>
        <v-row>
          <p>REF</p>
        </v-row>
        <v-row>
          <p>WILL</p>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" offset="1">
        <p>BAB</p>
      </v-col>
      <v-col cols="3">
        <p>SPELL RESISTANCE</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" offset="1">
        <p>CMB</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" offset="1">
        <p>CMD</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CharacterMainStats",
};
</script>

<style>
</style>