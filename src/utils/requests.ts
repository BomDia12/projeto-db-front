import { api } from "./api";
import { Department, ReportReview, Student, Teacher } from "./models";
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
    return (await api.get(`/teachers/${id}/reviews`)).data;
  } catch(e) {
    alert(e)
  }
};

export const getAllClasses = async () => {
  try {
    return (await api.get('/classes')).data;
  } catch(e) {
    alert(e)
  }
}

export const getClassReviews = async (id: string) => {
  try {
    return (await api.get(`/classes/${id}/reviews`)).data;
  } catch(e) {
    alert(e)
  }
}

export const checkLogin = async (email: string, password: string) => {
  try {
    return (await api.post('login', { email, password })).data;
  } catch(e) {
    alert(e)
  }
}

export const getAllReports = async () => {
  try {
    return (await api.get('/reports')).data as ReportReview[];
  } catch (e) {
    alert(e);
  }
}

export const acceptReport = async (reviewId: string) => {
  try {
    await api.get(`/reports/${reviewId}/accept-report`);
    alert('Denuncia Aceita')
  } catch (e) {
    alert(e);
  }
}

export const refuseReport = async (reportId: string) => {
  try {
    await api.delete(`/reports/${reportId}`)
    alert('Denuncia deletada')
  } catch (e) {
    alert(e)
  }
}

export const reportReview = async (reviewId: string, userId: string) => {
  try {
    await api.post('/reports', { id_avaliacao: reviewId, id_estudante: userId })
    alert('Mensagem denunciada! Um Admin vai conferi-la.')
  } catch(e) {
    alert(e)
  }
}
