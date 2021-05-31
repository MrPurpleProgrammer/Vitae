import LighthouseDashView from '../../../assets/Works/Lighthouse/Lighthouse_Dashboard.png';
import LighthouseDeviceView from '../../../assets/Works/Lighthouse/Lighthouse_Device.png';
import LighthouseHomeView from '../../../assets/Works/Lighthouse/Lighthouse_Home.png';

function Lighthouse(props) {
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
                <h1>Lighthouse</h1>
                <p>Lighthouse is a enterprise analytics tool, designed specifically for predictive and presprictive maintenance of manufacturing machinery. The general idea is to utilize machine learning services to predict sensor data and prescribe maintenance checks and quality controls. The goal is to reduce manufacturing overhead by performing strategic maintenance.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, SCSS, ReactJs, NodeJs, ExpressJs, MYSQL, SQL Server, Sequelize, Python, Amazon RDS, Tensorflow, sklearn, Highcharts, Git, Github, NPM</p>
                </div>
                <div className="projectImageContainer">
                    <img alt="" src={LighthouseDashView} />
                    <img alt="" src={LighthouseDeviceView} />
                    <img alt="" src={LighthouseHomeView} />
                </div>
            </div>
        </div>
    )

}

export default Lighthouse