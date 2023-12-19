import "./app-text-box.component.scss";


function TextBoxComponent(props: {innerLabel: string, value: string | null, handleValue: any, controlName: string }) {
  return (
    <div className="text-box">
      <label>{props.innerLabel}</label>
      <input value={props.value || ""} onChange={e => props.handleValue({controlName: props.controlName, value: e.target.value})} type="text"/>
    </div>
  );
}

export default TextBoxComponent