<template>
  <div>
    <AppNav />
    <v-container>
      <AppEditarDeletarContato />
    </v-container>
  </div>
</template>

<script>
import AppNav from "../../components/AppNav";
import AppEditarDeletarContato from "../../components/Contato/AppEditarDeletarContato";
export default {
  components: {
    AppNav,
    AppEditarDeletarContato,
  },
};
</script>
