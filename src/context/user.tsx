import { createContext, useContext, useState } from "react";
import { checkLogin } from "../utils/requests";
import { Student } from "../utils/models";

interface UserInterface {
  userId?: string;
  isAdmin?: boolean;
  login(email: string, password: string): void;

}

const UserContext = createContext<UserInterface>({
  userId: '',
  isAdmin: false,
  login: (email, password) => {}
})

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({
    userId: '',
    isAdmin: false
  });
  
  const login = async (email: string, password: string) => {
    const student = (await checkLogin(email, password)) as Student;
    setUser({
      userId: student.id as string,
      isAdmin: student.is_admin as boolean
    })
  } 

  return (
    <UserContext.Provider value={{...user, login}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
}
