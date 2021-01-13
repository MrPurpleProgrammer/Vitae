import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import About from './About/About'
import Contact from './Contact/Contact'
import Works from './Works/Works'
import NavMenu from '../components/NavMenu/NavMenu'
import Logo from '../components/Logo/Logo'
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import scrollDown from '../components/ScrollDown/ScrollDown'
import ScrollDown from '../components/ScrollDown/ScrollDown';
function App() {
  const [logoState, setLogoState] = useState('Landing');
  const [contentState, setContentState] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const navRef = useRef();
  let showScrollPosition = (elm) => {
    var parent = elm.parentNode,
      pos = (elm.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight) * 100;
    return Math.round(pos);
  }
  let handleScrollTransition = () => {
    let pos = showScrollPosition(document.body);
    console.log(window.scrollY);
    setScrollPos(pos);
    let newStep;
    if (pos >= 0 && pos < 20) newStep = 0;
    else if (pos >= 20 && pos < 40) newStep = 1;
    else if (pos >= 40 && pos < 60) newStep = 2;
    else if (pos >= 60 && pos < 80) newStep = 3;
    else if (pos >= 80 && pos < 101) newStep = 4;
    setContentState(newStep);
    if (pos === 0) { $('.progressLine').fadeOut(); }
    else { $('.progressLine').show().height(pos + '%') }
  }
  let handleContentTransition = () => {
    console.log(scrollPos, contentState);
    navRef.current.setNavLineState(contentState)
    if (contentState === 0) {
      $('.contactMap').hide();
      $('.stepFour').fadeOut();
      $('.stepThree').fadeOut();
      $('.stepTwo').fadeOut(() => {
        $('.stepOne').fadeIn();
      });
    }
    if (contentState === 1) {
      $('.stepOne').fadeOut(() => {
        $('.stepTwo').fadeIn();
        $('.stepFour').fadeOut();
        $('.stepThree').fadeOut();
        $('.contactMap').fadeOut();
        $('.scrollDownLogo').fadeOut();
      })
    }
    if (contentState === 2) {
      $('.stepTwo').fadeOut(() => {
        $('#divWorksContent').fadeIn(() => {
          $('.stepThree').fadeIn();
        });
      });
      $('.scrollDownLogo').fadeOut();
    }
    if (contentState === 3) {
      $('.stepFour').fadeIn();
      $('.scrollDownLogo').fadeOut();
    }
  }
  let content = () => {
    if (contentState === 0 || contentState === 1) {
      return (
        <About logoPos={state => setLogoState()} />
      )
    }
    else if (contentState === 2) {
      return (
        <Works />
      )
    }
    else if (contentState === 3) {
      return (
        <Contact />
      )
    }
  }
  let handleLogoTransition = () => {
    if (scrollPos >= 10 || contentState === 1 || contentState === 2 || contentState === 3 || contentState === 4) {
      $('#divLogo').addClass('defaultLogoState').removeClass('initialLogoState');
    }
    if (scrollPos < 10 || contentState === 0) {
      $('#divLogo').addClass('initialLogoState').removeClass('defaultLogoState');
    }
  }
  useEffect(() => {
    $('.progressLine').hide();
    window.scrollTo({ top: 0 });
    window.addEventListener('scroll', handleScrollTransition);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return () => {
      window.removeEventListener('scroll', handleScrollTransition);
    }
  }, [])
  useEffect(() => {
    handleLogoTransition();
    handleContentTransition();
  }, [scrollPos, contentState])
  return (
    <Router>
      <Logo state={logoState} />
      <NavMenu ref={navRef} content={state => setContentState(state)} />
      <div id="divParentContent">
        {content()}
        <ScrollDown />
      </div>
    </Router>
  );
}

export default App;
