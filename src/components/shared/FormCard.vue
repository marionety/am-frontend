<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <slot />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn :disabled="!valid" :loading="loading" @click="validateForm()">
        {{ buttonLabel }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    buttonLabel: {
      type: String,
      default: "Guardar",
    },
  },
  data: () => ({
    valid: true,
  }),
  methods: {
    validateForm() {
      if (this.$refs.form.validate()) {
        this.$emit("validateForm");
      }
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
