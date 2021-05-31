import { useEffect, useState } from "react";
import PurplePiano from './containers/PurplePiano/PurplePiano';
import PurpleMist from './containers/PurpleMist/PurpleMist';
import $ from 'jquery'
import PurpleLife from "./containers/PurpleLife/PurpleLife";

function Fin(props) {
    let [gameState, setGameState] = useState(0)
    useEffect(() => {
        $("audio").animate({ volume: 0 }, 2000);
    }, [])
    let activeGame = () => {
        if (gameState > 2) {
            setGameState(0);
        }
        else if (gameState < 0) {
            setGameState(2);
        }
        else if (gameState == 0) {
            return (<PurplePiano />)
        }
        else if (gameState == 1) {
            return (<PurpleMist />)
        }
        else if (gameState == 2) {
            return (<PurpleLife />)
        }
    }
    let handleGameTransition = (dir) => {
        if (dir === 'forward') setGameState(gameState += 1);
        else { setGameState(gameState -= 1) }
    }
    return (
        <div id="divFinContent" className="contentView">
            <div className="stepFive" style={{ display: 'none' }}>
                <h1 id="h1FinMessageOne">Ok you can stop scrolling now, here play around with these toys...</h1>
                <h1 id="h1FinMessageTwo" style={{ display: 'none' }}>Seriously, theres nothing down there, stop scrolling.</h1>
                <div id="divPurpleGames" className="purpleGamesContainer">
                    <i className="fas fa-chevron-left" onClick={() => { handleGameTransition("back") }}></i>
                    <div id="divGameContainer">
                        {activeGame()}
                    </div>
                    <i className="fas fa-chevron-right" style={{ right: 0 }} onClick={() => { handleGameTransition("forward") }}></i>
                </div>
            </div>
        </div>
    )
}

export default Fin

