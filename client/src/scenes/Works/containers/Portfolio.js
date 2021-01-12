function Portfolio(props) {
    return (
        <div className="projectContainer">
            <div className="projectContent">
                <h1>Portfolio</h1>
                <p>An Ethereum based decentralized application(dApp) utilizing the DMCT tech stack and some google machine vision to create non fungible tokens when a user uploads unique media files. Based on social media sharing and media propagation across the internet a PORT(fungible) token is generated to the creator, distributor and owner of the media file. </p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, SCSS, ReactJs, NodeJs, ExpressJs, Web3Js, MERN, MongoDB, Mongoose, Solidity, Metamask, Truffle, Google Vision, IPFS, Web Crawlers, Git, GitHub</p>
                </div>
            </div>
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <h1><a href="">Repository</a></h1>
                    <h1><a href="">Website</a></h1>
                </div>
                <div className="projectStatus"><h1>(Status: Coming Soon)</h1></div>
            </div>
        
        </div>
    )

}

export default Portfolio