import { gsap } from "gsap";
import { useEffect } from "react";

function Mouse(props) {
    let cursor;
    let links;
    let turbulence;
    let circle;
    let durationTime;

    useEffect(() => {
        cursor = document.querySelector(".cursor");
        links = document.querySelectorAll(".link");
        turbulence = document.querySelector("feTurbulence");
        circle = document.querySelector(".cursor-circle");
        durationTime = 0.5;
    
        document.addEventListener("mousemove", (e) => {
            cursor.style.display = "block";
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
        });

        document.addEventListener("touchmove", (e) => {
            cursor.style.display = "block";
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
        });

        document.addEventListener("scroll", (e) => {
            cursor.style.display = "none";
        });

        document.addEventListener("click", (e) => {
            gsap.to(turbulence, {
                duration: 3,
                ease: "back.out(1.7)",
                startAt: { attr: { baseFrequency: 0.05 } },
                attr: { baseFrequency: 0 }
            });
            gsap.to(circle, {
                duration: 3,
                ease: "back.out(1.7)",
                startAt: { attr: { r: 20 } },
                attr: { r: 20 }
            });
        });
    
        document.addEventListener("mouseover", (e) => {
            if (!e.target.matches(".innerNavText span, .burgerMenu svg, .workItem, .btn-glitch-fill, .btn-glitch-fill span, .music i")) return;
            gsap.to(turbulence, {
                duration: 3,
                startAt: { attr: { baseFrequency: 0.04 } },
                attr: { baseFrequency: 0.1 }
            });
    
            gsap.to(circle, {
                duration: 1,
                startAt: { attr: { r: 20 } },
                attr: { r: 40 }
            });
        });
    
        document.addEventListener("mouseout", (e) => {
            if (!e.target.matches(".innerNavText span, .burgerMenu svg, .workItem, .btn-glitch-fill, .btn-glitch-fill span, .music i")) return;
            gsap.to(turbulence, {
                duration: 2,
                startAt: { attr: { baseFrequency: 0.1 } },
                attr: { baseFrequency: 0 }
            });

            gsap.to(circle, {
                duration: 1,
                startAt: { attr: { r: 40 } },
                attr: { r: 20 }
            });
        });    
    }, [])

    return(
        <svg className="cursor" width="75" height="75" viewBox="0 0 140 140">
        <defs>
          <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="10" result="warp"></feTurbulence>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="60" in="SourceGraphic" in2="warp"></feDisplacementMap>
          </filter>
        </defs>
        <circle className="cursor-circle" cx="70" cy="70" r="20" style={{fill: "rgb(30 85 180)", stroke: "rgb(30 85 180)"}}></circle>
        <circle className="cursor-circle" cx="74" cy="68" r="20" style={{fill: "#be7dff", stroke: "#be7dff"}}></circle>
      </svg>
    )
}

export default Mouse