<template>
  <v-row dense>
    <v-col cols="3" v-for="ambulance in ambulances" :key="ambulance.id">
      <ambulance-card :id="ambulance.id" :seats="ambulance.seats" />
    </v-col>
  </v-row>
</template>

<script>
import AmbulanceCard from "@/components/ambulances/AmbulanceCard";

export default {
  components: {
    AmbulanceCard,
  },
  props: {
    ambulances: {
      type: Array,
      required: true,
    },
  },
};
</script>
