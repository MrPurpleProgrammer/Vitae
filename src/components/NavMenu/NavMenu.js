import BurgerMenu from '../BurgerMenu/BurgerMenu'
import $ from 'jquery'
import ProgressLine from '../ProgressLine/ProgressLine'
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
const NavMenu = forwardRef((props, ref) => {
    let location = useLocation();
    let history = useHistory();
    const [windowWidth, setWindowWidth] = useState($(window).width());
    const [openState, setOpenState] = useState(windowWidth > 1366 ? true : false);
    const [menuState, setMenuState] = useState('initial');
    useImperativeHandle(ref, () => ({
        setNavLineState(contentState) {
            if (contentState === 0 || contentState === 1) setMenuState('about');
            if (contentState === 2) setMenuState('works');
            if (contentState === 3) setMenuState('contact');
        }
    }));
    let handleMenuCollapse = () => {
        $('.burgerMenu').toggleClass('opened');
        if (openState === false) {
            $('#divInnerMenu').animate({ opacity: 0 }, () => {
                $('#divMenu').animate({ width: "120px" })
                $('.contentView').animate({ width: "100%" });
                $('.scrollDownLogo').css({ left: "45%" });
                $('.initialLogoState').css({ width: "100%" });
                $('.defaultLogoState').css({ width: "100%" });
            });
        }
        else {
            $('.scrollDownLogo').css({ left: "28%" });
            $('.contentView').animate({ width: "64%" }, () => {
                $('#divMenu').animate({ width: "42%" }, () => {
                    $('#divInnerMenu').animate({ opacity: 1 })
                });
            });
            $('.initialLogoState').css({ width: "64%" });
            $('.defaultLogoState').css({ width: "64%" });
        }
    }
    let navigateTo = (path) => {
        if (path === "about") {
            $('.progressLine').show().animate({height: '0%'}, 800);
            window.scrollTo({ top: 0, behaviour: 'smooth' });
            props.content(0);
            setMenuState('about');
        }
        if (path === "works") {
            $('.progressLine').show().animate({height: '47%'}, 800);
            window.scrollTo({ top: 4200, behaviour: 'smooth' });
            props.content(2);
            setMenuState('works');
        }
        if (path === "contact") {
            $('.progressLine').show().animate({height: '69%'}, 800);
            window.scrollTo({ top: 6200, behaviour: 'smooth' });
            props.content(3);
            setMenuState('contact')
        }
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            let windowWidth = $(window).width();
            setWindowWidth(windowWidth);
            if (windowWidth < 1366) setOpenState(false)
            else setOpenState(true);
        })
        // $('.innerNavText span').on('click', (e, o) => {
        //     $('#' + e.target.id).css({
        //         color: "#a984ce",
        //         textShadow: "-3px 3px #1e55b4"
        //     })
        // });
        $('#divNavAbout').next('hr').delay(3200).animate({ width: "100%" });
        $('#divNavWorks').next('hr').animate({ width: "0%" });
        $('#divNavContact').next('hr').animate({ width: "0%" });
    }, [])
    useEffect(() => {
        handleMenuCollapse();
    }, [openState])
    useEffect(() => {
        if (menuState === 'initial') {
            $('#divNavAbout span').css({ color: "#ff0" });
            $('#divNavWorks span').css({ color: "#c4c417" });
            $('#divNavContact span').css({ color: "#c4c417" });
            $('#divNavAbout').next('hr').delay(3200).animate({ width: "100%" });
            $('#divNavWorks').next('hr').animate({ width: "0%" });
            $('#divNavContact').next('hr').animate({ width: "0%" });
        }
        if (menuState === 'about') {
            $('#divNavAbout span').css({ color: "#ff0" });
            $('#divNavWorks span').css({ color: "#c4c417" });
            $('#divNavContact span').css({ color: "#c4c417" });
            $('#divNavAbout').next('hr').animate({ width: "100%" });
            $('#divNavWorks').next('hr').animate({ width: "0%" });
            $('#divNavContact').next('hr').animate({ width: "0%" });
        }
        if (menuState === 'works') {
            $('#divNavAbout span').css({ color: "#c4c417" });
            $('#divNavWorks span').css({ color: "#ff0" });
            $('#divNavContact span').css({ color: "#c4c417" });
            $('#divNavAbout').next('hr').animate({ width: "0%" });
            $('#divNavWorks').next('hr').animate({ width: "100%" });
            $('#divNavContact').next('hr').animate({ width: "0%" });
        }
        if (menuState === 'contact') {
            $('#divNavAbout span').css({ color: "#c4c417" });
            $('#divNavWorks span').css({ color: "#c4c417" });
            $('#divNavContact span').css({ color: "#ff0" });
            $('#divNavAbout').next('hr').animate({ width: "0%" });
            $('#divNavWorks').next('hr').animate({ width: "0%" });
            $('#divNavContact').next('hr').animate({ width: "100%" });
        }
    }, [menuState])
    return (
        <div id="divMenu" className="navMenu">
            <BurgerMenu open={windowWidth > 1366 ? true : false} collapseState={state => setOpenState(state)} collapseMenu={() => handleMenuCollapse()} />
            <div id="divInnerMenu" className="innerNav">
                <ProgressLine />
                <ul>
                    <li>
                        <div id="divNavAbout" className="innerNavText" onClick={() => navigateTo('about')}>
                            <span id="spnAbout_A">A</span>
                            <span id="spnAbout_b">b</span>
                            <span id="spnAbout_o">o</span>
                            <span id="spnAbout_u">u</span>
                            <span id="spnAbout_t">t</span>
                        </div>
                        <hr className="navAboutSelectLine"></hr>
                    </li>
                    <li>
                        <div id="divNavWorks" className="innerNavText" onClick={() => navigateTo('works')}>
                            <span id="spnWorks_W">W</span>
                            <span id="spnWorks_o">o</span>
                            <span id="spnWorks_r">r</span>
                            <span id="spnWorks_k">k</span>
                            <span id="spnWorks_s">s</span>
                        </div>
                        <hr className="navWorksSelectLine"></hr>
                    </li>
                    <li>
                        <div id="divNavContact" className="innerNavText" onClick={() => navigateTo('contact')}>
                            <span id="spnContact_C">C</span>
                            <span id="spnContact_o">o</span>
                            <span id="spnContact_n">n</span>
                            <span id="spnContact_t">t</span>
                            <span id="spnContact_a">a</span>
                            <span id="spnContact_c">c</span>
                            <span id="spnContact_t">t</span>
                        </div>
                        <hr className="navContactSelectLine"></hr>
                    </li>
                </ul>
            </div>
        </div>
    )
});

export default NavMenu