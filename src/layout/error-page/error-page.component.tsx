import { useRouteError } from "react-router-dom";
import "./error-page.component.scss";

function ErrorPage() {
    const error = useRouteError() as {message?: string, statusText?: string};

    return (
        <div className="container">
            <div className="error">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;