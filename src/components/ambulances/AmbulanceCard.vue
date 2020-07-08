<template>
  <v-card>
    <v-card-title>Ambulancia {{ id }}</v-card-title>
    <v-card-text>Asientos: {{ seats }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    valid: true,
  }),
};
</script>
