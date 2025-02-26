const Consulta = require("./consulta");
const Exame = require("./exame");
const Medico = require("./medico");
const Paciente = require("./paciente");
const Prontuario = require("./prontuario");

const paciente1 = new Paciente(
  "1",
  "123.456.789-00",
  "João Silva",
  "1990-01-01",
  "Masculino",
  "0+",
  "Nenhuma",
  "Rua das Flores, 123",
  "(11) 99999-9999",
  "joao.silva@email.com",
  { nome: "Maria Silva", telefone: "(11) 88888-8888" },
);

const medico1 = new Medico(
  "101",
  "CRM/SP 123456",
  "Dr. Carlos",
  ["Cardiologia", "Clínica Geral"],
  "(11) 77777-7777",
  { dias: ["Segunda", "Quarta"], horario: "14:00-18:00" },
);

const consulta1 = new Consulta(
  "201",
  "2023-10-15",
  paciente1,
  medico1,
  "Dor no peito",
  "Agendada",
  "Paciente relatou dor no peito após esforço físico.",
);

const exame1 = new Exame(
  "301",
  "Hemograma",
  "Normal",
  "2023-10-10",
  "Laboratório X",
  "Dr. Ana",
  paciente1,
);

const prontuario1 = new Prontuario("401", paciente1);

paciente1.agendarConsulta(consulta1);
paciente1.adicionarExame(exame1);
prontuario1.adicionarDiagnostico("Hipertensão");
prontuario1.adicionarTratamento("Redução no consumo de sal");
prontuario1.adicionarMedicamento("Captopril");

console.log(consulta1);
