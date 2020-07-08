<template>
  <v-app>
    <v-main class="grey lighten-5">
      <app-toolbar />
      <v-container fluid style="max-width: 800px">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppToolbar from "@/components/AppToolbar";

export default {
  name: "App",
  components: {
    AppToolbar,
  },
};
</script>
