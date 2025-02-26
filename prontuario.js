class Prontuario {
  constructor(id, paciente) {
    this.id = id;
    this.paciente = paciente;
    this.diagnosticos = [];
    this.tratamentos = [];
    this.medicamentos = [];
  }

  adicionarDiagnostico(diagnostico) {
    this.diagnosticos.push(diagnostico);
    console.log(`Diagnóstico adicionado ao prontuário do paciente ${this.paciente.nome}`);
  }

  adicionarTratamento(tratamento) {
    this.tratamentos.push(tratamento);
    console.log(`Tratamento adicionado ao prontuário do paciente ${this.paciente.nome}`);
  }

  adicionarMedicamento(medicamento) {
    this.medicamentos.push(medicamento);
    console.log(`Medicamento adicionado ao prontuário do paciente ${this.paciente.nome}`);
  }
}

module.exports = Prontuario;
