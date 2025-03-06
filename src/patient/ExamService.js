import { Exam } from "./Exam.js";

export class ExamService {
  constructor(examRepository) {
    this.examRepository = examRepository;
  }

  scheduleExam(examData) {
    const exam = new Exam(
      examData.id,
      examData.type,
      examData.result,
      examData.date,
      examData.local,
      examData.responsible,
      examData.patient,
    )

    this.examRepository.add(exam.id, exam);
    return exam;
  }

  findExamById(id) {
    return this.examRepository.findById(id);
  }

  findExamsByPatientId(patientId) {
    return this.examRepository.findByPatientId(patientId);
  }

  findExamsByType(type) {
    return this.examRepository.findByType(type);
  }

  findExamsByDate(date) {
    return this.examRepository.findByDate(date);
  }

  updateExam(examId, updatedData) {
    const exam = this.findExamById(examId);
    if (!exam) {
      throw new Error("Exam not found.");
    }

    Object.assign(exam, updatedData);

    this.examRepository.update(examId, exam);
    return exam;
  }

  deleteExam(examId) {
    const exam = this.findExamById(examId);
    if (!exam) {
      throw new Error("Exam not found.");
    }

    this.examRepository.delete(examId);
    return exam;
  }
}
