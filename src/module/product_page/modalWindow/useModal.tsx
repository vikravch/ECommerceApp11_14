import React, { useState } from "react";

export default function useModal() {
    const [isOpen, setisOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    const toggle = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        setisOpen(!isOpen);
        const img: HTMLImageElement = event.currentTarget;
        setImgSrc(img.src);
        console.log(img.src)
        console.log("IMG : "+ imgSrc.toString());
        console.log("IsOpen : "+ isOpen.toString());
    };

    return {
        isOpen,
        toggle,
        imgSrc,
    };
}
