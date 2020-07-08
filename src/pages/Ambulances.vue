<template>
  <v-sheet class="transparent">
    <h2>Ambulancias</h2>
    <ambulance-form
      :loading="loading"
      :isAmbulances="isAmbulances"
      @addAmbulance="addAmbulance($event)"
      @cleanAmbulances="cleanAmbulances()"
      @saveAmbulances="saveAmbulances()"
    />
    <p class="text-center caption red--text" v-if="error">{{ error }}</p>
    <p class="text-center" v-else-if="correct">Petición procesada correctamente</p>
    <ambulance-list :ambulances="ambulances" />
  </v-sheet>
</template>

<script>
import AmbulanceForm from "@/components/ambulances/AmbulanceForm";
import AmbulanceList from "@/components/ambulances/AmbulanceList";
import ambulancesService from "../services/AmbulancesService";

export default {
  components: {
    AmbulanceForm,
    AmbulanceList,
  },
  data: () => ({
    ambulances: [],
    loading: false,
    error: null,
    correct: false,
  }),
  computed: {
    isAmbulances() {
      return this.ambulances.length>0;
    },
  },
  methods: {
    getNextId() {
      return this.ambulances.length+1;
    },
    addAmbulance(ambulance) {
      this.correct=false;
      const nextId=this.getNextId();
      this.ambulances.push({ ...ambulance, id: nextId });
    },
    cleanAmbulances() {
      this.ambulances=[];
      this.error=null;
    },
    async saveAmbulances() {
      try {
        this.loading=true;
        this.error=null;
        await ambulancesService.save(this.ambulances);
      } catch (error) {
        this.error=error;
        this.correct=false;
      } finally {
        this.correct=true;
        this.loading=false;
      }
    },
  },
};
</script>
