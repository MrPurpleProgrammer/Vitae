import { useHistory } from 'react-router-dom'
function Logo(props) {
    let className;
    let history = useHistory();
    let h1 = () => {
        if(navigator.platform == 'iPhone') {
            return(
                <h1 id="logoMrPurple" className={props.state === 'Landing' ? "glitch-iphone" : "glitch-default-iphone"} data-text="MrPurple">MrPurple</h1>
            )
        }
        else {
            return(
                <h1 id="logoMrPurple" className={props.state === 'Landing' ? "glitch" : "glitch-default"} data-text="MrPurple">MrPurple</h1>
            )
        }
    }
    if (props.state === 'Landing') className = 'initialLogoState';
    if (props.state === 'Default') className = 'defaultLogoState';
    let handleClick = () => {
        history.push('/');
    }
    return (
        <div id="divLogo" className={className}>
            <div id="divLogoContainer" onClick={() => { handleClick() }}>
                {h1()}
            </div>
        </div>
    )
}

export default Logo