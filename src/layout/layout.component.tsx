import { UserProp } from "../core-module/models/user-models";
import HeaderComponent from "./header/header.component";


function LayoutComponent(props: {user: UserProp}) {

    return (
        <HeaderComponent user={props.user} ></HeaderComponent>
    );
}

export default LayoutComponent;
