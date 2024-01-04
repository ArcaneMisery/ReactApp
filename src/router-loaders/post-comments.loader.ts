import { redirect } from "react-router-dom";
const postCommentsLoader = async (id: any) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // const info = localStorage.getItem("user");
    // return !info ? redirect("/login") : {isLoggedIn: !!info, userInfo: info ? JSON.parse(info) : null}
}

export default postCommentsLoader;