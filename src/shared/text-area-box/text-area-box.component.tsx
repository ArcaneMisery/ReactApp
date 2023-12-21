
import "./text-area-box.component.scss"


function TextAreaBoxComponent(props: {innerLabel?: string, value: string | null, handleValue: any, controlName: string, maxLength?: number, disabled?: null | true}) {

        
    return (
        <div className="textarea-wrapper">
            {props.innerLabel && <label>{props.innerLabel}</label>}
            <textarea  value={props.value || ""} maxLength={props.maxLength || 255} disabled={!!props.disabled} onChange={e => props.handleValue({controlName: props.controlName, value: e.target.value})} />
        </div>
    )
}


export default TextAreaBoxComponent;