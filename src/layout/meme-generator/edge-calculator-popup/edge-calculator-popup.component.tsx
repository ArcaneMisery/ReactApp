import { useState } from "react";
import TimePickerBoxComponent from "../../../shared/time-picker-box/time-picker-box.component";
import "./edge-calculator-popup.component.scss"

function EdgeCalculatorPopupComponent() {
    const [form, setForm] = useState({
        dateTime: "",
        lifeTime: ""
    });

    const handleForm = (formValue: {controlName: string, value: string}) => {
        const dateNow = new Date();
        const ab = dateNow.getTime() - (new Date(formValue.value).getTime());
        const years = (ab / (1000 * 60 * 60 * 24 * 360));
        const mounthes = ((years - (Math.floor(years))) * 360 * 24 * 60 * 60 * 1000) / (1000 * 60 * 60 * 24 * 30);
        const days = (((mounthes - Math.floor(mounthes))) * 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24);
        const res = `${years.toFixed(0)} years, ${mounthes.toFixed(0)} mounthes, 
        ${Math.floor(days)} days`;
        setForm({...form, lifeTime: res, dateTime: formValue.value});
    }

    return (
        <div className="popup-wrapper">
            <div className="form-fill">
                <h1>Edge calculator</h1>
                <TimePickerBoxComponent controlName="dateTime" innerLabel={"your birthday"} value={form.dateTime} handleValue={handleForm}></TimePickerBoxComponent>
                <div className="lifetime-info">
                    you have lived: {form.lifeTime}
                </div>
            </div>
        </div>
    );
}

export default EdgeCalculatorPopupComponent;