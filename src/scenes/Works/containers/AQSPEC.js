import PublicView from '../../../assets/Works/AQSPEC/AQSPEC_Public.png'
import PublicView2 from '../../../assets/Works/AQSPEC/AQSPEC_Public2.png'
import LoginView from '../../../assets/Works/AQSPEC/AQSPEC_Login.png'
import DashView from '../../../assets/Works/AQSPEC/AQSPEC_Dashboard.png'

function AQSPEC(props) {
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
                <h1>AQSPEC</h1>
                <p>A Sensor Analytics platform for tracking air quality and pollutant metrics for SCAQMD (South Coast Air Quality Management District). This tool utilizes ARCGIS, Highcharts and various data visualiztion tools to provide in depth analytical insights to scientists within SCAQMD. This tool is further linked to Varsun's enterprise management system, allowing users to define workflows, setup qa/qc checks, and design custom analytical dashboards.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML5, Javascript, Jquery, CSS3, Bootstrap, Highcharts, ARCGIS, SVN, JSRender, .NET, MVC Framework, AJAX, SVN</p>
                </div>
                <div className="projectImageContainer">
                    <img src={PublicView} />
                    <img src={PublicView2} />
                    <img src={LoginView} />
                    <img src={DashView} />
                </div>
            </div>
        </div>
    )

}

export default AQSPEC