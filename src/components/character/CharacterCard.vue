<template>
  <v-card>
    <v-card-title primary-title> Character Name Here </v-card-title>
    <v-container grid-list-xs>
      <v-row>
        <v-col>
          <v-tabs color="primary" slider-color="primary">
            <v-tab> Main Stats </v-tab>
            <v-tab> Skills </v-tab>
            <v-tab>Spells</v-tab>

            <v-tab-item><CharacterMainStats/></v-tab-item>
            <v-tab-item><UnderConstruction /></v-tab-item>
            <v-tab-item><UnderConstruction /></v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import UnderConstruction from "@/components/misc/UnderConstruction";
import CharacterMainStats from "@/components/character/CharacterMainStats";

export default {
  name: "CharacterCard",
  components: { UnderConstruction, CharacterMainStats },
};
</script>

<style>
</style>