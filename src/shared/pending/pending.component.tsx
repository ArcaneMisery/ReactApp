import "./pending.component.scss";


function PendingComponent() {

    return (
        <div className="pending-container">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ background: "rgba(0, 0, 0, 0)", display: "block" }} width="60px" height="60px" viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#85a2b6" strokeWidth="9" r="32"
                    strokeDasharray="150.79644737231007 52.26548245743669" transform="rotate(334.662 50 50)">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9900990099009901s"
                        values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    );
}

export default PendingComponent;