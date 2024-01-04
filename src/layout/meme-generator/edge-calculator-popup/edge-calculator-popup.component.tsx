import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import "./edge-calculator-popup.component.scss"
import DatePickerBoxComponent from "../../../shared/controls/date-picker-box/date-picker-box.component";
import { useForm } from "react-hook-form";

function EdgeCalculatorPopupComponent(props: {setIsPopupOpened: any}) {
    const [lifeTime, setLifeTime] = useState("");
    const { control, watch } = useForm({
        defaultValues: {
            date: null
        }
    });

    useEffect(() => {
        const subscription = watch((data) => {
            handleForm(data.date);
        });
        return () => {
            subscription.unsubscribe();
        };
    });

    const handleForm = (date: string | null | undefined) => {
        if (!date) {
            return;
        }
        const dateNow = new Date();
        const ab = dateNow.getTime() - (new Date(date).getTime());
        const years = (ab / (1000 * 60 * 60 * 24 * 365));
        const mounthes = ((years - (Math.floor(years))) * 360 * 24 * 60 * 60 * 1000) / (1000 * 60 * 60 * 24 * 30);
        const days = (((mounthes - Math.floor(mounthes))) * 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24);
        const res = `${years.toFixed(0)} years, ${mounthes.toFixed(0)} mounthes, 
        ${Math.floor(days)} days`;
        setLifeTime(res);
    }

    return (
        <div className="popup-wrapper">
            <div className="form-fill">
                <article>
                    <h1>Age calculator</h1>
                    <CloseIcon className="button-icon" onClick={() => props.setIsPopupOpened(false)} />
                </article>
                <div className="popup-body">
                    <DatePickerBoxComponent control={control} name="date" ></DatePickerBoxComponent>
                    <div className="lifetime-info">
                        you have lived: {lifeTime}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EdgeCalculatorPopupComponent;