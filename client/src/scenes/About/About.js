import { useEffect } from "react"

function About() {
    let quoteAnimation = () => {
        var text = document.getElementById('pQuote');
        var newDom = '';
        var animationDelay = 6;
        for (let i = 0; i < text.innerText.length; i++) { newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>'; }
        text.innerHTML = newDom;
        var length = text.children.length;
        for (let i = 0; i < length; i++) { text.children[i].style['animation-delay'] = animationDelay * i + 'ms'; }
    }
    useEffect(() => {
        quoteAnimation();
    }, [])
    return (
        <div id="divAboutContent" className="contentView">
            <div className="stepOne" style={{display: 'none'}}>
                <h1>Hey I'm Aditya</h1>
                <p className="subTitle">A Full Stack Developer and UI/UX Designer</p>
                <p className="bodyText">
                    As an engineer, my goal is to invent and develop tools that enrich and improve society. As a designer, I want to do it with style.
                    This website is a place to showcase my technical expertise, display my open source projects, and document my growth. Enjoy!
                </p>
            </div>
            <div className="stepTwo" style={{display: 'none'}}>
                <p id="pQuote">"Don’t ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive."</p>
                <div className="flexWrap focusText">
                    <h1>So</h1>
                    <h1>what</h1>
                    <h1>makes</h1>
                    <h1>me</h1>
                    <h1>come</h1>
                    <h1>alive?</h1>
                </div>
                <div className="flexWrap subtitleList">
                    <p>Engineering, </p>
                    <p>Designing, </p>
                    <p>Inventing, </p>
                    <p>Learning, </p>
                    <p>Gaming, </p>
                    <p>Surfing, </p>
                    <p>Kickboxing, </p>
                    <p>Exploring, </p>
                    <p>Hiking, </p>
                    <p>Traveling, </p>
                </div>
            </div>
        </div >
    )
}

export default About