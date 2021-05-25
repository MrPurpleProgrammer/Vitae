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
import Music from '../components/Music/Music';
import Fin from './Fin/Fin'
import ImportScript from "../hooks/ImportScript"
function LoaderContent(props) {
  useEffect(() => {
    $('.music i').show();
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
    $('#musicIcon').toggleClass('fa-volume-mute');
    $('#musicIcon').toggleClass('fa-volume-up');
    document.querySelector("audio").paused ? document.querySelector("audio").play() : document.querySelector("audio").pause();
    $('.bottomLoader').animate({ height: "0%" }, () => {
      props.loaderState(false);
    });
  }
  return (
    <div id="divLoaderContent" className="loaderContent" translate="no">
      <div id="divTopHalf" className="topLoader"></div>
      <div id="divBottomHalf" className="bottomLoader"></div>
      <div id="divParentLoader" >
        <div className="wrap" style={navigator.platform == 'iPhone' ? { display: 'none' } : { display: 'block' }}>
          <div className="angle"></div>
          <div className="angle"></div>
          <div className="angle"></div>
          <div className="angle"></div>
        </div>
      </div>
      <button className="btn-glitch-fill" onClick={() => { handleButtonClick() }}>
        <span className="text">Enter</span><span className="decoration">&rArr;</span>
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
      <h1 id="loadingText" > Hold on, I'm busy inventing time travel and curing cancer...</h1>
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
    if (pos >= 0 && pos < 20) setContentState(0);
    else if (pos >= 20 && pos < 40 && contentState !== 1) setContentState(1);
    else if (pos >= 40 && pos < 60 && contentState !== 2) {
      if ($('#divAboutContent').length === 0) {
        setContentState(2);
      }
      else {
        $('#divAboutContent').fadeOut(500, () => {
          setContentState(2);
        })
      }
    }
    else if (pos >= 60 && pos < 80 && contentState !== 3) {
      if ($('#divWorksContent').length === 0) {
        setContentState(3);
      }
      else {
        $('#divWorksContent').fadeOut(500, () => {
          setContentState(3);
        })
      }
    }
    else if (pos >= 80 && pos < 90 && contentState !== 4) {
      $('#divFinTreasureMap').hide();
      $('#h1FinMessageTwo').hide();
      $('#h1FinMessageOne').fadeIn();
      $('#divPurpleGames').fadeIn();
      if ($('#divContactContent').length === 0) {
        setContentState(4);
      }
      else {
        $('#divContactContent').fadeOut(500, () => {
          setContentState(4);
        })
      }
    }
    else if (pos >= 90 && pos < 98) {
      $('#divFinTreasureMap').hide();
      $('#h1FinMessageOne').fadeOut(200, () => {
        $('#h1FinMessageTwo').fadeIn();
        $('#divPurpleGames').fadeIn();
      })
    }
    else if (pos >= 98 && pos < 101) {
      $('#divPurpleGames').fadeOut(200, () => {
        $('#h1FinMessageTwo').fadeOut(200, () => {
          $('#divFinTreasureMap').fadeIn();
        })
      })
    }
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
    if (contentState === 4) {
      $('.stepFive').fadeIn();
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
    else if (contentState === 4) {
      return (
        <Fin />
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
    $('.music i').show();
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
  let handleState = () => {
    if (loader === true) {
      return (
        <LoaderContent loaderState={state => setLoaderState(state)} startMusic={() => { document.querySelector("audio").play() }} />
      )
    }
    else return (<MainContent />)
  }
  ImportScript('https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js', false);
  ImportScript('https://gist.github.com/mrdoob/838785/raw/a19a753b441d6ad41707c58f06dbe17f3470423c/RequestAnimationFrame.js', false);
  ImportScript('https://raw.github.com/mrdoob/stats.js/master/build/stats.min.js', false);
  ImportScript('https://cdpn.io/cp/internal/boomboom/pen.js?key=pen.js-deca44c3-547b-e00b-b654-fb3b4f90c95a', false);
  return (
    <div>
      {handleState()}
      <Music />
    </div>
  );
}

export default App;
