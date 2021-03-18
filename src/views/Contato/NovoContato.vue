<template>
  <div>
    <AppNav />
    <v-container>
      <AppCadastrarContato />
    </v-container>
  </div>
</template>

<script>
import AppNav from "../../components/AppNav";
import AppCadastrarContato from "../../components/Contato/AppCadastrarContato";
export default {
  components: {
    AppNav,
    AppCadastrarContato,
  },
};
</script>
