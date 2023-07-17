export interface Student {
    id?: string;
    email: string;
    nome?: string;
    senha?: string;
    curso?: string;
    is_admin?: boolean;
}

export interface Department {
    id?: string;
    nome?: string;
}

export interface Teacher {
    id?: string;
    email?: string;
    nome?: string;
    id_departamento?: string;
    nota?: number;
}

export interface Subject {
    id?: string;
    nome?: string;
    id_departamento?: string;
    codigo?: string;
}

export interface Class {
    id?: string;
    id_professor?: string;
    id_disciplina?: string;
    codigo?: string;
    nota?: number;
}

export interface Review {
    id?: string;
    id_estudante?: string;
    id_turma?: string;
    nota: number;
    descricao: string;
}

export interface Report {
    id?: string;
    id_avaliacao?: string;
    id_estudante?: string;
}

export type Selectables = Teacher | Department | Subject

export interface Option {
    value: string;
    label: string;
}

export interface TeacherReviews {
    id: string;
    nome_professor?: string;
    nota?: number;
    descricao?: string;
}

export interface ClassReviews {
    id: string;
    codigo?: string;
    id_avaliacao?: string;
    nota?: number;
    descricao: string;
}

export interface ReportReview {
    id?: string;
    id_avaliacao?: string;
    descricao?: string;
}
