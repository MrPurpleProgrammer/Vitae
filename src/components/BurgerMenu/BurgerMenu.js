import $ from 'jquery'
import { useEffect, useState } from 'react'
function BurgerMenu(props) {
    const [initialState, setInitialState] = useState(props.open);
    const [openState, setOpenState] = useState(props.open);
    let handleMenuClickAnimation = () => {
        if (openState) {
            setOpenState(false)
            props.collapseState(false);
        }
        else {
            setOpenState(true)
            props.collapseState(true);
        }
    }
    let buttonMenu = () => {
        if (navigator.platform === 'iPhone') {
            return (
                <button className="burgerMenu-iphone opened" onClick={() => handleMenuClickAnimation()} aria-label="Burger Menu">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path className="line line1" fill="none" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" fill="none" d="M 20,40 l64 10" />
                        <path className="line line3" fill="none" d="M 20,60 H 80" />
                        <path className="line line4" fill="none" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            )
        }
        else {
            return (
                <button className="burgerMenu opened" onClick={() => handleMenuClickAnimation()} aria-label="Burger Menu">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path className="line line1" fill="none" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" fill="none" d="M 20,40 l64 10" />
                        <path className="line line3" fill="none" d="M 20,60 H 80" />
                        <path className="line line4" fill="none" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            )
        }
    }
    useEffect(() => {
        if (initialState === false) {
            props.collapseState(false);
        }
        else {
            if(navigator.platform === 'iPhone') $('.burgerMenu-iphone').toggleClass('opened');
            else {
                $('.burgerMenu').toggleClass('opened');
            }
        }
    }, [initialState])
    return (
        buttonMenu()
    )
}

export default BurgerMenu
