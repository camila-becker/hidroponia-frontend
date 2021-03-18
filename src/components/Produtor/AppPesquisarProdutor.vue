<template>
  <v-main>
    <v-row justify="center">
      <v-col cols="12">
        <v-card flat class="mx-5 mt-2">
          <v-card-title>
            <v-col cols="6">
              <v-text-field
                v-model="pesquisar"
                append-icon="mdi-magnify"
                label="Pesquisar"
                single-line
                hide-details=""
              ></v-text-field>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn color="#2c3e50" class="white--text" @click="iniciar">
                Recarregar
              </v-btn>
            </v-col>
          </v-card-title>
          <v-data-table
            :headers="headersPesquisar"
            :search="pesquisar"
            :items="produtores"
            :footer-props="{
              itemsPerPageText: 'Linhas por página',
              'items-per-page-options': [5, 10, 25, 50, 100],
            }"
            :items-per-page="5"
            sort-by="empresa"
            class="elevation-1"
            noDataText="Nenhum produtor encontrado!"
          >
            <template v-slot:top>
              <v-dialog v-model="dialogPesquisa" max-width="1500px">
                <v-card>
                  <v-card-text>
                    <v-card-text
                      class="d-flex justify-center body-1 font-weight-black"
                      >Informações da Empresa</v-card-text
                    >
                    <v-container>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.nomeFantasia"
                            label="Nome Fantasia"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.registro"
                            label="Registro"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.pais"
                            label="País"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            label="UF"
                            v-model="info.uf"
                            readonly
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.razaoSocial"
                            label="Razão Social"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.atividade"
                            label="Atividade"
                            readonly
                          ></v-text-field>
                          <v-text-field
                            label="Cidade"
                            v-model="info.cidade"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.endereco"
                            label="Endereço"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-card-text
                          class="d-flex justify-center body-1 font-weight-black"
                          >Informações da Contato</v-card-text
                        >
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">1</h4>
                          <v-text-field
                            v-model="info.nomeContato1"
                            label="Nome"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato1"
                            label="Contato"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular1"
                            label="Celular"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email1"
                            label="E-mail"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo1"
                            label="Cargo"
                            readonly
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">2</h4>
                          <v-text-field
                            v-model="info.nomeContato2"
                            label="Nome"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato2"
                            label="Contato"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular2"
                            label="Celular"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email2"
                            label="E-mail"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo2"
                            label="Cargo"
                            readonly
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">3</h4>
                          <v-text-field
                            v-model="info.nomeContato3"
                            label="Nome"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato3"
                            label="Contato"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular3"
                            label="Celular"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email3"
                            label="E-mail"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo3"
                            label="Cargo"
                            readonly
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">4</h4>
                          <v-text-field
                            v-model="info.nomeContato4"
                            label="Nome"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato4"
                            label="Contato"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular4"
                            label="Celular"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email4"
                            label="E-mail"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo4"
                            label="Cargo"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row class="mx-5 d-flex justify-center">
                        <v-card-text
                          class="d-flex justify-center body-1 font-weight-black"
                          >Informações da Registro</v-card-text
                        >
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-text-field
                            v-model="info.datasContato"
                            label="Datas de Contato"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.site"
                            label="Site"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.status"
                            label="Status"
                            readonly
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-textarea
                            v-model="info.registros"
                            label="Considerações e Registros"
                            height="118"
                            filled
                            readonly
                          ></v-textarea>
                        </v-col>
                      </v-row>

                      <v-row class="mx-5 d-flex justify-center">
                        <v-card-text
                          class="d-flex justify-center body-1 font-weight-black"
                          >Informações de Produtor</v-card-text
                        >
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-textarea
                            v-model="info.cultivares"
                            label="Cultivares"
                            height="118"
                            filled
                            readonly
                          ></v-textarea>
                        </v-col>
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-text-field
                            v-model="info.metodo"
                            label="Método de Cultivo"
                            readonly
                          ></v-text-field>
                          <v-text-field
                            v-model="info.outroMetodo"
                            label='Citar método caso método escolhido seja "Outro"'
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.areaFisica"
                            label="Área física total"
                            readonly
                          ></v-text-field>
                          <v-text-field
                            v-model="info.cultivoParalelo"
                            label="Tem outro sistema de cultivo paralelo"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.areaHidroponico"
                            label="Área de cultivo hidropônico"
                            readonly
                          ></v-text-field>
                          <v-text-field
                            v-model="info.migracao"
                            label="Migrou para hidroponia"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.volume"
                            label="Volume de produção total"
                            readonly
                          ></v-text-field>
                          <v-text-field
                            v-model="info.profissao"
                            label="Profissão anterior"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.localizacao"
                            label="Localização do cultivo"
                            readonly
                          ></v-text-field>
                          <v-text-field
                            v-model="info.movimentacao"
                            label="Movimentação financeira"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-row justify="center">
                    <v-card-actions>
                      <v-btn
                        color="#2c3e50"
                        class="white--text"
                        @click="closePesquisa"
                      >
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                </v-card>
              </v-dialog>
            </template>
            <template v-slot:[`item.visualizar`]="{ item }">
              <v-btn
                color="#A1C038"
                @click="pesquisarItem(item)"
                class="white--text"
                rounded
              >
                Visualizar
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import api from "../../service/api";
export default {
  name: "AppPesquisarProdutor",
  data() {
    return {
      dialog: false,
      dialogPesquisa: false,
      pesquisar: "",
      produtores: [],
      editedIndex: -1,
      headersPesquisar: [
        {
          text: "Nome",
          align: "center",
          sortable: false,
          value: "empresa",
        },
        {
          text: "Razão Social",
          align: "center",
          sortable: false,
          value: "razao_social",
        },
        {
          text: "Registro",
          align: "center",
          sortable: false,
          value: "registro",
        },
        {
          text: "País",
          align: "center",
          sortable: false,
          value: "pais",
        },
        {
          text: "Acão",
          value: "visualizar",
          sortable: false,
          align: "center",
        },
      ],
      info: {
        nomeFantasia: "",
        registro: "",
        cidade: "",
        uf: "",
        endereco: "",
        razaoSocial: "",
        atividade: "",
        nomeContato1: "",
        contato1: "",
        celular1: "",
        email1: "",
        cargo1: "",
        nomeContato2: "",
        contato2: "",
        celular2: "",
        email2: "",
        cargo2: "",
        nomeContato3: "",
        contato3: "",
        celular3: "",
        email3: "",
        cargo3: "",
        nomeContato4: "",
        contato4: "",
        celular4: "",
        email4: "",
        cargo4: "",
        datasContato: "",
        site: "",
        status: "",
        registros: "",
        cultivares: "",
        metodo: "",
        outroMetodo: "",
        areaFisica: "",
        cultivoParalelo: "",
        areaHidroponico: "",
        migracao: "",
        volume: "",
        profissao: "",
        localizacao: "",
        movimentacao: "",
      },
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  async created() {
    this.iniciar();
  },
  methods: {
    async iniciar() {
      const response = await api().get("produtores");
      this.produtores = response.data;
    },
    pesquisarItem(item) {
      this.editedIndex = this.produtores.indexOf(item);
      this.info = {
        nomeFantasia: item.empresa,
        registro: item.registro,
        pais: item.pais,
        cidade: item.cidade,
        uf: item.uf,
        endereco: item.endereco,
        razaoSocial: item.razao_social,
        atividade: item.atividade,
        nomeContato1: item.nome_1,
        contato1: item.contato_1,
        celular1: item.celular_1,
        email1: item.email_1,
        cargo1: item.cargo_1,
        nomeContato2: item.nome_2,
        contato2: item.contato_2,
        celular2: item.celular_2,
        email2: item.email_2,
        cargo2: item.cargo_2,
        nomeContato3: item.nome_3,
        contato3: item.contato_3,
        celular3: item.celular_3,
        email3: item.email_3,
        cargo3: item.cargo_3,
        nomeContato4: item.nome_4,
        contato4: item.contato_4,
        celular4: item.celular_4,
        email4: item.email_4,
        cargo4: item.cargo_4,
        datasContato: item.datas_contato,
        site: item.site,
        registros: item.consideracoes_registros,
        status: item.status,
        cultivares: item.cultivares,
        metodo: item.metodo_cultivo,
        outroMetodo: item.outro_metodo,
        areaFisica: item.area_fisica_total,
        cultivoParalelo: item.outro_cultivo_paralelo,
        areaHidroponico: item.area_hidroponica,
        migracao: item.migrou_para_hidroponia,
        volume: item.vol_producao_total,
        profissao: item.profissao_anterior,
        localizacao: item.localizacao,
        movimentacao: item.movimentacao_financeira,
      };
      this.dialogPesquisa = true;
    },
    closePesquisa() {
      this.dialogPesquisa = false;
    },
  },
};
</script>
