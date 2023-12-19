


function VkPhotoComponent(props: {user: any, photo: any}) {

    return (
        <div className="container">
            <div className="year-block">Year: {props.photo?.year}</div>
            {!props.photo?.photos?.length ? 
            <div className="no-data">You dont have any photos</div> 
            : <div className="">You have {props.photo.photos.length} photos</div>  }
            
        </div>
    );
}

export default VkPhotoComponent;