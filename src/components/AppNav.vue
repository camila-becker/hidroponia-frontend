<template>
  <v-container>
    <v-app-bar app clipped-left color="#199738">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link to="/" class="link d-flex align-center">
        <span class="mr-3">Plataforma Hidroponia</span>
        <v-img src="../assets/logo2.png" width="50"></v-img>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer
      color="#BBFFCC"
      v-model="drawer"
      app
      clipped
      width="280"
    >
      <AppMenu :routes="router" class="mt-6" />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import router from "../router";
import AppMenu from "./AppMenu";
export default {
  name: "AppNav",
  components: {
    AppMenu,
  },
  data: () => ({
    drawer: true,
    router,
  }),
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #000;
}
span {
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
</style>
