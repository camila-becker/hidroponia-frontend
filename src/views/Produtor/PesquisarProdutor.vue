<template>
  <div>
    <AppNav />
    <v-container>
      <AppPesquisarProdutor />
    </v-container>
  </div>
</template>

<script>
import AppNav from "../../components/AppNav";
import AppPesquisarProdutor from "../../components/Produtor/AppPesquisarProdutor";
export default {
  components: {
    AppNav,
    AppPesquisarProdutor,
  },
};
</script>
