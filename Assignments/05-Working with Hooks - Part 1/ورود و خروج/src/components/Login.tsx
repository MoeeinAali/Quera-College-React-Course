import { useState } from "react";

interface LoginPropsType {
  handleLogin: (userName: string) => void;
}

export default function Login({ handleLogin }: LoginPropsType) {
  const [userName, setUserName] = useState("");

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }

  function onLogin() {
    handleLogin(userName);
  }

  return (
    <>
      <input id="username-input" value={userName} placeholder="Username" onChange={onInputChange} />
      <button id="login-button" disabled={!userName} onClick={onLogin}>Log In</button>
    </>
  );
}
