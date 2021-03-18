<template>
  <v-main>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mx-5 mt-2">
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
            :items="contatos"
            :footer-props="{
              itemsPerPageText: 'Linhas por página',
              'items-per-page-options': [5, 10, 25, 50, 100],
            }"
            :items-per-page="5"
            sort-by="empresa"
            class="elevation-1"
            noDataText="Nenhum contato encontrado!"
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
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-text-field
                            v-model="info.tipo"
                            label="Tipo"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.nome"
                            label="Nome"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.documento"
                            label="CPF ou CNPJ"
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

                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-text-field
                            v-model="info.dataNascimento"
                            label="Data de Nascimento"
                            v-mask="'##/##/####'"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.origem"
                            label="Origem"
                            readonly
                          ></v-text-field>

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
                            v-model="info.segmento"
                            label="Segmento"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.responsavel"
                            label="Responsável"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.atuacaoMercado"
                            label="Atuação de Mercado"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-card-text
                          class="d-flex justify-center body-1 font-weight-black"
                          >Informações de Contato</v-card-text
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
                            v-mask="'(##) ####-####'"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular1"
                            label="Celular"
                            v-mask="'(##) #####-####'"
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

                          <v-text-field
                            v-model="info.instagram1"
                            label="Instagram"
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
                            v-mask="'(##) ####-####'"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular2"
                            label="Celular"
                            v-mask="'(##) #####-####'"
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

                          <v-text-field
                            v-model="info.instagram2"
                            label="Instagram"
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
                            v-mask="'(##) ####-####'"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular3"
                            label="Celular"
                            v-mask="'(##) #####-####'"
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

                          <v-text-field
                            v-model="info.instagram3"
                            label="Instagram"
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
                            v-mask="'(##) ####-####'"
                            readonly
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular4"
                            label="Celular"
                            v-mask="'(##) #####-####'"
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

                          <v-text-field
                            v-model="info.instagram4"
                            label="Instagram"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-card-text
                          class="d-flex justify-center body-1 font-weight-black"
                          >Informações de Registro</v-card-text
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

                          <v-text-field
                            v-model="info.interesse"
                            label="Interesse"
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
  name: "AppPesquisarContato",
  data() {
    return {
      dialog: false,
      dialogPesquisa: false,
      contatos: [],
      pesquisar: "",
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
          text: "CPF/CNPJ",
          align: "center",
          sortable: false,
          value: "cpf_cnpj",
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
        tipoInteracao: "",
        tipo: "",
        nome: "",
        documento: "",
        cidade: "",
        uf: "",
        endereco: "",
        dataNascimento: "",
        origem: "",
        razaoSocial: "",
        atividade: "",
        segmento: "",
        responsavel: "",
        atuacaoMercado: "",
        nomeContato1: "",
        contato1: "",
        celular1: "",
        email1: "",
        cargo1: "",
        instagram1: "",
        nomeContato2: "",
        contato2: "",
        celular2: "",
        email2: "",
        cargo2: "",
        instagram2: "",
        nomeContato3: "",
        contato3: "",
        celular3: "",
        email3: "",
        cargo3: "",
        instagram3: "",
        nomeContato4: "",
        contato4: "",
        celular4: "",
        email4: "",
        cargo4: "",
        instagram4: "",
        datasContato: "",
        site: "",
        interesse: "",
        status: "",
        registros: "",
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
      const response = await api().get("contatos");
      this.contatos = response.data;
    },
    pesquisarItem(item) {
      this.editedIndex = this.contatos.indexOf(item);
      this.info = {
        tipoInteracao: item.tipo_interacao,
        tipo: item.tipo_pessoa,
        nome: item.empresa,
        documento: item.cpf_cnpj,
        pais: item.pais,
        cidade: item.cidade,
        uf: item.uf,
        endereco: item.endereco,
        dataNascimento: item.data_nascimento,
        origem: item.origem,
        razaoSocial: item.razao_social,
        atividade: item.atividade,
        segmento: item.segmento,
        responsavel: item.responsavel,
        atuacaoMercado: item.atuacao_mercado,
        nomeContato1: item.nome_1,
        contato1: item.contato_1,
        celular1: item.celular_1,
        email1: item.email_1,
        cargo1: item.cargo_1,
        instagram1: item.instagram_1,
        nomeContato2: item.nome_2,
        contato2: item.contato_2,
        celular2: item.celular_2,
        email2: item.email_2,
        cargo2: item.cargo_2,
        instagram2: item.instagram_2,
        nomeContato3: item.nome_3,
        contato3: item.contato_3,
        celular3: item.celular_3,
        email3: item.email_3,
        cargo3: item.cargo_3,
        instagram3: item.instagram_3,
        nomeContato4: item.nome_4,
        contato4: item.contato_4,
        celular4: item.celular_4,
        email4: item.email_4,
        cargo4: item.cargo_4,
        instagram4: item.instagram_4,
        datasContato: item.datas_contato,
        site: item.site,
        interesse: item.interesse,
        registros: item.consideracoes_registros,
        status: item.status,
      };
      this.dialogPesquisa = true;
    },
    closePesquisa() {
      this.dialogPesquisa = false;
    },
  },
};
</script>
