<template>
  <v-main>
    <v-row justify="center">
      <v-form
        @submit.prevent="salvarProdutor"
        v-model="valid"
        ref="form"
        lazy-validation
      >
        <v-col>
          <h2 class="d-flex justify-center body-1 font-weight-black">
            Informações da Empresa
          </h2>
        </v-col>
        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="3" sm="12" xs="12">
            <v-text-field
              v-model="dados.nomeFantasia"
              label="* Nome Fantasia"
              required
              :rules="rules.nome"
            ></v-text-field>

            <v-text-field
              v-model="dados.registro"
              label="* Registro"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <v-text-field
              v-model="dados.razaoSocial"
              label="Razão Social"
            ></v-text-field>

            <v-select
              v-model="dados.atividade"
              label="Atividade"
              :items="itens.produtores"
            ></v-select>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <v-select
              v-model="dados.pais"
              label="País"
              :items="['Argentina', 'Brasil']"
              @change="mudarPais"
            ></v-select>

            <v-select
              label="UF"
              v-model="dados.uf"
              :items="infoUf"
              @change="carregarCidade"
              :disabled="desativarUfCidade"
            ></v-select>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <v-select
              label="Cidade"
              v-model="dados.cidade"
              :items="infoCidade"
              :disabled="desativarUfCidade"
            ></v-select>

            <v-text-field
              v-model="dados.endereco"
              label="Endereço"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-col class="mb-2 mt-2">
          <h2 class="d-flex justify-center body-1 font-weight-black">
            Informações de Contato
          </h2>
        </v-col>
        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">1</h4>
            <v-text-field
              v-model="dados.nomeContato1"
              label="Nome"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato1"
              label="Contato"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular1"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email1" label="E-mail"></v-text-field>

            <v-text-field v-model="dados.cargo1" label="Cargo"></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">2</h4>
            <v-text-field
              v-model="dados.nomeContato2"
              label="Nome"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato2"
              label="Contato"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular2"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email2" label="E-mail"></v-text-field>

            <v-text-field v-model="dados.cargo2" label="Cargo"></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">3</h4>
            <v-text-field
              v-model="dados.nomeContato3"
              label="Nome"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato3"
              label="Contato"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular3"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email3" label="E-mail"></v-text-field>

            <v-text-field v-model="dados.cargo3" label="Cargo"></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">4</h4>
            <v-text-field
              v-model="dados.nomeContato4"
              label="Nome"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato4"
              label="Contato"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular4"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email4" label="E-mail"></v-text-field>

            <v-text-field v-model="dados.cargo4" label="Cargo"></v-text-field>
          </v-col>
        </v-row>

        <v-col class="mt-2 mb-2">
          <h2 class="d-flex justify-center body-1 font-weight-black">
            Informações de Registro
          </h2>
        </v-col>
        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="6" sm="12" xs="12">
            <v-text-field
              v-model="dados.datasContato"
              label="Datas de Contato"
            ></v-text-field>

            <v-text-field v-model="dados.site" label="Site"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12" xs="12">
            <v-select
              v-model="dados.status"
              label="Status"
              :items="infoStatus"
            ></v-select>
            <v-textarea
              v-model="dados.registros"
              label="Considerações e Registros"
              height="118"
              filled
            ></v-textarea>
          </v-col>
        </v-row>

        <v-col class="mb-2 mt-2">
          <h2 class="d-flex justify-center body-1 font-weight-black">
            Informações do Produtor
          </h2>
        </v-col>

        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="6" sm="12" xs="12">
            <v-textarea
              v-model="dados.cultivares"
              label="Cultivares"
              height="118"
              filled
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="6" sm="12" xs="12">
            <v-select
              v-model="dados.metodo"
              label="Método de Cultivo"
              :items="itens.metodo"
            ></v-select>
            <v-text-field
              v-model="dados.outroMetodo"
              label='Citar método caso método escolhido seja "Outro"'
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="12" xs="12">
            <v-text-field
              v-model="dados.areaFisica"
              label="Área física total"
            ></v-text-field>
            <v-select
              v-model="dados.cultivoParalelo"
              label="Tem outro sistema de cultivo paralelo"
              :items="['Sim', 'Não']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3" sm="12" xs="12">
            <v-text-field
              v-model="dados.areaHidroponico"
              label="Área de cultivo hidropônico"
            ></v-text-field>
            <v-select
              v-model="dados.migracao"
              label="Migrou para hidroponia"
              :items="['Sim', 'Não', 'Iniciou direto como produtor hidroponia']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3" sm="12" xs="12">
            <v-text-field
              v-model="dados.volume"
              label="Volume de produção total"
            ></v-text-field>
            <v-text-field
              v-model="dados.profissao"
              label="Profissão anterior"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="12" xs="12">
            <v-select
              v-model="dados.localizacao"
              label="Localização do cultivo"
              :items="['Área rural', 'Área urbana']"
            ></v-select>
            <v-select
              v-model="dados.movimentacao"
              label="Movimentação financeira"
              :items="itens.movimentacao"
            ></v-select>
          </v-col>
          <v-col cols="12" class="d-flex justify-center mb-4">
            <v-btn
              @click="validar"
              :disabled="!valid"
              type="submit"
              color="#2c3e50"
              class="mr-4 white--text"
              >Cadastrar</v-btn
            >
            <v-btn @click="limpar" color="#2c3e50" class="white--text"
              >Limpar</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-row>
  </v-main>
</template>

<script>
import axios from "axios";
import api from "../../service/api";
export default {
  name: "AppCadastrarProdutor",
  data() {
    return {
      valid: true,
      desativarUfCidade: false,
      items: [
        "novo produtor",
        "editar / excluir produtor",
        "pesquisar produtor",
      ],
      dados: {
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
      infoUf: [],
      infoCidade: [],
      rules: {
        nomeRules: [(nome) => !!nome || "Favor informar o nome!"],
        tipoRules: [(tipo) => !!tipo || "Favor informar o tipo de documento!"],
        docRules: [(documento) => !!documento || "Favor informar o documento!"],
      },
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
      infoStatus: [
        "Prospecção",
        "Cliente ativo",
        "Cliente inativo",
        "Cliente nunca contatado",
      ],
    };
  },
  async created() {
    try {
      await axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => {
          const uf = res.data.map((uf) => uf.sigla);
          this.infoUf = uf.sort();
        });
    } catch (error) {
      console.log(error);
      this.$swal({
        icon: "error",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1800,
      });
    }
  },

  methods: {
    validar() {
      this.$refs.form.validate();
    },
    limpar() {
      this.$refs.form.reset();
    },
    async carregarCidade(event) {
      let estado = event;
      await axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`
        )
        .then((res) => {
          const cidades = res.data.map((cidade) => cidade.nome);
          this.infoCidade = cidades;
        });
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
    async salvarProdutor() {
      try {
        const produtores = {
          empresa: this.dados.nomeFantasia
            ? `${this.caixaAlta(this.dados.nomeFantasia.trim())}`
            : "",
          registro: this.dados.registro,
          razao_social: this.dados.razaoSocial
            ? `${this.caixaAlta(this.dados.razaoSocial.trim())}`
            : "",
          pais: this.dados.pais,
          uf: this.dados.uf,
          cidade: this.dados.cidade,
          endereco: this.dados.endereco
            ? `${this.caixaAlta(this.dados.endereco.trim())}`
            : "",
          atividade: this.dados.atividade
            ? `${this.caixaAlta(this.dados.atividade.trim())}`
            : "",
          status: this.dados.status
            ? `${this.caixaAlta(this.dados.status.trim())}`
            : "",
          contato_1: this.dados.contato1
            ? `${this.caixaAlta(this.dados.contato1.trim())}`
            : "",
          celular_1: this.dados.celular1
            ? `${this.caixaAlta(this.dados.celular1.trim())}`
            : "",
          email_1: this.dados.email1
            ? `${this.caixaAlta(this.dados.email1.trim())}`
            : "",
          nome_1: this.dados.nomeContato1
            ? `${this.caixaAlta(this.dados.nomeContato1.trim())}`
            : "",
          cargo_1: this.dados.cargo1
            ? `${this.caixaAlta(this.dados.cargo1.trim())}`
            : "",
          contato_2: this.dados.contato2
            ? `${this.caixaAlta(this.dados.contato2.trim())}`
            : "",
          celular_2: this.dados.celular2
            ? `${this.caixaAlta(this.dados.celular2.trim())}`
            : "",
          email_2: this.dados.email2
            ? `${this.caixaAlta(this.dados.email2.trim())}`
            : "",
          nome_2: this.dados.nomeContato2
            ? `${this.caixaAlta(this.dados.nomeContato2.trim())}`
            : "",
          cargo_2: this.dados.cargo2
            ? `${this.caixaAlta(this.dados.cargo2.trim())}`
            : "",
          contato_3: this.dados.contato3
            ? `${this.caixaAlta(this.dados.contato3.trim())}`
            : "",
          celular_3: this.dados.celular3
            ? `${this.caixaAlta(this.dados.celular3.trim())}`
            : "",
          email_3: this.dados.email3
            ? `${this.caixaAlta(this.dados.email3.trim())}`
            : "",
          nome_3: this.dados.nomeContato3
            ? `${this.caixaAlta(this.dados.nomeContato3.trim())}`
            : "",
          cargo_3: this.dados.cargo3
            ? `${this.caixaAlta(this.dados.cargo3.trim())}`
            : "",
          contato_4: this.dados.contato4
            ? `${this.caixaAlta(this.dados.contato4.trim())}`
            : "",
          celular_4: this.dados.celular4
            ? `${this.caixaAlta(this.dados.celular4.trim())}`
            : "",
          email_4: this.dados.email4
            ? `${this.caixaAlta(this.dados.email4.trim())}`
            : "",
          nome_4: this.dados.nomeContato4
            ? `${this.caixaAlta(this.dados.nomeContato4.trim())}`
            : "",
          cargo_4: this.dados.cargo4
            ? `${this.caixaAlta(this.dados.cargo4.trim())}`
            : "",
          site: this.dados.site ? this.dados.site.trim() : "",
          consideracoes_registros: this.dados.registros,
          datas_contato: this.dados.datasContato,
          cultivares: this.dados.cultivares,
          metodo_cultivo: this.dados.metodo,
          outro_metodo: this.dados.outroMetodo
            ? this.dados.outroMetodo.trim()
            : "",
          area_fisica_total: this.dados.areaFisica
            ? this.dados.areaFisica.trim()
            : "",
          outro_cultivo_paralelo: this.dados.cultivoParalelo,
          area_hidroponica: this.dados.areaHidroponico
            ? this.dados.areaHidroponico.trim()
            : "",
          migrou_para_hidroponia: this.dados.migracao,
          vol_producao_total: this.dados.volume ? this.dados.volume.trim() : "",
          profissao_anterior: this.dados.profissao
            ? this.dados.profissao.trim()
            : "",
          localizacao: this.dados.localizacao,
          movimentacao_financeira: this.dados.movimentacao,
        };
        await api().post("produtores", produtores);
        this.$swal({
          icon: "success",
          text: "Cadastro registrado com sucesso!",
          showConfirmButton: false,
          timer: 1800,
        });
        this.limpar();
      } catch (error) {
        console.log(error.response.data.message);
        this.$swal({
          icon: "error",
          text: `${error.response.data.message}`,
          showConfirmButton: false,
          timer: 2200,
        });
      }
    },
  },
};
</script>

<style scoped>
.titulo {
  text-transform: uppercase;
}

span {
  color: #fff;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms linear;
}

span:hover {
  color: #a1c038;
}

.link {
  text-decoration: none;
}
</style>
