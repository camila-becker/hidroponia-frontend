import Vue from "vue";
import Router from "vue-router";

import AppHome from "../components/AppHome";
import NovoContato from "../views/Contato/NovoContato";
import EditarDeletarContato from "../views/Contato/EditarDeletarContato";
import PesquisarContato from "../views/Contato/PesquisarContato";

import AppCadastrarProdutor from "../views/Produtor/NovoProdutor";
import EditarDeletarProdutor from "../views/Produtor/EditarDeletarProdutor";
import PesquisarProdutor from "../views/Produtor/PesquisarProdutor";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "home",
      },
    },
    {
      path: "/home",
      name: "home",
      component: AppHome,
    },
    {
      path: "/cadastrar-contato",
      name: "cadastrar-contato",
      component: NovoContato,
    },
    {
      path: "/editar-deletar-contato",
      name: "editar-deletar-contato",
      component: EditarDeletarContato,
    },
    {
      path: "/pesquisar-contato",
      name: "pesquisar-contato",
      component: PesquisarContato,
    },
    {
      path: "/cadastrar-produtor",
      name: "cadastrar-produtor",
      component: AppCadastrarProdutor,
    },
    {
      path: "/editar-deletar-produtor",
      name: "editar-deletar-produtor",
      component: EditarDeletarProdutor,
    },
    {
      path: "/pesquisar-produtor",
      name: "pesquisar-produtor",
      component: PesquisarProdutor,
    },
  ],
  mode: "history",
});
