import { Control, Controller} from "react-hook-form";
import "./app-text-box.component.scss";
import { rules } from "../../../core-module/models/control-models";

type inputType = "number" | "text" | "password"; 

function TextBoxComponent(props: {control: Control<any>, name: string, isUpperCase?: boolean, rules?: rules, inputType?: inputType}) {
  const inputType: inputType = props.inputType ? props.inputType : "text";
  const formatValue = (value: string): string => {
    if (props.isUpperCase) {
      return value.toUpperCase();
    }
    return value;
  }

  return (
    <div className="text-box">
      <Controller
        name={props.name}
        control={props.control}
        rules={props.rules}
        render={({ field, fieldState }) => (
          <input value={field?.value || ""} type={props.inputType} onChange={(event) => field.onChange(formatValue(event.target.value))} className={fieldState.invalid ? "input-error" : ""}/>
        )}
      />
    </div>
  );
}

export default TextBoxComponent;
