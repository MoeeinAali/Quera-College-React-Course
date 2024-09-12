import {useReducer} from "react";
import Login from "./components/Login";
import {authReducer} from "./reducers/authReducer";
import Logout from "./components/Logout";
import {AuthActionType} from "./types/auth";

function App() {
    const [auth, dispatch] = useReducer(authReducer, {
        isLoggedIn: false,
        userName: "",
    });

    function handleLogin(userName: string) {
        dispatch({
            type: AuthActionType.LOG_IN,
            userName: userName,
        });
    }

    function handleLogout() {
        dispatch({
            type: AuthActionType.LOG_OUT,
        });
    }

    return (
        <>
            <h1>
                {auth.isLoggedIn ? `Hello ${auth.userName}` : "You're not Logged In !"}
            </h1>
            <div>
                {auth.isLoggedIn && <Logout handleLogout={handleLogout}/>}
                {!auth.isLoggedIn && <Login handleLogin={handleLogin}/>}
            </div>
        </>
    );
}

export default App;
