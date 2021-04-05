import Home from '../../../assets/Works/Proverp/Proverp_Home.png';
import Info1 from '../../../assets/Works/Proverp/Proverp_Info1.png';
import Info2 from '../../../assets/Works/Proverp/Proverp_Info2.png';

function Proverp(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a className="inactive"><h1>Repository</h1></a>
                    <a target="_blank" href="http://proverp.com"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Online)</h1></div>
            </div>
            <div className="projectContent">
                <h1>Proverp</h1>
                <p>Redesigned the company product website with updated marketing content and cleaner UI/UX. Improved search engine optimization for website, improved sales and lead management pipelining. This website is primarily for providing information to customers about Varsun's ERP system, and showcasing its technical capabilities.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, Javascript, Jquery, Bootstrap, SEO, SVN</p>
                </div>
                <div className="projectLearnContainer">
                    <div>
                        <a target="_blank" href="https://www.proverp.com/Content/documents/proverp/proverp_brochure_final_min.pdf">
                            <img src="https://proverp.com/Content/themes/default/images/proverp_ser_hr.jpg" />
                            <p>Check out the Brochure</p>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.proverp.com/Content/documents/proverp/Streamlining%20Manufacturing.pdf">
                            <img src="https://proverp.com/Content/themes/default/images/proverp_ser_dis.jpg" />
                            <p>Learn More About Proverp</p>
                        </a>
                    </div>
                    <img src={Home} />
                    <img src={Info1} />
                    <img src={Info2} />
                </div>
            </div>
        </div>
    )

}

export default Proverp