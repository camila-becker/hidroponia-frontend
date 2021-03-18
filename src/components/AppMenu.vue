<template>
  <v-list dense nav>
    <v-list-item class="mt-4">
      <v-list-group class="nav-size">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="font-menu">
              Contatos
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/cadastrar-contato" class="link">
              <v-list-item-title class="text-button">
                Cadastrar
              </v-list-item-title>
            </router-link>
            <v-divider class="mt-2"></v-divider>
            <router-link to="/editar-deletar-contato" class="link">
              <v-list-item-title class="text-button mt-4">
                Editar / Deletar
              </v-list-item-title>
            </router-link>
            <v-divider class="mt-2"></v-divider>
            <router-link to="/pesquisar-contato" class="link">
              <v-list-item-title class="text-button mt-4">
                Pesquisar
              </v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list-item>
    <v-list-item link class="mb-5 mt-5">
      <v-list-group class="nav-size">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="font-menu">
              Produtor
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/cadastrar-produtor" class="link">
              <v-list-item-title class="text-button">
                Cadastrar
              </v-list-item-title>
            </router-link>
            <v-divider class="mt-2"></v-divider>
            <router-link to="/editar-deletar-produtor" class="link">
              <v-list-item-title class="text-button mt-4">
                Editar / Deletar
              </v-list-item-title>
            </router-link>
            <v-divider class="mt-2"></v-divider>
            <router-link to="/pesquisar-produtor" class="link">
              <v-list-item-title class="text-button mt-4">
                Pesquisar
              </v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "AppMenu",
  data: () => ({}),
};
</script>

<style scoped>
.nav-size {
  width: 100% !important;
}

.v-application a {
  color: #000;
}

.v-application .primary--text {
  color: #000 !important;
}

.font-menu {
  font-size: 1.2rem !important;
  text-transform: uppercase;
}

.mdi-chevron-down::before {
  margin: 0 !important;
}

.link {
  text-decoration: none;
}

.size {
  width: 100%;
}
</style>
