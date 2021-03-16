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
import ScrollDown from '../components/ScrollDown/ScrollDown';
import Mouse from '../components/Mouse/Mouse';
import bg from '../assets/Monday Loop.mp3';
function LoaderContent(props) {
  useEffect(() => {
    setTimeout(() => {
      $('#divParentLoader').addClass('flickerOut');
      $('.topLoader').animate({ height: "45%" });
      $('.bottomLoader').animate({ height: "45%" });
      $('#loadingText').animate({ opacity: 0 }, () => {
        $('#loadingText').hide();
        $('#readyText').show();
        $('.btn-glitch-fill').animate({ opacity: 1 });
      });
    }, 3500);
  }, [])

  let handleButtonClick = () => {
    $('.topLoader').animate({ height: "0%" });
    $('.bottomLoader').animate({ height: "0%" }, () => {
      props.startMusic();
      props.loaderState(false);
    });
  }
  return (
    <div id="divLoaderContent" className="loaderContent" translate="no">
      <div id="divTopHalf" className="topLoader"></div>
      <div id="divBottomHalf" className="bottomLoader"></div>
      <div id="divParentLoader" >
        <div class="wrap">
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="angle"></div>
        </div>
      </div>
      <button class="btn-glitch-fill" onClick={() => { handleButtonClick() }}>
        <span class="text">Initialize</span><span class="decoration">&rArr;</span>
      </button>
      <svg id="svgLoader" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"></feColorMatrix>
            <feComposite in2="goo" in="SourceGraphic" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
      <h1 id="loadingText" > Hold on, MrPurple is busy fixing climate change...</h1>
      <h1 id="readyText"> We're ready for you, <span style={{ color: "#be7dff" }}>Click on the button above.</span> (Turn your volume up for the complete experience) </h1>
      <Mouse />
    </div>
  )
}
function MainContent() {
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
      <Mouse />
    </Router>
  )
}
function App() {
  const [loader, setLoaderState] = useState(true);
  useEffect(() => {
    document.querySelector("audio").volume = 0.2;
  }, [])
  let handleState = () => {
    if (loader === true) {
      return (
        <LoaderContent loaderState={state => setLoaderState(state)} startMusic={() => {document.querySelector("audio").play()}}/>
      )
    }
    else return (<MainContent />)
  }
  return (
    <div>
      {handleState()}
      <audio style={{display: "none"}} controls autoplay>
        <source src={bg} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
    </div>
  );
}

export default App;
