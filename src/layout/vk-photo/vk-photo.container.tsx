import { connect } from "react-redux";
import VkPhotoComponent from "./vk-photo.component";
import { getPhotos, setYear } from "../../actions/vk-photo.actions";
import { useEffect } from "react";
import "./vk-photo.container.scss";




function VkPhotoContainer(props: any) {
    const {user, photos, setYearAction, getPhotosAction} = props;

    useEffect(() => {
        // console.log(user, photos, setYearAction, "effect");
    });

    const selectYear = (year: string) => {
        setYearAction(year);
        console.log(user, photos, setYearAction, "selectYear");
    }

    const getPhotos = (year: string) => {
        getPhotosAction(year);
        console.log(user, photos, setYearAction, "selectYear");
    }

    return (
        <div className="vk-container">
            <h1>Get your vk photo statistics</h1>
            <button type="button" onClick={() => getPhotos("2017")}>2017</button><button type="button" onClick={() => getPhotos("2020")}>2020</button>
            <VkPhotoComponent user={user} photo={photos} ></VkPhotoComponent>
        </div>
    );
}

const mapStateToProps = (store: any) => {
    return {
       user: store.authReducer,
       photos: store.VkPhotoReducer
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setYearAction: (year: any) => dispatch(setYear(year)),
        getPhotosAction: (year: any) => dispatch(getPhotos(year)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (VkPhotoContainer);