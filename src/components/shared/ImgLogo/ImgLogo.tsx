import React from "react";
import { iImgLogoProps } from "./ImgLogo.d";

export const ImgLogo: React.FC<iImgLogoProps> = ({
    imgID,
    imgSrcLight,
    imgSrcDark,
    imgAlt,
    className,
    theme = "light", // Default to light mode
}) => {

    // Navigation links modified behavior for horizontal scroll
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    // Determine the image source based on the theme
    const imgSrc = theme === "dark" ? imgSrcDark : imgSrcLight;
    return (
        <button
           onClick={()=>scrollToSection("hero")}
            className="flex items-center transition-transform duration-300 hover:scale-y-125 cursor-pointer"
        >
            <img
                key={imgID}
                src={imgSrc}
                alt={imgAlt}
                className={`${className || ''}`} //Optional className prop
            />
        </button>
    )
}

