<template>
  <div>
    <AppNav />
    <v-container>
      <AppEditarDeletarProdutor />
    </v-container>
  </div>
</template>

<script>
import AppNav from "../../components/AppNav";
import AppEditarDeletarProdutor from "../../components/Produtor/AppEditarDeletarProdutor";
export default {
  components: {
    AppNav,
    AppEditarDeletarProdutor,
  },
};
</script>
