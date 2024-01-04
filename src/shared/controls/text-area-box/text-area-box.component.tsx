
import { useEffect, useRef } from "react";
import "./text-area-box.component.scss"
import { Control, Controller } from "react-hook-form";
import { rules } from "../../../core-module/models/control-models";

function TextAreaBoxComponent(props: {control: Control<any>, name: string, isUpperCase?: boolean, rules?: rules, isNeedFocus?: boolean }) {
    const textareaRef = useRef(null);
    useEffect(() => {
        if (props.isNeedFocus) {
            (textareaRef?.current as HTMLTextAreaElement | null)?.focus();
        }
    }, [props.isNeedFocus]);
        
    return (
        <div className="textarea-wrapper">
            <Controller
                name={props.name}
                control={props.control}
                rules={props.rules}
                render={({ field, fieldState }) => (
                    <textarea value={field?.value || ""} ref={textareaRef} onChange={(event) => field.onChange(event.target.value)} className={fieldState.invalid ? "input-error" : ""} />
                  )}
            />
        </div>
    )
}


export default TextAreaBoxComponent;