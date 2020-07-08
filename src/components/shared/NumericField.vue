<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    @click="$emit('click', $event)"
    :label="label"
    :min="min"
    :max="max"
    required
    :rules="[
      (v) => !!v || `${label} es requerido`,
      (v) => isNumeric(v) || `${label} debe de ser numérico`,
      (v) => isPositive(v) || `${label} debe de ser mayor que cero`,
      (v) => isBetween(v, min, max) || `${label} debe estar comprendido entre ${min} y ${max}`,
    ]"
  />
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    min: {
      required: false,
      default: -1,
    },
    max: {
      required: false,
      default: -1,
    }
  },
  methods: {
    isNumeric(value) {
      return Number.isInteger(parseInt(value));
    },
    isPositive(value) {
      return value>0;
    },
    isBetween(value, min, max) {
      if ((min==-1)&&(max==-1))
        return true;
      else
        return (value>=min)&&(value<=max);
    }
  },
};
</script>
