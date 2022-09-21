import React, { useState } from "react";

export default function useModal() {
    const [isOpen, setisOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");


    const toggle = (event: React.MouseEvent<HTMLImageElement>) => {
        // event.preventDefault();
        let img:string = event.currentTarget.src;
        setisOpen(!isOpen);
        console.log(img)
        setImgSrc(img);
        console.log("IMG : "+ imgSrc);
        console.log("IsOpen : " + isOpen);
    };

    return {
        isOpen,
        toggle,
        imgSrc,
    };
}
