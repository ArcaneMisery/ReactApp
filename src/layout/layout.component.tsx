import { useLoaderData } from "react-router-dom";
import { UserProp } from "../core-module/models/user-models";
import HeaderComponent from "./header/header.component";


function LayoutComponent(props: any) {
    return (
        <HeaderComponent />
    );
}

export default LayoutComponent;
