import { useState } from "react"
import { Button, Content, ElementList, Input, Title } from "../components";
import { useUser } from "../context/user";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();

  return (
    <Content>
      <Title>Login</Title>
      <ElementList hastitle>
        <Input
          setValue={setEmail}
          value={email}
          placeholder="Email"
        />
        <Input
          setValue={setPassword}
          value={password}
          placeholder="Senha"
          type="password"
        />
        <Button
          label="Logar"
          onClick={() => login(email, password)}
          width="20vw"
        />
      </ElementList>
    </Content>
  )
}

export default LoginPage;