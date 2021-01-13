import $ from 'jquery'
import { useEffect, useState } from 'react'
import scrollSvg from '../../assets/ScrollDown.svg'
function ScrollDown(props) {
    useEffect(() => {
    }, [])
    return (
        <div className="scrollDownLogo">
            <svg
                width="40px"
                height="100%"
                viewBox="0 0 247 390"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 1.5,
                }}
                {...props}
            >
                <path
                    id="wheel"
                    d="M123.359,79.775l0,72.843"
                    style={{
                        fill: "none",
                        stroke: "#aa6aeb",
                        strokeWidth: 20,
                    }}
                />
                <path
                    id="mouse"
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style={{
                        fill: "none",
                        stroke: "#859fce",
                        strokeWidth: 20,
                    }}
                />
            </svg>
            <h1>Scroll Down</h1>
        </div>
    )
}

export default ScrollDown
