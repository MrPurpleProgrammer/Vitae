function MrPurple(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a href="https://github.com/MrPurpleProgrammer/Vitae"><h1>Repository</h1></a>
                    <a className="inactive"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Online)</h1></div>
            </div>
            <div className="projectContent">
                <h1>MrPurple</h1>
                <p>This website is designed primarily using ReactJs and a whole lot of SCSS animations. Alot of the color schemes and design has inspirations from various portfolio websites and codepen links I came across on the internet. I wanted this website to have a unique blend of minimalistic, yet flashy design elements. The goal was to utilize my full breadth of front end expertise, and to showcase my unique style. More than anything, I made this website to act as an online resume, while also providing an entryway into my other various open source projects I am actively working on.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, SCSS, ReactJs, CSS Animation, JQuery, Google Cloud, NPM, Git, Github, Responsive Design</p>
                </div>
                {/* <div className="projectImageContainer">
                    <img src={PortDashView} />
                    <img src={PortMediaView} />
                    <img src={PortPublicView} />
                    <img src={PortLoginView} />
                </div> */}
            </div>
        </div>
    )

}

export default MrPurple