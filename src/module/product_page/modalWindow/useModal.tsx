import React, { useState } from "react";

export default function useModal() {
    const [isOpen, setisOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("http");


    const toggle = (event: React.MouseEvent<HTMLImageElement>) => {
        // event.preventDefault();
        let img: string | null;
        if(event.currentTarget.src) {
            img = event.currentTarget.src;
        } else {
            const div = event.currentTarget as HTMLDivElement;
            img = div.getAttribute('data-guide');
        }
        img = img == null ? '' : img;

        setisOpen(!isOpen);
        // console.log(img.toString())
        // console.log(event.currentTarget.src)
        // console.log(img)
        setImgSrc(img);
        console.log("IMG : "+ img);
        console.log(imgSrc);
        console.log("IsOpen : " + isOpen);
    };

    return {
        isOpen,
        toggle,
        imgSrc,
    };
}
