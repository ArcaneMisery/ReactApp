import { useEffect, useState } from "react";
import "./meme-generator.component.scss";
import TextBoxComponent from "../../shared/controls/app-text-box/app-text-box.component";
import EdgeCalculatorPopupComponent from "./edge-calculator-popup/edge-calculator-popup.component";
import { useForm } from "react-hook-form";
import { getMemeGeneratorForm } from "./meme-form-builder.component";

function MemeGeneratorComponent(props?: any) {
    const [img, setImg] = useState("http://i.imgflip.com/1bij.jpg");
    const [allMemes, setAllMemes] = useState<{url: string}[]>([]);
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const { control, getValues } = useForm({
        defaultValues: getMemeGeneratorForm()
    });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((responce) => responce.json())
        .then((response) => {
            const memes = response.data.memes;
            setAllMemes(memes);
        });
    }, []);

    const handleSubmit = () => {
        const randNum = Math.floor(Math.random() * allMemes.length);
        setImg(allMemes[randNum].url);
    };

    return (
        <>
            <div className="wrapper">
                <h2>Meme Generator</h2>
                <div className="form-wrapper">
                    <div className="column">
                        <label>Text on top</label>
                        <TextBoxComponent control={control} name="topText"></TextBoxComponent>
                    </div>
                    <div className="column">
                        <label>Text on bottom</label>
                        <TextBoxComponent control={control} name="bottomText"></TextBoxComponent>
                    </div>
                    <button onClick={() => { handleSubmit() }} type="button" >Generate</button>
                    <button onClick={() => { setIsPopupOpened(true) }} type="button" >Age calculator</button>
                </div>
                <div className="meme-container">
                    <div className="image-wrapper">
                        <img src={img} alt="" />
                        <h2 className="top">{getValues("topText")}</h2>   
                        <h2 className="bottom">{getValues("bottomText")}</h2>
                    </div>
                </div>
            </div>
            {isPopupOpened && <EdgeCalculatorPopupComponent setIsPopupOpened={setIsPopupOpened} />}
        </>
    );
}

export default MemeGeneratorComponent;