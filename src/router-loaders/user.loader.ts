import { redirect } from "react-router-dom";

function userLoader(props: any) {
    const info = localStorage.getItem("user");
    return !info ? redirect("/login") : {isLoggedIn: !!info, userInfo: info ? JSON.parse(info) : null}
}

export default userLoader;