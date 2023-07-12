import { redirect } from "react-router-dom";
import { api } from "./api";
import { Student } from "./models";
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
  const req = await api.post('/students', student);

  redirect('')
}
