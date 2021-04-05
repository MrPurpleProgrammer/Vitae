function DMCT(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a target="_blank" href="https://github.com/MrPurpleProgrammer/DMCT"><h1>Repository</h1></a>
                    <a className="inactive"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Online)</h1></div>
            </div>
            <div className="projectContent">
                <h1>DMCT</h1>
                <p>DMCT stands for Digital Media Copyright Token, the premise behind this protocol is to generate digital copyright NFT’s that can identify ownership of a media file on the internet. What makes this protocol unique is the fact that you can designate licensing options and distribution networks, through incentive mechanisms in efforts to eliminate piracy.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>Ethereum, Web3, Solidity, Truffle, Metamask, PHASH, DHASH, IPFS, Javascript, Cryptography, Github, Git, Open Souce, NPM</p>
                </div>
                <div className="projectLearnContainer">
                    <div>
                        <a target="_blank" href="https://ethereum.org/en/nft/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/220px-NFT_Icon.png" />
                            <p>Learn More About NFT's</p>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://ethereum.org/en/">
                            <img src="https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/2a4de/finance_transparent.png" />
                            <p>Learn More About Etherum</p>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.phash.org/">
                            <img src="https://camo.githubusercontent.com/9af677474dc6d8f64efb5f50e22fc5e88236ff5a531bba89f8dc19d544874909/68747470733a2f2f6a656e737365676572732e636f6d2f7374617469632f6d656469612f66696e6765727072696e742e706e67" />
                            <p>Learn More About PHASH</p>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://docs.soliditylang.org/en/v0.8.3/">
                            <img src="https://pbs.twimg.com/profile_images/1240311693177167892/-5a2yoQp_400x400.jpg" />
                            <p>Learn More About Solidity</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DMCT