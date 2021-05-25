import { useEffect, useState } from "react"
import $ from 'jquery';

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 60)
            const end = start + Math.floor(Math.random() * 60)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

function TreasureMap() {
    let [counter, setCounter] = useState(1);
    let [headerScrambler, setHeaderScrambler] = useState(null);
    let [subHeaderScrambler, setSubHeaderScrambler] = useState(null);
    let handleScramblerButton = (c) => {
        let promptType = $('#spnFavOptions').html();
        let answer = $('#divTreasurePrompt input').val().replace(/\s+/g, ' ').trim();
        if(promptType == 'color') {
            if (answer !== '') {
                const header = document.querySelector('#h1FinTreasureMessage');
                const subHeader = document.querySelector('#pFinTreasureMessage');
                let headScram = new TextScramble(header);
                let subScram = new TextScramble(subHeader);
                if (answer === 'Purple' || answer == 'purple') {
                    $('#divTreasurePrompt input').removeClass('incorrectInput').addClass('correctInput')
                    // $('#divTreasurePrompt').fadeOut(500, () => {
                    //     $('#divTreasurePrompt').hide();
                    // })
                    nextText(headScram, headerPhrases, 2);
                    nextText(subScram, subHeaderPhrases, 2);
                }
                else if (answer === '#be7dff' || answer === '#65318e') {
                    $('#divTreasurePrompt input').removeClass('incorrectInput').addClass('correctInput')
                    // $('#divTreasurePrompt').fadeOut(500, () => {
                    //     $('#divTreasurePrompt').hide();
                    // })
                    nextText(headScram, headerPhrases, 3);
                    nextText(subScram, subHeaderPhrases, 3);
                }
                else {
                    nextText(headScram, headerPhrases, 0);
                    nextText(subScram, subHeaderPhrases, 0);
                    $('#divTreasurePrompt input').val('');
                    $('#divTreasurePrompt input').removeClass('correctInput').addClass('incorrectInput')
                    $('#divTreasurePrompt input').prop('placeholder', 'Wrong answer try again.');
                }
            }
        }
        if(promptType == 'comic') {
            if (answer !== '') {
                const header = document.querySelector('#h1FinTreasureMessage');
                const subHeader = document.querySelector('#pFinTreasureMessage');
                let headScram = new TextScramble(header);
                let subScram = new TextScramble(subHeader);
                if (answer === 'One Piece' || answer == 'OnePiece') {
                    $('#divTreasurePrompt input').removeClass('incorrectInput').addClass('correctInput')
                    // $('#divTreasurePrompt').fadeOut(500, () => {
                    //     $('#divTreasurePrompt').hide();
                    // })
                    nextText(headScram, headerPhrases, 4);
                    nextText(subScram, subHeaderPhrases, 4);
                }
                else {
                    nextText(headScram, headerPhrases, 0);
                    nextText(subScram, subHeaderPhrases, 0);
                    $('#divTreasurePrompt input').val('');
                    $('#divTreasurePrompt input').removeClass('correctInput').addClass('incorrectInput')
                    $('#divTreasurePrompt input').prop('placeholder', 'Wrong answer try again.');
                }
            }
        }
    }
    let handleNextFavOption = () => {
        const favOptionSpan = document.querySelector('#spnFavOptions');
        let favScram = new TextScramble(favOptionSpan);
        if(counter === 0) {
            $('#pTreasurePrompt').html('To get your first clue, you must answer the following question.');
        }
        if(counter === 1) {
            $('#pTreasurePrompt').html('To recieve the quote, you must answer the following question.');
        }
        nextText(favScram, favOptions, counter);
        let newCounter = (counter + 1) % favOptions.length;
        setCounter(newCounter);

    }
    const headerPhrases = [
        "Looks like you're having some trouble.",
        'Treasure Map Protocol Initialized.',
        "The color Purple does not exist.",
        'Look for the key, hidden in plain sight.',
        'Inherited Will, The Destiny of the Age, and The Dreams of the People.'
    ]
    const subHeaderPhrases = [
        "Here are some general tips, first explore the website completely. Click/Hover/Interact with everything you can. Think out of the box, infact, sometimes you need to think as if there was no box. Finally some of the answers to these questions wont nessecarily be found within this website. Try exploring some of my other apps within this domain.",
        'This journey will be long and difficult, but I promise you, the treasure at the end of this journey will be worth it.',
        'The human eye has three different types of cones that allow us to percieve; blue, green, and red wavelengths of light. We are able to percieve all colors within the spectrum of these three wavelengths. When we see purple however, we are experiencing a mix of red and blue light. Scientifically, purple is not a color because there is no beam of pure light that looks purple. There is no light wavelength that corresponds to purple. We see purple because the human eye doesnt understand what its looking at and so makes up a color out of thin air. So its very possible that the Purple I see and the Purple you see can look very different within our minds.',
        'The 0x of 3858 will provide you the tools to navigate to the "vita" in search of the key that will unlock the next clue.',
        'As long as people continue to pursue the meaning of Freedom, these things will never cease to be!'
    ]
    const favOptions = [
        "color",
        "comic"
    ]
    const nextText = (obj, phrases, count) => {
        obj.setText(phrases[count]);
    }
    useEffect(() => {
        const header = document.querySelector('#h1FinTreasureMessage');
        const subHeader = document.querySelector('#pFinTreasureMessage');
        const favOptionSpan = document.querySelector('#spnFavOptions');
        let headScram = new TextScramble(header);
        let subScram = new TextScramble(subHeader);
        let favScram = new TextScramble(favOptionSpan);
        setTimeout(() => {
            nextText(headScram, headerPhrases, 1);
            nextText(subScram, subHeaderPhrases, 1);
            nextText(favScram, favOptions, 0);
        }, 500)
    }, [])
    return (
        <div id="divFinTreasureMap" className="treasureMapContainer" style={{ display: 'none' }}>
            <h1 id="h1FinTreasureMessage"></h1>
            <p id="pFinTreasureMessage"></p>
            <div id="divTreasurePrompt" className="treasurePrompt">
                <p id="pTreasurePrompt"> To get your first clue, you must answer the following question.</p>
                <p>What is my favorite <span id="spnFavOptions" className="favOptions" onClick={() => handleNextFavOption()}></span>?</p>
                <input placeholder="Type your answer here" type="text" />
                <button onClick={
                    () => {
                        handleScramblerButton(counter);
                    }}>Enter</button>
            </div>
        </div >
    )

}

export default TreasureMap;