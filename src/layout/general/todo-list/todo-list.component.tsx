import { useEffect, useState } from "react";
import TextBoxComponent from "../../../shared/app-text-box.component";

function ToDoListComponent(props: any) {

  const [list, setList] = useState<{todo: string, time: string}[]>([]);
  const [form, setForm] = useState({
    todo: "",
    time: ""
  });


  const handleForm = (formValue: {controlName: string, value: string}) => {
    setForm({...form, [formValue.controlName]: formValue.value });
  }

  const clearForm = () => {
    setForm({todo: "", time: ""});
  }

  const clearList = () => {
    setList([]);
    localStorage.removeItem("todos")
  }

  const handleList = (listItem: {todo: string, time: string}) => {
    if(!listItem.todo) {
      alert("Напишите что необходимо сделать");
      return;
    }
    setList([...list, listItem]);
    clearForm();
  }

  useEffect(() => {
    const items = localStorage.getItem("todos");
    if (items) {
      setList(JSON.parse(items))
    }
  }, []);

  const saveList = () => {
    if(!list.length) {
      return;
    }
    localStorage.setItem("todos", JSON.stringify(list))
  }

  return (
    <div>
      <div className="todo-list-container">
      {
        list.map((element: {todo: string, time: string}, index) => <p key={element.todo + index}>{element.todo};{element.time}</p> )
      }
      </div>
      <div className="add-form">
        <TextBoxComponent innerLabel="Что сделать" value={form.todo} handleValue={handleForm} controlName="todo" />
        <TextBoxComponent innerLabel="Когда" value={form.time} handleValue={handleForm} controlName="time" />
        <button className="add" onClick={() => handleList(form)}>
          Добавить Дело
        </button>
        <button className="save" onClick={() => saveList()}>
          Сохранить
        </button>
        <button className="save" onClick={() => clearList()}>
          Удлить
        </button>
      </div>
    </div>
  );
}

export default ToDoListComponent