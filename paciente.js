class Paciente {
  constructor(
    id,
    cpf,
    nome,
    dataNasc,
    genero,
    tipoSanguieno,
    alergias,
    endereco,
    telefone,
    email,
    contatoEmergencia,
  ) {
    this.id = id;
    this.cpf = cpf;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.genero = genero;
    this.tipoSanguieno = tipoSanguieno;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.contatoEmergencia = contatoEmergencia;

    this.historicoMedico = [];
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(consulta) {
    const consultaNoMesmoHorario = this.consultas.some(c => c.data === consulta.data);

    if (consultaNoMesmoHorario) {
      throw new Error("Paciente já possui uma consulta neste horário!")
    }

    this.consultas.push(consulta);
    console.log(`Consulta agendada para ${consulta.data} com ${consulta.medico.nome}`);
  }

  adicionarExame(exame) {
    this.exames.push(exame);
    console.log(`Exame ${exame.nome} adicionado com resultado: ${exame.resultado}`);
  }

  adicionarEventoHistorico(evento) {
    this.historicoMedico.push(evento);
    console.log(`Evento médico adicionado ao histórico do paciente ${this.nome}`);
  }
}
