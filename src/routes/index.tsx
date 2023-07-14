import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import StudentsIndex from "../pages/Students";
import StudentView from "../pages/Students/Student";
import CreateStudent from "../pages/Students/Create";
import { getAllDepartments, getAllStudents, getAllTeachers, getDepartmentById, getStudentById, getTeacherById, getTeachersReviews } from "../utils/requests";
import DepartmentIndex from "../pages/Departments";
import DepartmentView from "../pages/Departments/Department";
import CreateDepartment from "../pages/Departments/Create";
import TeacherIndex from "../pages/Teachers";
import TeacherView from "../pages/Teachers/Teacher";
import CreateTeacher from "../pages/Teachers/Create";
import UpdateStudent from "../pages/Students/Edit";
import EditTeacher from "../pages/Teachers/Edit";
import EditDepartment from "../pages/Departments/Edit";
import TeacherReviews from "../pages/Teachers/TeacherReviews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/students',
    element: <StudentsIndex />,
    loader: async () => {
      return await getAllStudents();
    }
  },
  {
    path: '/students/:id',
    element: <StudentView />,
    loader: async ({ params }) => {
      return await getStudentById(params.id as string);
    }
  },
  {
    path: '/students/create',
    element: <CreateStudent />
  },
  {
    path: '/students/:id/edit',
    element: <UpdateStudent />,
    loader: async ({ params }) => {
      return await getStudentById(params.id as string);
    }
  },
  {
    path: '/departments',
    element: <DepartmentIndex />,
    loader: async () => {
      return await getAllDepartments();
    }
  },
  {
    path: '/departments/:id',
    element: <DepartmentView />,
    loader: async ({ params }) => {
      return await getDepartmentById(params.id as string);
    }
  },
  {
    path: '/departments/:id/edit',
    element: <EditDepartment />,
    loader: async ({ params }) => {
      return await getDepartmentById(params.id as string);
    }
  },
  {
    path: '/departments/create',
    element: <CreateDepartment />
  },
  {
    path: '/teachers',
    element: <TeacherIndex />,
    loader: async () => {
      return await getAllTeachers();
    }
  },
  {
    path: '/teachers/:id',
    element: <TeacherView />,
    loader: async ({ params }) => {
      return await getTeacherById(params.id as string);
    }
  },
  {
    path: '/teachers/:id/edit',
    element: <EditTeacher />,
    loader: async ({ params }) => {
      return await getTeacherById(params.id as string);
    }
  },
  {
    path: '/teachers/:id/reviews',
    element: <TeacherReviews />,
    loader: async ({ params }) => {
      return await getTeachersReviews(params.id as string);
    }
  },
])

const Router = () => <RouterProvider router={router} />

export default Router;
