import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import StudentsIndex from "../pages/Students";
import StudentView from "../pages/Students/Student";
import CreateStudent from "../pages/Students/Create";
import { getAllStudents, getStudentById } from "../utils/requests";

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
  }
])

const Router = () => <RouterProvider router={router} />

export default Router;
