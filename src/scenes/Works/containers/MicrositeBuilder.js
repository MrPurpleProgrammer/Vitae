import DashView from '../../../assets/Works/Microsite_Builder/MB_Dash.png';
import MainView from '../../../assets/Works/Microsite_Builder/MB_Main.png';

function MicrositeBuilder(props) {
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
                <h1>Microsite Builder</h1>
                <p>A Varsun enterprise tool, that I developed, so generic users with minimal expertise in html, css and javascript can design and link various dashboards and microsites across their enterprise platform. One basic use case may be to design role specific dashboards to place in specific areas of their enterprise applications.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, Javascript, Jquery, Jsrender, .Net, SQL, Query Builder, Analytics Builder, SVN</p>
                </div>
                <div className="projectImageContainer">
                    <img src={DashView}/>
                    <img src={MainView}/>
                </div>
            </div>
        </div>
    )

}

export default MicrositeBuilder