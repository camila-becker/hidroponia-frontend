<template>
  <div>
    <AppNav />
    <v-container>
      <AppCadastrarProdutor />
    </v-container>
  </div>
</template>

<script>
import AppNav from "../../components/AppNav";
import AppCadastrarProdutor from "../../components/Produtor/AppCadastrarProdutor";
export default {
  components: {
    AppNav,
    AppCadastrarProdutor,
  },
};
</script>
