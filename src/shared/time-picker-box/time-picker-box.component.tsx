


function TimePickerBoxComponent(props: {innerLabel: string, value: string | null, handleValue: any, controlName: string}) {

    const formatValue = (value: string) => {
        return value;
    }

    
    return (
        <div className="picker-wrapper">
            {props.innerLabel && <label>{props.innerLabel}</label>}
            <input type="date" value={props.value || ""} onChange={e => props.handleValue({controlName: props.controlName, value: formatValue(e.target.value)})} />
        </div>
    )
}

export default TimePickerBoxComponent;