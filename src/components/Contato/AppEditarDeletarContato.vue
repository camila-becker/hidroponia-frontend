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
              <v-btn color="#128D4E" class="white--text" @click="iniciar">
                Recarregar
              </v-btn>
            </v-col>
          </v-card-title>
          <v-data-table
            :headers="headers"
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
              <v-dialog v-model="dialog" max-width="1500px">
                <v-card>
                  <v-card-text>
                    <v-card-text
                      class="d-flex justify-center body-1 font-weight-black"
                      >Informações da Empresa</v-card-text
                    >
                    <v-container>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-select
                            v-model="info.tipo"
                            label="Tipo"
                            :items="['CPF', 'CNPJ']"
                          ></v-select>

                          <v-text-field
                            v-model="info.nome"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.documento"
                            label="CPF ou CNPJ"
                            v-mask="
                              info.tipo === 'CPF'
                                ? '###.###.###-##'
                                : '##.###.###/####-##'
                            "
                          ></v-text-field>

                          <v-text-field
                            v-model="info.pais"
                            label="País"
                          ></v-text-field>

                          <v-text-field
                            label="UF"
                            v-model="info.uf"
                          ></v-text-field>

                          <v-text-field
                            label="Cidade"
                            v-model="info.cidade"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.endereco"
                            label="Endereço"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" sm="12" xs="12">
                          <v-text-field
                            v-model="info.dataNascimento"
                            label="Data de Nascimento"
                            v-mask="'##/##/####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.origem"
                            label="Origem"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.razaoSocial"
                            label="Razão Social"
                          ></v-text-field>

                          <v-select
                            v-model="info.atividade"
                            label="Atividade"
                            :items="[
                              'Consultor',
                              'Fornecedor',
                              'Universidade',
                              'Entidades',
                              'Produtor',
                            ]"
                            @change="mudarSegmento()"
                          ></v-select>

                          <v-text-field
                            v-model="info.segmento"
                            label="Segmento"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.responsavel"
                            label="Responsável"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.atuacaoMercado"
                            label="Atuação de Mercado"
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

                          <v-text-field
                            v-model="info.instagram1"
                            label="Instagram"
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

                          <v-text-field
                            v-model="info.instagram2"
                            label="Instagram"
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

                          <v-text-field
                            v-model="info.instagram3"
                            label="Instagram"
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

                          <v-text-field
                            v-model="info.instagram4"
                            label="Instagram"
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

                          <v-text-field
                            v-model="info.interesse"
                            label="Interesse"
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
                    </v-container>
                  </v-card-text>

                  <v-row justify="center">
                    <v-card-actions>
                      <v-btn
                        color="#128D4E"
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
                      color="#128D4E"
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
  name: "AppEditarDeletarContato",
  data() {
    return {
      dialog: false,
      dialogDelete: false,

      pesquisar: "",
      contatos: [],
      editedIndex: -1,
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

    caixaAlta(string) {
      if (string) {
        let words = string.split(" ");
        for (let i = 0; i < words.length; i++) {
          let j = words[i].charAt(0).toUpperCase();
          words[i] = j + words[i].substr(1);
        }
        return words.join(" ");
      }
    },
    editItem(item) {
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
      this.dialog = true;
    },

    async deleteItem(item) {
      this.editedIndex = this.contatos.indexOf(item);
      await api().delete(`contatos/${this.contatos[this.editedIndex].id}`);
      this.info = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.contatos.splice(this.editedIndex, 1);
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
        empresa: this.info.nome
          ? `${this.caixaAlta(this.info.nome.trim())}`
          : "",
        razao_social: this.info.razaoSocial
          ? `${this.caixaAlta(this.info.razaoSocial.trim())}`
          : "",
        cpf_cnpj: this.info.documento,
        pais: this.info.pais,
        uf: this.info.uf,
        cidade: this.info.cidade,
        endereco: this.info.endereco
          ? `${this.caixaAlta(this.info.endereco.trim())}`
          : "",
        atividade: this.info.atividade
          ? `${this.caixaAlta(this.info.atividade.trim())}`
          : "",
        segmento: this.info.segmento
          ? `${this.caixaAlta(this.info.segmento.trim())}`
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
        nome_1: this.info.nome1
          ? `${this.caixaAlta(this.info.nome1.trim())}`
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
        nome_2: this.info.nome2
          ? `${this.caixaAlta(this.info.nome2.trim())}`
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
        nome_3: this.info.nome3
          ? `${this.caixaAlta(this.info.nome3.trim())}`
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
        nome_4: this.info.nome4
          ? `${this.caixaAlta(this.info.nome4.trim())}`
          : "",
        cargo_4: this.info.cargo4
          ? `${this.caixaAlta(this.info.cargo4.trim())}`
          : "",
        site: this.info.site ? this.info.site.trim() : "",
        consideracoes_registros: this.info.registros,
        datas_contato: this.info.datasContato,
        tipo_interacao: this.info.tipoInteracao,
        tipo_pessoa: this.info.tipo,
        data_nascimento: this.info.dataNascimento,
        origem: this.info.origem
          ? `${this.caixaAlta(this.info.origem.trim())}`
          : "",
        responsavel: this.info.responsavel
          ? `${this.caixaAlta(this.info.responsavel.trim())}`
          : "",
        atuacao_mercado: this.info.atuacaoMercado
          ? `${this.caixaAlta(this.info.atuacaoMercado.trim())}`
          : "",
        instagram_1: this.info.instagram1,
        instagram_2: this.info.instagram2,
        instagram_3: this.info.instagram3,
        instagram_4: this.info.instagram4,
        interesse: this.info.interesse
          ? `${this.caixaAlta(this.info.interesse.trim())}`
          : "",
      };
      if (this.editedIndex > -1) {
        await api().put(
          `contatos/${this.contatos[this.editedIndex].id}`,
          dados
        );
        Object.assign(this.contatos[this.editedIndex], this.info);
      }
      this.iniciar();
      this.close();
    },
  },
};
</script>
