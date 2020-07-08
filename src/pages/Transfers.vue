<template>
  <form-card :title="title" :loading="loading" @validateForm="saveTransfer()" ref="formCard">
    <v-row class="d-flex align-center justify-center">
      <v-col cols="4">
        <numeric-field v-model="groupId" label="ID de grupo" />
      </v-col>
    </v-row>
    <p class="text-center caption red--text" v-if="error">{{ error }}</p>
    <p class="text-center caption" v-else-if="correct">Petición procesada correctamente</p>
  </form-card>
</template>

<script>
import FormCard from "@/components/shared/FormCard";
import NumericField from "@/components/shared/NumericField";
import transfersService from "../services/TransfersService";

export default {
  components: {
    FormCard,
    NumericField,
  },
  data: () => ({
    title: "Transferir grupo de pacientes",
    loading: false,
    groupId: null,
    error: null,
    correct: false,
  }),
  methods: {
    async saveTransfer() {
      this.loading=true;
      this.error=null;

      try {
        await transfersService.save(this.groupId);
        this.$refs.formCard.resetForm();
        this.correct=false;
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
