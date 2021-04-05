function MyParents(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a className="inactive"><h1>Repository</h1></a>
                    <a className="inactive"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Proprietary)</h1></div>
            </div>
            <div className="projectContent">
                <h1>myParents</h1>
                <p>A mobile application designed to connect caretakers with the elderly or sick, and allow high level communication and scheduling. The vision behind this tool was to connect the elderly or sick to caretakers in a decentralized social platform similar to Taskrabbit. </p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>XAML, XAMARIN, .NET, SQL, HTML5, MVVC Framework, SVG Animation, CSS Animation, Google Maps API, SVN</p>
                </div>
                <div className="projectLearnContainer">
                    <div style={{width: "100%"}}>
                        <p style={{bottom: "-30%"}}>Proprietary product, cannot disclose any screenshots or any further information</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyParents