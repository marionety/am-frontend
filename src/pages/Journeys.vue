<template>
  <form-card
    :title="title"
    :loading="loading"
    @validateForm="saveJourney()"
    ref="formCardJourneys"
    lazy-validation
  >
    <v-row class="d-flex align-center justify-center">
      <v-col cols="4">
        <numeric-field v-model="groupId" label="ID de grupo" />
      </v-col>
      <v-col cols="4">
        <numeric-field v-model="people" label="Pacientes" />
      </v-col>
    </v-row>
    <p class="text-center caption red--text" v-if="error">{{ error }}</p>
    <p class="text-center caption" v-else-if="correct">Petición procesada correctamente</p>
  </form-card>
</template>

<script>
import FormCard from "@/components/shared/FormCard";
import NumericField from "@/components/shared/NumericField";
import journeysService from "../services/JourneysService";

export default {
  components: {
    FormCard,
    NumericField,
  },
  data: () => ({
    title: "Trasladar grupo de pacientes",
    loading: false,
    groupId: null,
    people: null,
    error: null,
    correct: false,
  }),
  methods: {
    async saveJourney() {
      const journey={ id: this.groupId, people: this.people };
      this.loading=true;
      this.error=null;

      try {
        this.correct=false;
        await journeysService.save(journey);
        this.$refs.formCardJourneys.resetForm();
      } catch (error) {
        this.error=error;
      } finally {
        this.loading=false;
        this.correct=true;
      }
    },
  },
};
</script>
