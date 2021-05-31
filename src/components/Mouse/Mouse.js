import { gsap } from "gsap";
import { useEffect } from "react";

function Mouse(props) {
    let cursor;
    let links;
    let turbulence;
    let circle;
    let circle_shadow;
    let durationTime;
    let pointerDOMS = ".innerNavText span, .burgerMenu svg, .burgerMenu svg path, .workItem, .workItem div, .workItem div p, ._workItem, ._workItem div, ._workItem div p, .btn-glitch-fill, .btn-glitch-fill span, .music i, .filterList div p, button, a, i, .cell, .holder .note, .projectLinks h1, .projectLearnContainer div, .projectLearnContainer div img, .projectLearnContainer div p"
    useEffect(() => {
        cursor = document.querySelector(".cursor");
        links = document.querySelectorAll(".link");
        turbulence = document.querySelector("feTurbulence");
        circle = document.querySelector(".cursor-circle-main");
        circle_shadow = document.querySelector(".cursor-circle-shadow");
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
        
        document.addEventListener("touchstart", (e) => {
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
            if (!e.target.matches(pointerDOMS)) return;
            if(circle.attributes.r.value == "20") {
                gsap.to(circle, {
                    duration: 0.3,
                    startAt: { attr: { r: 20 } },
                    attr: { r: 8 }
                });
                gsap.to(circle_shadow, {
                    duration: 0.3,
                    startAt: { attr: { r: 20 } },
                    attr: { r: 10 }
                });
            }
            // gsap.to(turbulence, {
            //     duration: 3,
            //     startAt: { attr: { baseFrequency: 0.04 } },
            //     attr: { baseFrequency: 0.1 }
            // });
            else {
                gsap.to(circle, {
                    duration: 0.3,
                    startAt: { attr: { r: 8 } },
                    attr: { r: 8 }
                });
                gsap.to(circle_shadow, {
                    duration: 0.3,
                    startAt: { attr: { r: 10 } },
                    attr: { r: 10 }
                });
            }
        });
    
        document.addEventListener("mouseout", (e) => {
            if (!e.target.matches(pointerDOMS)) return;
            // gsap.to(turbulence, {
            //     duration: 2,
            //     startAt: { attr: { baseFrequency: 0.1 } },
            //     attr: { baseFrequency: 0 }
            // });
            if(circle.attributes.r.value == "8") {
                gsap.to(circle, {
                    duration: 0.3,
                    startAt: { attr: { r: 8 } },
                    attr: { r: 20 }
                });
                gsap.to(circle_shadow, {
                    duration: 0.3,
                    startAt: { attr: { r: 10 } },
                    attr: { r: 20 }
                });
            }
            else {
                gsap.to(circle, {
                    duration: 0.3,
                    startAt: { attr: { r: 20 } },
                    attr: { r: 20 }
                });
                gsap.to(circle_shadow, {
                    duration: 0.3,
                    startAt: { attr: { r: 20 } },
                    attr: { r: 20 }
                });
            }
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
        <circle className="cursor-circle-shadow" cx="70" cy="70" r="20" style={{fill: "rgb(30 85 180)", stroke: "rgb(30 85 180)"}}></circle>
        <circle className="cursor-circle-main" cx="74" cy="68" r="20" style={{fill: "#be7dff", stroke: "#be7dff"}}></circle>
      </svg>
    )
}

export default Mouse