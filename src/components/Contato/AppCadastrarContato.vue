<template>
  <v-main>
    <v-row justify="center">
      <v-form
        @submit.prevent="salvarCadastro"
        v-model="valid"
        ref="form"
        lazy-validation
        class="ml-5 mr-5"
      >
        <v-row>
          <v-col>
            <h2 class="d-flex justify-center body-1 font-weight-black">
              Informações da Empresa
            </h2>
          </v-col>
        </v-row>
        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="4" sm="12" xs="12">
            <v-select
              v-model="dados.tipo"
              label="* Tipo"
              :items="['CPF', 'CNPJ']"
              required
              :rules="rules.tipoRules"
            ></v-select>

            <v-text-field
              v-model="dados.nome"
              :rules="rules.nomeRules"
              label="* Nome"
              required
            ></v-text-field>

            <v-text-field
              v-model="dados.documento"
              :rules="rules.docRules"
              label="* CPF ou CNPJ"
              v-mask="
                dados.tipo === 'CPF' ? '###.###.###-##' : '##.###.###/####-##'
              "
              required
            ></v-text-field>

            <v-select
              label="UF"
              v-model="dados.uf"
              :items="infoUf"
              @change="carregarCidade"
              :disabled="desativarUfCidade"
            ></v-select>

            <v-select
              label="Cidade"
              v-model="dados.cidade"
              :items="infoCidade"
              :disabled="desativarUfCidade"
            ></v-select>
          </v-col>

          <v-col cols="12" md="4" sm="12" xs="12">
            <v-text-field
              v-model="dados.cep"
              label="CEP"
              v-mask="'#####-###'"
            ></v-text-field>
            <v-text-field
              v-model="dados.endereco"
              label="Endereço"
            ></v-text-field>

            <v-select
              v-model="dados.pais"
              label="País"
              :items="['Argentina', 'Brasil']"
              @change="mudarPais"
            ></v-select>
            <v-text-field
              v-model="dados.dataNascimento"
              label="Dt. de Nascimento / Fundação"
              v-mask="'##/##/####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.razaoSocial"
              label="Razão Social"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="12" xs="12">
            <v-select
              v-model="dados.atividade"
              label="Atividade"
              :items="[
                'Consultor',
                'Fornecedor',
                'Universidade',
                'Entidades',
                'Produtor',
              ]"
              @change="mudarSegmento"
            ></v-select>

            <v-select
              v-model="dados.segmento"
              label="Segmento"
              :items="infoSegmento"
              :disabled="desativarSegmento"
            ></v-select>

            <v-text-field
              v-model="dados.responsavel"
              label="Responsável"
            ></v-text-field>

            <v-text-field
              v-model="dados.atuacaoMercado"
              label="Atuação de Mercado"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="mb-2 mt-2">
            <h2 class="d-flex justify-center body-1 font-weight-black">
              Informações de Contato
            </h2>
          </v-col>
        </v-row>
        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">1</h4>
            <v-text-field
              v-model="dados.nomeContato1"
              label="Nome"
            ></v-text-field>

            <v-text-field v-model="dados.cargo1" label="Cargo"></v-text-field>

            <v-text-field
              v-model="dados.dataAniversario1"
              label="Data de Aniversário"
              v-mask="'##/##/####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato1"
              label="Telefone"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular1"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.whats1"
              label="Whatsapp"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email1" label="E-mail"></v-text-field>

            <v-text-field
              v-model="dados.redesSociais1"
              label="Redes Sociais"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">2</h4>
            <v-text-field
              v-model="dados.nomeContato2"
              label="Nome"
            ></v-text-field>

            <v-text-field v-model="dados.cargo2" label="Cargo"></v-text-field>

            <v-text-field
              v-model="dados.dataAniversario2"
              label="Data de Aniversário"
              v-mask="'##/##/####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato2"
              label="Telefone"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular2"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.whats2"
              label="Whatsapp"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email2" label="E-mail"></v-text-field>

            <v-text-field
              v-model="dados.redesSociais2"
              label="Redes Sociais"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">3</h4>
            <v-text-field
              v-model="dados.nomeContato3"
              label="Nome"
            ></v-text-field>

            <v-text-field v-model="dados.cargo3" label="Cargo"></v-text-field>

            <v-text-field
              v-model="dados.dataAniversario3"
              label="Data de Aniversário"
              v-mask="'##/##/####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato3"
              label="Telefone"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular3"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.whats3"
              label="Whatsapp"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email3" label="E-mail"></v-text-field>

            <v-text-field
              v-model="dados.redesSociais3"
              label="Redes Sociais"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" sm="12" xs="12">
            <h4 class="mb-3 text-center">4</h4>
            <v-text-field
              v-model="dados.nomeContato4"
              label="Nome"
            ></v-text-field>

            <v-text-field v-model="dados.cargo4" label="Cargo"></v-text-field>

            <v-text-field
              v-model="dados.dataAniversario4"
              label="Data de Aniversário"
              v-mask="'##/##/####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.contato4"
              label="Telefone"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.whats4"
              label="Whatsapp"
              v-mask="'(##) ####-####'"
            ></v-text-field>

            <v-text-field
              v-model="dados.celular4"
              label="Celular"
              v-mask="'(##) #####-####'"
            ></v-text-field>

            <v-text-field v-model="dados.email4" label="E-mail"></v-text-field>

            <v-text-field
              v-model="dados.redesSociais4"
              label="Redes Sociais"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="mb-2 mt-2">
            <h2 class="d-flex justify-center body-1 font-weight-black">
              Informações de Registro
            </h2>
          </v-col>
        </v-row>

        <v-row class="mx-5 d-flex justify-center">
          <v-col cols="12" md="4" sm="12" xs="12">
            <v-text-field
              v-model="dados.datasContato"
              label="Datas de Contato"
            ></v-text-field>

            <v-text-field v-model="dados.site" label="Site"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="12" xs="12">
            <v-select
              v-model="dados.status"
              label="Status"
              :items="infoStatus"
            ></v-select>

            <v-select
              v-model="dados.interesse"
              label="Interesse"
              :items="infoInteresse"
            ></v-select>

            <v-text-field
              v-if="this.dados.interesse === 'Outro'"
              v-model="dados.interesse"
              label="Digite aqui o seu interesse"
              required
              :rules="rules.interesse"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" sm="12" xs="12">
            <v-textarea
              v-model="dados.registros"
              label="Considerações e Registros"
              height="118"
              filled
            ></v-textarea>
          </v-col>
          <v-col cols="12" class="d-flex justify-center mb-4">
            <v-btn
              @click="validar"
              :disabled="!valid"
              type="submit"
              color="#79F397"
              class="mr-4"
              >Cadastrar</v-btn
            >
            <v-btn @click="limpar" color="#79F397">Limpar</v-btn>
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
  name: "AppCadastrarContato",
  data() {
    return {
      valid: true,
      desativarSegmento: false,
      desativarUfCidade: false,
      dados: {
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
      infoUf: [],
      infoCidade: [],
      infoSegmento: [],
      rules: {
        nomeRules: [(nome) => !!nome || "Favor informar o nome!"],
        tipoRules: [(tipo) => !!tipo || "Favor informar o tipo de documento!"],
        docRules: [(documento) => !!documento || "Favor informar o documento!"],
        interesse: [
          (interesse) => !!interesse || "Favor informar o interesse!",
        ],
      },
      itensSegmento: {
        consultor: [
          "Consultoria de gestão",
          "Consultoria comercial",
          "Consultoria técnica",
        ],
        fornecedor: [
          "Sementes",
          "Estufas",
          "Automação",
          "Cursos e treinamentos",
          "Coberturas plásticas",
          "Climatização",
          "Canais de plantio",
          "Aparelhos de medição",
          "Acessórios",
          "Agente biológico",
          "Agente financeiro",
          "Embalagens",
          "Fertilizantes",
          "Irrigação",
          "Iluminação",
          "Nutrição",
        ],
        produtores: [
          "Olericultura",
          "Fruticultura",
          "Floricultura",
          "Reflorestamento",
          "Produção de mudas",
          "Plantas ornamentais",
        ],
      },
      infoStatus: ["Prospecção", "Cliente ativo", "Cliente inativo"],
      infoInteresse: [
        "Anúncios Impressos",
        "Anúncios Digitais",
        "Informação: Assinaturas da revistas e blog)",
        "Revistas do acervo",
        "Ser consultor",
        "Ser correspondente",
        "Colocar sua marca em evidência no setor",
        "Patrocínios em geral",
        "Catálogos",
        "Missões Técnicas",
        "Programa Hidroponia em Números",
        "Cursos, treinamentos, palestras e eventos",
        "Site",
        "Outro",
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

    mudarSegmento(event) {
      let atividade = event;
      switch (atividade) {
        case "Consultor":
          this.infoSegmento = this.itensSegmento.consultor;
          this.desativarSegmento = false;
          break;
        case "Fornecedor":
          this.infoSegmento = this.itensSegmento.fornecedor;
          this.desativarSegmento = false;
          break;
        case "Universidade":
          this.infoSegmento = [];
          this.desativarSegmento = true;
          break;
        case "Entidades":
          this.infoSegmento = [];
          this.desativarSegmento = true;
          break;
        case "Produtor":
          this.infoSegmento = this.itensSegmento.produtores;
          this.desativarSegmento = false;
          break;
      }
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
    async salvarCadastro() {
      try {
        const cadastro = {
          tipo: this.dados.tipo,
          nome: this.dados.nome
            ? `${this.caixaAlta(this.dados.nome.trim())}`
            : "",
          documento: this.dados.documento,
          uf: this.dados.uf,
          cidade: this.dados.cidade,
          cep: this.dados.cep,
          endereco: this.dados.endereco
            ? `${this.caixaAlta(this.dados.endereco.trim())}`
            : "",
          pais: this.dados.pais,
          data_nascimento: this.dados.dataNascimento,
          razao_social: this.dados.razaoSocial
            ? `${this.caixaAlta(this.dados.razaoSocial.trim())}`
            : "",
          atividade: this.dados.atividade
            ? `${this.caixaAlta(this.dados.atividade.trim())}`
            : "",
          segmento: this.dados.segmento
            ? `${this.caixaAlta(this.dados.segmento.trim())}`
            : "",
          responsavel: this.dados.responsavel
            ? `${this.caixaAlta(this.dados.responsavel.trim())}`
            : "",
          atuacao_mercado: this.dados.atuacaoMercado,
          nome_contato_1: this.dados.nomeContato1
            ? `${this.caixaAlta(this.dados.nomeContato1.trim())}`
            : "",
          cargo_1: this.dados.cargo1
            ? `${this.caixaAlta(this.dados.cargo1.trim())}`
            : "",
          data_aniversario1: this.dados.dataAniversario1,
          telefone_1: this.dados.telefone1,
          celular_1: this.dados.celular1,
          whatsapp_1: this.dados.whatsapp1,
          email_1: this.dados.email1
            ? `${this.caixaAlta(this.dados.email1.trim())}`
            : "",
          redes_sociais1: this.dados.redesSociais1
            ? `${this.caixaAlta(this.dados.redesSociais1)}`
            : this.dados.redesSociais1,
          nome_contato_2: this.dados.nomeContato2
            ? `${this.caixaAlta(this.dados.nomeContato2.trim())}`
            : "",
          cargo_2: this.dados.cargo2
            ? `${this.caixaAlta(this.dados.cargo2.trim())}`
            : "",
          data_aniversario2: this.dados.dataAniversario2,
          telefone_2: this.dados.telefone2,
          celular_2: this.dados.celular2,
          whatsapp_2: this.dados.whatsapp2,
          email_2: this.dados.email2
            ? `${this.caixaAlta(this.dados.email2.trim())}`
            : "",
          redes_sociais2: this.dados.redesSociais2
            ? `${this.caixaAlta(this.dados.redesSociais2)}`
            : this.dados.redesSociais2,
          nome_contato_3: this.dados.nomeContato3
            ? `${this.caixaAlta(this.dados.nomeContato3.trim())}`
            : "",
          cargo_3: this.dados.cargo3
            ? `${this.caixaAlta(this.dados.cargo3.trim())}`
            : "",
          data_aniversario3: this.dados.dataAniversario3,
          telefone_3: this.dados.telefone3,
          celular_3: this.dados.celular3,
          whatsapp_3: this.dados.whatsapp3,
          email_3: this.dados.email3
            ? `${this.caixaAlta(this.dados.email3.trim())}`
            : "",
          redes_sociais3: this.dados.redesSociais3
            ? `${this.caixaAlta(this.dados.redesSociais3)}`
            : this.dados.redesSociais3,
          nome_contato_4: this.dados.nomeContato4
            ? `${this.caixaAlta(this.dados.nomeContato4.trim())}`
            : "",
          cargo_4: this.dados.cargo4
            ? `${this.caixaAlta(this.dados.cargo4.trim())}`
            : "",
          data_aniversario4: this.dados.dataAniversario4,
          telefone_4: this.dados.telefone4,
          celular_4: this.dados.celular4,
          whatsapp_4: this.dados.whatsapp4,
          email_4: this.dados.email4
            ? `${this.caixaAlta(this.dados.email4.trim())}`
            : "",
          redes_sociais4: this.dados.redesSociais4
            ? `${this.caixaAlta(this.dados.redesSociais4)}`
            : this.dados.redesSociais4,
          datas_contato: this.dados.datasContato,
          site: this.dados.site ? this.dados.site.trim() : "",
          status: this.dados.status,
          interesse: this.dados.interesse
            ? `${this.caixaAlta(this.dados.interesse.trim())}`
            : "",
          registros: this.dados.registros,
        };
        await api().post("contatos", cadastro);
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
.link {
  text-decoration: none;
}

h2,
h4 {
  color: #199738;
}

h2 {
  text-transform: uppercase;
}
</style>
