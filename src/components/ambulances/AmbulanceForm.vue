<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="3">
        <numeric-field v-model="seats" min="6" max="8" label="Asientos" />
      </v-col>
      <v-col cols="3" class="d-flex">
        <v-btn :disabled="!valid || loading" @click="addAmbulance()">Añadir ambulancia</v-btn>
        <v-btn
          :loading="loading"
          @click="$emit('saveAmbulances')"
          v-if="isAmbulances"
          class="ml-2"
        >Guardar</v-btn>
        <v-btn v-if="isAmbulances" @click="cleanAmbulances()">Borrar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import NumericField from "@/components/shared/NumericField";

export default {
  components: {
    NumericField,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    isAmbulances: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    valid: true,
    seats: null,
  }),
  methods: {
    addAmbulance() {
      if (this.$refs.form.validate()) {
        this.$emit("addAmbulance", { seats: parseInt(this.seats) });
        this.$refs.form.reset();
      }
    },
    cleanAmbulances() {
      this.$emit("cleanAmbulances");
      this.$refs.form.reset();
    }
  },
};
</script>
