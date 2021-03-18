<template>
  <div>
    <AppNav />
    <v-container>
      <AppPesquisarContato />
    </v-container>
  </div>
</template>

<script>
import AppNav from "../../components/AppNav";
import AppPesquisarContato from "../../components/Contato/AppPesquisarContato";
export default {
  components: {
    AppNav,
    AppPesquisarContato,
  },
};
</script>
