import React, {useEffect} from "react";

const RevealRight = () => {
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.getElementsByClassName("reveal-right");
            const windowHeight = window.innerHeight;
            const revealPoint = 200;

            for (let i = 0; i < reveals.length; i++) {
                const element = reveals[i];
                const position = element.getBoundingClientRect().top;

                if (position < windowHeight - revealPoint) {
                    element.style.opacity = "1";
                    element.style.transform = "translateX(0)";
                } else {
                    element.style.opacity = "0";
                    element.style.transform = "translateX(4rem)";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return <></>;
}

export default RevealRight;