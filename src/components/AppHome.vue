<template>
  <v-app>
    <div>
      <AppNav />
      <v-row class="">
        <v-col cols="12" class="d-flex justify-center align-center size">
          <img src="../assets/logo.png" alt="" />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import AppNav from "./AppNav";
export default {
  name: "AppHome",
  components: {
    AppNav,
  },
};
</script>

<style scoped>
.size {
  height: 100vh;
  padding: 0;
}
</style>
