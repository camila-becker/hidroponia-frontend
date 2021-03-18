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
            :headers="headers"
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
              <v-dialog v-model="dialog" max-width="1500px">
                <v-card>
                  <v-card-text>
                    <v-card-text
                      class="d-flex justify-center body-1 font-weight-black"
                      >Informações da Empresa</v-card-text
                    >
                    <v-container>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.nomeFantasia"
                            label="Nome Fantasia"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.registro"
                            label="Registro"
                          ></v-text-field>

                          <v-select
                            v-model="info.pais"
                            label="País"
                            :items="['Argentina', 'Brasil']"
                            @change="mudarPais"
                          ></v-select>

                          <v-text-field
                            label="UF"
                            v-model="info.uf"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.razaoSocial"
                            label="Razão Social"
                          ></v-text-field>

                          <v-select
                            v-model="info.atividade"
                            label="Atividade"
                            :items="itens.produtores"
                          ></v-select>
                          <v-text-field
                            label="Cidade"
                            v-model="info.cidade"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.endereco"
                            label="Endereço"
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
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato1"
                            label="Contato"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular1"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email1"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo1"
                            label="Cargo"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">2</h4>
                          <v-text-field
                            v-model="info.nomeContato2"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato2"
                            label="Contato"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular2"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email2"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo2"
                            label="Cargo"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">3</h4>
                          <v-text-field
                            v-model="info.nomeContato3"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato3"
                            label="Contato"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular3"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email3"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo3"
                            label="Cargo"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">4</h4>
                          <v-text-field
                            v-model="info.nomeContato4"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato4"
                            label="Contato"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular4"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email4"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo4"
                            label="Cargo"
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
                          ></v-text-field>

                          <v-text-field
                            v-model="info.site"
                            label="Site"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.status"
                            label="Status"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-textarea
                            v-model="info.registros"
                            label="Considerações e Registros"
                            height="118"
                            filled
                          ></v-textarea>
                        </v-col>
                      </v-row>

                      <v-card-text
                        class="d-flex justify-center body-1 font-weight-black"
                        >Informações de Produtor</v-card-text
                      >
                      <v-row class="mx-5 d-flex justify-center">
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-textarea
                            v-model="info.cultivares"
                            label="Cultivares"
                            height="118"
                            filled
                          ></v-textarea>
                        </v-col>
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-select
                            v-model="info.metodo"
                            label="Método de Cultivo"
                            :items="itens.metodo"
                          ></v-select>
                          <v-text-field
                            v-model="info.outroMetodo"
                            label='Citar método caso método escolhido seja "Outro"'
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.areaFisica"
                            label="Área física total"
                          ></v-text-field>
                          <v-select
                            v-model="info.cultivoParalelo"
                            label="Tem outro sistema de cultivo paralelo"
                            :items="['Sim', 'Não']"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.areaHidroponico"
                            label="Área de cultivo hidropônico"
                          ></v-text-field>
                          <v-select
                            v-model="info.migracao"
                            label="Migrou para hidroponia"
                            :items="[
                              'Sim',
                              'Não',
                              'Iniciou direto como produtor hidroponia',
                            ]"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-text-field
                            v-model="info.volume"
                            label="Volume de produção total"
                          ></v-text-field>
                          <v-text-field
                            v-model="info.profissao"
                            label="Profissão anterior"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <v-select
                            v-model="info.localizacao"
                            label="Localização do cultivo"
                            :items="['Área rural', 'Área urbana']"
                          ></v-select>
                          <v-select
                            v-model="info.movimentacao"
                            label="Movimentação financeira"
                            :items="itens.movimentacao"
                          ></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-row justify="center">
                    <v-card-actions>
                      <v-btn
                        color="#2c3e50"
                        class="white--text"
                        @click="salvarEdicao"
                      >
                        Salvar
                      </v-btn>
                      <v-btn color="#c53030" class="white--text" @click="close">
                        Cancelar
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-row justify="center">
                    <v-card-title class="text-button text-center">
                      Cadastro excluido com sucesso!
                    </v-card-title>
                  </v-row>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="#2c3e50"
                      class="white--text"
                      @click="deleteItemConfirm"
                    >
                      OK
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
            <template v-slot:[`item.editar`]="{ item }">
              <v-icon medium @click="editItem(item)">
                mdi-pencil
              </v-icon>
            </template>
            <template v-slot:[`item.excluir`]="{ item }">
              <v-icon medium @click="deleteItem(item)">
                mdi-delete
              </v-icon>
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
  name: "AppEditarDeletarProdutor",
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      pesquisar: "",
      produtores: [],
      editedIndex: -1,
      itens: {
        produtores: [
          "Olericultura",
          "Fruticultura",
          "Floricultura",
          "Reflorestamento",
          "Produção de mudas",
          "Plantas ornamentais",
        ],
        movimentacao: [
          "Até R$ 20.000,00 mensais",
          "De R$ 20.001,00 a R$ 50.000,00 mensais",
          "De R$ 50.001,00 a R$ 80.000,00 mensais",
          "De R$ 80.001,00 a R$ 100.000,00 mensais",
          "De R$ 100.001,00 a R$130.000,00 mensais",
          "De R$ 130.001,00 a R$160.000,00 mensais",
          "De R$ 160.001,00 a R$200.000,00 mensais",
          "De R$ 200.001,00 a R$300.000,00 mensais",
          "De R$ 300.001,00 a R$400.000,00 mensais",
          "De R$ 400.001,00 a R$500.000,00 mensais",
          "De R$ 500.001,00 a R$1.000.000,00 mensais",
          "Acima de R$ 1.000.000,00",
        ],
        metodo: ["NFT", "Aeroponia", "Aquaponia", "Outro"],
      },
      headers: [
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
          text: "UF",
          align: "center",
          sortable: false,
          value: "uf",
        },
        {
          text: "Cidade",
          align: "center",
          sortable: false,
          value: "cidade",
        },
        { text: "Editar", value: "editar", sortable: false },
        { text: "Excluir", value: "excluir", sortable: false },
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
    mudarPais(event) {
      let pais = event;
      switch (pais) {
        case "Argentina":
          return (this.desativarUfCidade = true);
        default:
          this.desativarUfCidade = false;
      }
    },
    editItem(item) {
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
      this.dialog = true;
    },
    async deleteItem(item) {
      this.editedIndex = this.produtores.indexOf(item);
      await api().delete(`produtores/${this.produtores[this.editedIndex].id}`);
      this.info = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.produtores.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async salvarEdicao() {
      const dados = {
        empresa: this.info.nomeFantasia
          ? `${this.caixaAlta(this.info.nomeFantasia.trim())}`
          : "",
        registro: this.info.registro,
        razao_social: this.info.razaoSocial
          ? `${this.caixaAlta(this.info.razaoSocial.trim())}`
          : "",
        pais: this.info.pais,
        uf: this.info.uf,
        cidade: this.info.cidade,
        endereco: this.info.endereco
          ? `${this.caixaAlta(this.info.endereco.trim())}`
          : "",
        atividade: this.info.atividade
          ? `${this.caixaAlta(this.info.atividade.trim())}`
          : "",
        status: this.info.status
          ? `${this.caixaAlta(this.info.status.trim())}`
          : "",
        contato_1: this.info.contato1
          ? `${this.caixaAlta(this.info.contato1.trim())}`
          : "",
        celular_1: this.info.celular1
          ? `${this.caixaAlta(this.info.celular1.trim())}`
          : "",
        email_1: this.info.email1
          ? `${this.caixaAlta(this.info.email1.trim())}`
          : "",
        nome_1: this.info.nomeContato1
          ? `${this.caixaAlta(this.info.nomeContato1.trim())}`
          : "",
        cargo_1: this.info.cargo1
          ? `${this.caixaAlta(this.info.cargo1.trim())}`
          : "",
        contato_2: this.info.contato2
          ? `${this.caixaAlta(this.info.contato2.trim())}`
          : "",
        celular_2: this.info.celular2
          ? `${this.caixaAlta(this.info.celular2.trim())}`
          : "",
        email_2: this.info.email2
          ? `${this.caixaAlta(this.info.email2.trim())}`
          : "",
        nome_2: this.info.nomeContato2
          ? `${this.caixaAlta(this.info.nomeContato2.trim())}`
          : "",
        cargo_2: this.info.cargo2
          ? `${this.caixaAlta(this.info.cargo2.trim())}`
          : "",
        contato_3: this.info.contato3
          ? `${this.caixaAlta(this.info.contato3.trim())}`
          : "",
        celular_3: this.info.celular3
          ? `${this.caixaAlta(this.info.celular3.trim())}`
          : "",
        email_3: this.info.email3
          ? `${this.caixaAlta(this.info.email3.trim())}`
          : "",
        nome_3: this.info.nomeContato3
          ? `${this.caixaAlta(this.info.nomeContato3.trim())}`
          : "",
        cargo_3: this.info.cargo3
          ? `${this.caixaAlta(this.info.cargo3.trim())}`
          : "",
        contato_4: this.info.contato4
          ? `${this.caixaAlta(this.info.contato4.trim())}`
          : "",
        celular_4: this.info.celular4
          ? `${this.caixaAlta(this.info.celular4.trim())}`
          : "",
        email_4: this.info.email4
          ? `${this.caixaAlta(this.info.email4.trim())}`
          : "",
        nome_4: this.info.nomeContato4
          ? `${this.caixaAlta(this.info.nomeContato4.trim())}`
          : "",
        cargo_4: this.info.cargo4
          ? `${this.caixaAlta(this.info.cargo4.trim())}`
          : "",
        site: this.info.site ? this.info.site.trim() : "",
        consideracoes_registros: this.info.registros,
        datas_contato: this.info.datasContato,
        cultivares: this.info.cultivares,
        metodo: this.info.metodo_cultivo,
        outroMetodo: this.info.outro_metodo
          ? this.info.outro_metodo.trim()
          : "",
        areaFisica: this.info.area_fisica_total
          ? this.info.area_fisica_total.trim()
          : "",
        cultivoParalelo: this.info.outro_cultivo_paralelo,
        areaHidroponico: this.info.area_hidroponica
          ? this.info.area_hidroponica.trim()
          : "",
        migracao: this.info.migrou_para_hidroponia,
        volume: this.info.vol_producao_total
          ? this.info.vol_producao_total.trim()
          : "",
        profissao: this.info.profissao_anterior
          ? this.info.profissao_anterior.trim()
          : "",
        localizacao: this.info.localizacao,
        movimentacao: this.info.movimentacao_financeira,
      };
      if (this.editedIndex > -1) {
        await api().put(
          `produtores/${this.produtores[this.editedIndex].id}`,
          dados
        );
        Object.assign(this.produtores[this.editedIndex], this.info);
      }
      this.iniciar();
      this.close();
    },
  },
};
</script>
