import PortPublicView from '../../../assets/Works/Portfolio/Public.png';
import PortMediaView from '../../../assets/Works/Portfolio/Media.png';
import PortLoginView from '../../../assets/Works/Portfolio/Login.png';
import PortDashView from '../../../assets/Works/Portfolio/Dashboard.png';

function Portfolio(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a target="_blank" href="https://github.com/MrPurpleProgrammer/Portfolio"><h1>Repository</h1></a>
                    <a className="inactive"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Coming Soon)</h1></div>
            </div>
            <div className="projectContent">
                <h1>Portfolio</h1>
                <p>An Ethereum based decentralized application(dApp) utilizing the DMCT tech stack and some google machine vision to create non fungible tokens when a user uploads unique media files. Based on social media sharing and media propagation across the internet a PORT(fungible) token is generated to the creator, distributor and owner of the media file. </p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, SCSS, ReactJs, NodeJs, ExpressJs, Web3Js, MERN, MongoDB, Mongoose, Solidity, Metamask, Truffle, Google Vision, IPFS, Web Crawlers, Git, GitHub</p>
                </div>
                <div className="projectImageContainer">
                    <img src={PortDashView} />
                    <img src={PortMediaView} />
                    <img src={PortPublicView} />
                    <img src={PortLoginView} />
                </div>
            </div>
        </div>
    )

}

export default Portfolio