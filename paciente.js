class Paciente {
  constructor(nome, dataNasc, historico, alergias, endereco, telefone, email) {
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.historico = historico;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(data, medico) {
    this.consultas.push({ data, medico });
    console.log(`Consulta agendada para ${data} com ${medico}`);
  }

  adicionarExame(nomeExame, resultado) {
    this.exames.push({ nomeExame, resultado });
    console.log(`Exame ${nomeExame} adicionado com resultado: ${resultado}`);
  }
}


const paciente1 = new Paciente(
  "João Silva",
  "1990-01-01",
  "Nenhum",
  "Nenhuma",
  "Rua das Flores, 123",
  "(11) 99999-9999",
  "joao.silva@email.com"
);

paciente1.agendarConsulta("2025-12-12", "Dr. Carlos");
paciente1.adicionarExame("Hemograma", "Normal");
