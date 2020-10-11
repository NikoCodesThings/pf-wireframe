<template>
  <div id="app">
    <v-main>
      <v-app>
        <v-app-bar color="blue" dense dark app>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Pathfinder App</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>
        <v-main>
          <router-view />
        </v-main>
      </v-app>
    </v-main>
  </div>
</template>

<style lang="scss">
</style>
