import { useEffect, useState } from "react";
import "./meme-generator.component.scss";
import TextBoxComponent from "../../shared/app-text-box/app-text-box.component";

function MemeGeneratorComponent(props?: any) {

    const [componentState, setComponentState] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    });

    const handleComponentState = (formValue: {controlName: string, value: string}) => {
        setComponentState({...componentState, [formValue.controlName]: formValue.value});
    }

    const [allMemes, setAllMemes] = useState<{url: string}[]>([]);

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
        handleComponentState({controlName: "randomImg", value: allMemes[randNum].url});
    }

    return (
        <div className="wrapper">
            <h2>Meme Generator</h2>
            <div className="form-wrapper">
              <TextBoxComponent controlName="topText" innerLabel={"topText"} value={componentState.topText} handleValue={handleComponentState}></TextBoxComponent>
              <TextBoxComponent controlName="bottomText" innerLabel={"bottomText"} value={componentState.bottomText} handleValue={handleComponentState}></TextBoxComponent>
              <button onClick={() => {handleSubmit()}} type="button" >Generate</button>
            </div>
            <div className="meme-container">
                <div className="image-wrapper">
                    <img src={componentState.randomImg} alt="" />
                    <h2 className="top">{componentState.topText}</h2>
                    <h2 className="bottom">{componentState.bottomText}</h2>
                </div>
            </div>
        </div>
    );
}

export default MemeGeneratorComponent;