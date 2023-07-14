import { redirect } from "react-router-dom";
import { api } from "./api";
import { Department, Student, Teacher, TeacherReviews } from "./models";
import { isEmpty } from "lodash";

export const getAllStudents = async () => {
  const data = await api.get('/students');

  return data.data as Promise<Student[]>;
};

export const getStudentById = async (id: string) => {
  try {
    const req = await api.get(`/students/${id}`);

    const data = req.data as Promise<Student>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (isEmpty(data)) {
      throw 'no data';
    }

    return data;
  } catch(e) {
    console.log(e)
    return 'error';
  }
}

export const createStudent = async (student: Student) => {
  await api.post('/students', student).catch(error => {
    alert(error)
  });

  alert('Aluno criado com sucesso')
};

export const updateStudent = async (student: Student) => {
  try {
    await api.put('/students', student)
    alert('Aluno editado com sucesso')
  } catch(e) {
    alert(e)
  }
};

export const getAllDepartments = async () => {
  const data = await api.get('/departments');

  return data.data as Promise<Department[]>;
};

export const getDepartmentById = async (id: string) => {
  try {
    const req = await api.get(`/departments/${id}`);

    const data = req.data as Promise<Department>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (isEmpty(data)) {
      alert('Este departamento não existe');
    }

    return data;
  } catch(e) {
    alert(e)
    return 'error';
  }
}

export const createDepartment = async (department: Department) => {
  await api.post('/departments', department).catch(error => {
    return alert(error)
  });

  alert('Department criado com sucesso')
};

export const updateDepartment = async (department: Department) => {
  try {
    await api.put('/departments', department)
    alert('Departamento editado com sucesso')
  } catch(e) {
    alert(e)
  }
};

export const getAllTeachers = async () => {
  const data = await api.get('/teachers');

  return data.data as Promise<Teacher[]>;
};

export const getTeacherById = async (id: string) => {
  try {
    const req = await api.get(`/teachers/${id}`);

    const data = req.data as Promise<Teacher>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (isEmpty(data)) {
      alert('Este professor não existe');
    }

    return data;
  } catch(e) {
    alert(e)
    return 'error';
  }
}

export const createTeacher = async (teacher: Teacher) => {
  try{
    await api.post('/teachers', teacher)
    alert('Professor criado com sucesso')
  } catch (error) {
    return alert(error)
  }
};

export const updateTeacher = async (teacher: Teacher) => {
  try {
    await api.put('/teachers', teacher)
    alert('Professor editado com sucesso')
  } catch(e) {
    alert(e)
  }
};

export const getTeachersReviews = async (id: string) => {
  try {
    return await api.get(`/teachers/${id}/reviews`) as TeacherReviews[];
  } catch(e) {
    alert(e)
  }
};
