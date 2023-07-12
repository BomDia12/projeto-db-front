import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import StudentsIndex from "../pages/Students";
import StudentView from "../pages/Students/Student";
import CreateStudent from "../pages/Students/Create";
import { getAllDepartments, getAllStudents, getDepartmentById, getStudentById } from "../utils/requests";
import DepartmentIndex from "../pages/Departments";
import DepartmentView from "../pages/Departments/Department";
import CreateDepartment from "../pages/Departments/Create";

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
    path: '/departments/create',
    element: <CreateDepartment />
  },
])

const Router = () => <RouterProvider router={router} />

export default Router;
