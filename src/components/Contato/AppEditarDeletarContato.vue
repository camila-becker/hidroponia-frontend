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
              <v-btn color="#79F397" @click="iniciar">
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
                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.tipo"
                            label="Tipo"
                          ></v-text-field>

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
                            label="UF"
                            v-model="info.uf"
                          ></v-text-field>

                          <v-text-field
                            label="Cidade"
                            v-model="info.cidade"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.cep"
                            label="CEP"
                            v-mask="'#####-###'"
                          ></v-text-field>
                          <v-text-field
                            v-model="info.endereco"
                            label="Endereço"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.pais"
                            label="País"
                          ></v-text-field>
                          <v-text-field
                            v-model="info.dataNascimento"
                            label="Dt. de Nascimento / Fundação"
                            v-mask="'##/##/####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.razaoSocial"
                            label="Razão Social"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.atividade"
                            label="Atividade"
                          ></v-text-field>

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
                          >Informações de Contato</v-card-text
                        >
                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">1</h4>
                          <v-text-field
                            v-model="info.nomeContato1"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo1"
                            label="Cargo"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.dataAniversario1"
                            label="Data de Aniversário"
                            v-mask="'##/##/####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato1"
                            label="Telefone"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular1"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.whats1"
                            label="Whatsapp"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email1"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.redesSociais1"
                            label="Redes Sociais"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">2</h4>
                          <v-text-field
                            v-model="info.nomeContato2"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo2"
                            label="Cargo"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.dataAniversario2"
                            label="Data de Aniversário"
                            v-mask="'##/##/####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato2"
                            label="Telefone"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular2"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.whats2"
                            label="Whatsapp"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email2"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.redesSociais2"
                            label="Redes Sociais"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">3</h4>
                          <v-text-field
                            v-model="info.nomeContato3"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo3"
                            label="Cargo"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.dataAniversario3"
                            label="Data de Aniversário"
                            v-mask="'##/##/####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato3"
                            label="Telefone"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.celular3"
                            label="Celular"
                            v-mask="'(##) #####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.whats3"
                            label="Whatsapp"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.email3"
                            label="E-mail"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.redesSociais3"
                            label="Redes Sociais"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" xs="12">
                          <h4 class="mb-3 text-center">4</h4>
                          <v-text-field
                            v-model="info.nomeContato4"
                            label="Nome"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.cargo4"
                            label="Cargo"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.dataAniversario4"
                            label="Data de Aniversário"
                            v-mask="'##/##/####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.contato4"
                            label="Telefone"
                            v-mask="'(##) ####-####'"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.whats4"
                            label="Whatsapp"
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
                            v-model="info.redesSociais4"
                            label="Redes Sociais"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="mx-5 d-flex justify-center">
                        <v-card-text
                          class="d-flex justify-center body-1 font-weight-black"
                          >Informações de Registro</v-card-text
                        >
                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.datasContato"
                            label="Datas de Contato"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.site"
                            label="Site"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" xs="12">
                          <v-text-field
                            v-model="info.status"
                            label="Status"
                          ></v-text-field>

                          <v-text-field
                            v-model="info.interesse"
                            label="Interesse"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="12" xs="12">
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
                      <v-btn color="#79F397" @click="salvarEdicao">
                        Salvar
                      </v-btn>
                      <v-btn color="#FF8585" @click="close">
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
                    <v-btn color="#79F397" @click="deleteItemConfirm">
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
        tipo: "",
        nome: "",
        documento: "",
        uf: "",
        cidade: "",
        cep: "",
        endereco: "",
        pais: "",
        dataNascimento: "",
        razaoSocial: "",
        ativiade: "",
        segmento: "",
        responsavel: "",
        atuacaoMercado: "",
        nomeContato1: "",
        cargoContato1: "",
        dataAniversario1: "",
        telefone1: "",
        celular1: "",
        whatsapp1: "",
        email1: "",
        redesSociais1: "",
        nomeContato2: "",
        cargoContato2: "",
        dataAniversario2: "",
        telefone2: "",
        celular2: "",
        whatsapp2: "",
        email2: "",
        redesSociais2: "",
        nomeContato3: "",
        cargoContato3: "",
        dataAniversario3: "",
        telefone3: "",
        celular3: "",
        whatsapp3: "",
        email3: "",
        redesSociais3: "",
        nomeContato4: "",
        cargoContato4: "",
        dataAniversario4: "",
        telefone4: "",
        celular4: "",
        whatsapp4: "",
        email4: "",
        redesSociais4: "",
        datasContato: "",
        site: "",
        status: "",
        interesse: "",
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
        tipo: item.tipo,
        nome: item.nome,
        documento: item.documento,
        uf: item.uf,
        cidade: item.cidade,
        cep: item.cep,
        endereco: item.endereco,
        pais: item.pais,
        dataNascimento: item.data_nascimento,
        razaoSocial: item.razao_social,
        ativiade: item.atividade,
        segmento: item.segmento,
        responsavel: item.responsavel,
        atuacaoMercado: item.atuacao_mercado,
        nomeContato1: item.nome_contato_1,
        cargoContato1: item.cargo_1,
        dataAniversario1: item.data_aniversario_1,
        telefone1: item.telefone_1,
        celular1: item.celular_1,
        whatsapp1: item.whatsapp_1,
        email1: item.email_1,
        redesSociais1: item.redes_sociais_1,
        nomeContato2: item.nome_contato_2,
        cargoContato2: item.cargo_2,
        dataAniversario2: item.data_aniversario_2,
        telefone2: item.telefone_2,
        celular2: item.celular_2,
        whatsapp2: item.whatsapp_2,
        email2: item.email_2,
        redesSociais2: item.redes_sociais_2,
        nomeContato3: item.nome_contato_3,
        cargoContato3: item.cargo_3,
        dataAniversario3: item.data_aniversario_3,
        telefone3: item.telefone_3,
        celular3: item.celular_3,
        whatsapp3: item.whatsapp_3,
        email3: item.email_3,
        redesSociais3: item.redes_sociais_3,
        nomeContato4: item.nome_contato_4,
        cargoContato4: item.cargo_4,
        dataAniversario4: item.data_aniversario_4,
        telefone4: item.telefone_4,
        celular4: item.celular_4,
        whatsapp4: item.whatsapp_4,
        email4: item.email_4,
        redesSociais4: item.redes_sociais_4,
        datasContato: item.datas_contato,
        site: item.site,
        status: item.status,
        interesse: item.interesse,
        registros: item.registros,
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
        tipo: this.info.tipo,
        nome: this.info.nome ? `${this.caixaAlta(this.info.nome.trim())}` : "",
        documento: this.info.documento,
        uf: this.info.uf,
        cidade: this.info.cidade,
        cep: this.info.cep,
        endereco: this.info.endereco
          ? `${this.caixaAlta(this.info.endereco.trim())}`
          : "",
        pais: this.info.pais,
        data_nascimento: this.info.dataNascimento,
        razao_social: this.info.razaoSocial
          ? `${this.caixaAlta(this.info.razaoSocial.trim())}`
          : "",
        atividade: this.info.atividade
          ? `${this.caixaAlta(this.info.atividade.trim())}`
          : "",
        segmento: this.info.segmento
          ? `${this.caixaAlta(this.info.segmento.trim())}`
          : "",
        responsavel: this.info.responsavel
          ? `${this.caixaAlta(this.info.responsavel.trim())}`
          : "",
        atuacao_mercado: this.info.atuacaoMercado,
        nome_contato_1: this.info.nomeContato1
          ? `${this.caixaAlta(this.info.nomeContato1.trim())}`
          : "",
        cargo_1: this.info.cargo1
          ? `${this.caixaAlta(this.info.cargo1.trim())}`
          : "",
        data_aniversario1: this.info.dataAniversario1,
        telefone_1: this.info.telefone1,
        celular_1: this.info.celular1,
        whatsapp_1: this.info.whatsapp1,
        email_1: this.info.email1
          ? `${this.caixaAlta(this.info.email1.trim())}`
          : "",
        redes_sociais1: this.info.redesSociais1
          ? `${this.caixaAlta(this.info.redesSociais1)}`
          : this.info.redesSociais1,
        nome_contato_2: this.info.nomeContato2
          ? `${this.caixaAlta(this.info.nomeContato2.trim())}`
          : "",
        cargo_2: this.info.cargo2
          ? `${this.caixaAlta(this.info.cargo2.trim())}`
          : "",
        data_aniversario2: this.info.dataAniversario2,
        telefone_2: this.info.telefone2,
        celular_2: this.info.celular2,
        whatsapp_2: this.info.whatsapp2,
        email_2: this.info.email2
          ? `${this.caixaAlta(this.info.email2.trim())}`
          : "",
        redes_sociais2: this.info.redesSociais2
          ? `${this.caixaAlta(this.info.redesSociais2)}`
          : this.info.redesSociais2,
        nome_contato_3: this.info.nomeContato3
          ? `${this.caixaAlta(this.info.nomeContato3.trim())}`
          : "",
        cargo_3: this.info.cargo3
          ? `${this.caixaAlta(this.info.cargo3.trim())}`
          : "",
        data_aniversario3: this.info.dataAniversario3,
        telefone_3: this.info.telefone3,
        celular_3: this.info.celular3,
        whatsapp_3: this.info.whatsapp3,
        email_3: this.info.email3
          ? `${this.caixaAlta(this.info.email3.trim())}`
          : "",
        redes_sociais3: this.info.redesSociais3
          ? `${this.caixaAlta(this.info.redesSociais3)}`
          : this.info.redesSociais3,
        nome_contato_4: this.info.nomeContato4
          ? `${this.caixaAlta(this.info.nomeContato4.trim())}`
          : "",
        cargo_4: this.info.cargo4
          ? `${this.caixaAlta(this.info.cargo4.trim())}`
          : "",
        data_aniversario4: this.info.dataAniversario4,
        telefone_4: this.info.telefone4,
        celular_4: this.info.celular4,
        whatsapp_4: this.info.whatsapp4,
        email_4: this.info.email4
          ? `${this.caixaAlta(this.info.email4.trim())}`
          : "",
        redes_sociais4: this.info.redesSociais4
          ? `${this.caixaAlta(this.info.redesSociais4)}`
          : this.info.redesSociais4,
        datas_contato: this.info.datasContato,
        site: this.info.site ? this.info.site.trim() : "",
        status: this.info.status,
        interesse: this.info.interesse
          ? `${this.caixaAlta(this.info.interesse.trim())}`
          : "",
        registros: this.info.registros,
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
