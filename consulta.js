class Consulta {
  constructor(id, data, paciente, medico, motivo, status, observacoes) {
    this.id = id;
    this.data = data;
    this.paciente = paciente;
    this.medico = medico;
    this.motivo = motivo;
    this.status = status;
    this.observacoes = observacoes;
  }
}

module.exports = Consulta;
