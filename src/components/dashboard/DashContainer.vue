<template>
  <v-container>
    <v-card>
      <v-tabs>
        <v-tab> Account </v-tab>
        <v-tab> Campaign </v-tab>
        <v-tab> Characters </v-tab>
        <v-tab-item>
          <v-container grid-list-xs>
            <v-row>
              <v-col>
                <UnderConstruction />
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container grid-list-xs>
            <v-row>
              <v-col>
                <UnderConstruction />
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container grid-list-xs>
            <v-row>
              <v-col>
                <DashCharList />
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import UnderConstruction from "@/components/misc/UnderConstruction";
import DashCharList from "@/components/dashboard/DashCharList";

export default {
  name: "DashContainer",
  components: {
    UnderConstruction,
    DashCharList
  },
};
</script>

<style>
</style>