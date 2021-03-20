import $ from 'jquery';
import bg from '../../assets/Monday Loop.mp3';
import { useState, useEffect, useRef } from 'react';

function Music(props) {
    useEffect(() => {
        document.querySelector("audio").volume = 0.05;
    }, [])
    let handleMusicToggle = () => {
        $('#musicIcon').toggleClass('fa-volume-mute');
        $('#musicIcon').toggleClass('fa-volume-up');
        document.querySelector("audio").paused ? document.querySelector("audio").play() : document.querySelector("audio").pause();
    }
    return (
        <div className="music">
            <audio style={{ display: "none" }} controls>
                <source src={bg} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <i id="musicIcon" onClick={() => handleMusicToggle()} className="fas fa-volume-up"></i>
        </div>
    )

}
export default Music