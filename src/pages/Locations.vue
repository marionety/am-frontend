<template>
  <form-card
    :title="title"
    :loading="loading"
    :buttonLabel="buttonLabel"
    @validateForm="locate()"
    ref="formCard"
  >
    <v-row class="d-flex align-center justify-center">
      <v-col cols="4">
        <numeric-field v-model="groupId" label="ID de grupo" @click="cleanMessage()" />
      </v-col>
    </v-row>
    <p v-if="error" class="text-center caption red--text">{{ error }}</p>
    <p v-else-if="ambulanceId > 0" class="text-center">
      Los pacientes del grupo {{ groupId }} viajan en la ambulancia
      {{ ambulanceId }}
    </p>
    <p
      v-else-if="fetchData && ambulanceId <= 0"
      class="text-center"
    >El grupo {{ groupId }} está esperando la asignación de una ambulancia</p>
  </form-card>
</template>

<script>
import FormCard from "@/components/shared/FormCard";
import NumericField from "@/components/shared/NumericField";
import locationsService from "../services/LocationsService";

export default {
  components: {
    FormCard,
    NumericField,
  },
  data: () => ({
    title: "Localizar ambulancia",
    buttonLabel: "Consultar",
    loading: false,
    error: null,
    fetchData: false,
    groupId: null,
    ambulanceId: 0,
  }),
  methods: {
    async locate() {
      this.loading=true;
      this.error=null;
      this.fetchData=true;
      this.ambulanceId=0;

      try {
        const ambulance=await locationsService.findByGroupId(this.groupId);

        if (ambulance.id>0) {
          this.ambulanceId=ambulance.id;
        }
        this.$refs.formCard.resetForm();
      } catch (error) {
        this.error=error;
      } finally {
        this.loading=false;
      }
    },
    cleanMessage() {
      this.loading=false;
      this.fetchData=false;
      this.ambulanceId=0;
      this.groupId=null;
      this.error=null;
    }
  },
};
</script>
