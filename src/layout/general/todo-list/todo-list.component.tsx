import { useEffect, useState } from "react";
import TextBoxComponent from "../../../shared/controls/app-text-box/app-text-box.component";
import "./todo-list.component.scss";
import { useForm } from "react-hook-form";
import TimePickerBoxComponent from "../../../shared/controls/time-picker-box/time-picker-box.component";
import SelectBoxComponent from "../../../shared/controls/select-box/select-box.component";

function ToDoListComponent(props: any) {
  const workTypesList = [
    {key: "gym", value: "Gym"},
    {key: "work", value: "Work"},
    {key: "home", value: "Home"},
  ];
  const testTypesList = [
    {key: "gym", value: "Gym"},
    {key: "work", value: "Work"},
    {key: "home", value: "Home"},
    {key: "abortion", value: "Abortion"},
    {key: "academic", value: "Academic"},
    {key: "brilliant", value: "Brilliant"},
    {key: "capital", value: "Capital"},
    {key: "detail", value: "Detail"},
    {key: "destruction", value: "Destruction"},
    {key: "employee", value: "Employee"},
    {key: "employment", value: "Employment"},
    {key: "fishing", value: "Fishing"},
  ];

  const [list, setList] = useState<{todo: string, time: string}[]>([]);
  const { control, reset, getValues, formState, trigger } = useForm<any>({
    defaultValues: {
      todo: null,
      time: null,
      type: null,
      typeSec: null
    }
  });
  const { isValid } = formState;
  const clearList = () => {
    setList([]);
    localStorage.removeItem("todos")
  }

  const handleList = (listItem: {todo: string, time: string}) => {
    if (!isValid) {
      trigger();
      return;
    }
    setList([...list, listItem]);
    reset();
  }

  useEffect(() => {
    const items = localStorage.getItem("todos");
    if (items) {
      setList(JSON.parse(items));
    }
  }, []);

  const saveList = () => {
    if(!list.length) {
      return;
    }
    localStorage.setItem("todos", JSON.stringify(list));
  }

  return (
    <div className="todo-wrapper">
      <div className="add-form">
        <label>TODO</label>
        <TextBoxComponent  control={control} name="todo" rules={{ required: true }}></TextBoxComponent>
        <label>When</label>
        <TimePickerBoxComponent control={control} name="time"></TimePickerBoxComponent>
        <label>Type of work</label>
        <SelectBoxComponent control={control} name="type" list={workTypesList}></SelectBoxComponent>
        <label>Test box</label>
        <SelectBoxComponent control={control} name="typeSec" list={testTypesList} withSearch={true} ></SelectBoxComponent>
        <div className="submit-block">
        <button className="add" onClick={() => handleList(getValues())}>
          Add TODO
        </button>
        <button className="save" onClick={() => saveList()}>
          Save
        </button>
        <button className="save" onClick={() => clearList()}>
          Delete all
        </button>
        </div>
      </div>
      <div className="todo-list-container">
      {
        list.map((element: {todo: string, time: string}, index) => <p key={element.todo + index}>{element.todo};{element.time}</p> )
      }
      </div>
    </div>
  );
}

export default ToDoListComponent