import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul style={{listStyleType: 'none'}}>
        <li>
          <Link id="login-link" to={'/login'}>Log In</Link>
        </li>
        <li>
          <Link id="signup-link"  to={'/signup'}>Sign Up</Link>
        </li>
      </ul>
    </>
  )
}