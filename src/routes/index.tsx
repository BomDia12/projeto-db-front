import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentsIndex from "../pages/Students";
import StudentView from "../pages/Students/Student";
import CreateStudent from "../pages/Students/Create";
import { getAllClasses, getAllDepartments, getAllReports, getAllStudents, getAllTeachers, getClassReviews, getDepartmentById, getStudentById, getTeacherById, getTeachersReviews } from "../utils/requests";
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
import ClassesIndex from "../pages/Classes";
import ClassView from "../pages/Classes/Class";
import Main from "../pages";
import ReportList from "../pages/Reports";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
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
    path: '/teachers/:id/create',
    element: <CreateTeacher />,
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
  {
    path: '/classes',
    element: <ClassesIndex />,
    loader: async () => {
      return await getAllClasses();
    }
  },
  {
    path: '/classes/:id',
    element: <ClassView />,
    loader: async ({ params }) => {
      return await getClassReviews(params.id as string);
    }
  },
  {
    path: '/reports',
    element: <ReportList />,
    loader: async () => {
      return await getAllReports();
    }
  },
])

const Router = () => <RouterProvider router={router} />

export default Router;
