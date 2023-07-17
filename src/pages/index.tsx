import { useUser } from "../context/user"
import Homepage from "./homepage";
import LoginPage from "./login";

const Main = () => {
  const { userId } = useUser();

  return userId === '' ?
    <LoginPage />
    :
    <Homepage />
}

export default Main;