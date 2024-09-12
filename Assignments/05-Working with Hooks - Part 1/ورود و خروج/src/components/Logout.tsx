interface LogoutPropsType {
  handleLogout: () => void;
}

export default function Logout({ handleLogout }: LogoutPropsType) {
  return <button id="logout-button" onClick={() => handleLogout()}>Log Out</button>;
}
