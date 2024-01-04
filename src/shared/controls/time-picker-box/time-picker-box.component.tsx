import { Control, Controller } from "react-hook-form";
import { rules } from "../../../core-module/models/control-models";


function TimePickerBoxComponent(props: {control: Control<any>, name: string, rules?: rules }) {
    return (
        <div className="time-box">
            <Controller
                name={props.name}
                control={props.control}
                rules={props.rules}
                render={({field, fieldState}) => (
                    <input value={field?.value || ""} type="time" onChange={(event) => field.onChange(event.target.value)} className={fieldState.invalid ? "input-error" : ""}/>
                )}
            />
        </div>
    )

}

export default TimePickerBoxComponent;
