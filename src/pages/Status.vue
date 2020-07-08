<template>
  <v-card>
    <v-card-title>
      Estado del servicio
    </v-card-title>
    <v-card-text>
      <p v-if="loading">Obteniendo estado del servicio...</p>
      <p v-else-if="error" class="red--text">
        Ha ocurrido un error inesperado al consultar el estado del servicio
      </p>
      <p v-else-if="isReady">
        El servicio está preparado para recibir peticiones
      </p>
      <p v-else>
        El servicio no está iniciado
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import statusService from "../services/StatusService";

export default {
  data: () => ({
    loading: true,
    isReady: false,
    error: false,
  }),
  async created() {
    try {
      this.isReady = await statusService.isReady();
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>
