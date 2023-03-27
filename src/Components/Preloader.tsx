import React from 'react';
import preloader from "./../assets/preloader.gif"

type PreloaderPropsType = {
    isFetching : boolean
}
const  Preloader = (props : PreloaderPropsType) => {
    return (
        <div>
            {props.isFetching && <img src={preloader} alt="" style={{ position: "absolute", top : "40%",left : "45%", width : "160px", height : "160px", borderRadius: "30%" }}/>}
        </div>
    );
};

export default Preloader;