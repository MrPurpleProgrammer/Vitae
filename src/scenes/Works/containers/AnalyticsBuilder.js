import ABMain from '../../../assets/Works/Analytics_Builder/AB_Main.png';
import ABResult from '../../../assets/Works/Analytics_Builder/AB_Result.png';

function AnalyticsBuilder(props) {
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
                <h1>Analytics Builder</h1>
                <p>A Varsun enterprise suite tool, that I primarily developed, to allow users to design charts and graphs for various kinds of data visualization use cases. The tool utilizes vanilla javascript, html, css, jsrender, and highcharts to generate user defined charts.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, Javascript, Jquery, Jsrender, .Net, Highcharts, SVN</p>
                </div>
                <div className="projectImageContainer">
                    <img src={ABMain} />
                    <img src={ABResult} />
                </div>
            </div>
        </div>
    )

}

export default AnalyticsBuilder