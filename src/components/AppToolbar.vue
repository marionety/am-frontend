<template>
  <v-toolbar dark>
    <v-toolbar-items>
      <v-btn text v-for="item in items" :key="item.name" :to="item.to">{{ item.name }}</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import AppRoutes from "../plugins/router/AppRoutes";

export default {
  data: () => ({
    title: "Ambulance Manager",
  }),
  computed: {
    items() {
      return [
        { name: "Estado", to: AppRoutes.STATUS },
        { name: "Ambulancias", to: AppRoutes.AMBULANCES },
        { name: "Traslados", to: AppRoutes.JOURNEYS },
        { name: "Transferencias", to: AppRoutes.TRANSFERS },
        { name: "Localizar", to: AppRoutes.LOCATIONS },
      ];
    },
  },
};
</script>
