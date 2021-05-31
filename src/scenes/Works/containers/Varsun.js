import Contact from '../../../assets/Works/Varsun/Varsun_Contact.png';
import Home from '../../../assets/Works/Varsun/Varsun_Home.png';
import Partners from '../../../assets/Works/Varsun/Varsun_Partners.png';
import Services from '../../../assets/Works/Varsun/Varsun_Services.png';

function Varsun(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a className="inactive"><h1>Repository</h1></a>
                    <a href="http://varsun.com"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Online)</h1></div>
            </div>
            <div className="projectContent">
                <h1>Varsun</h1>
                <p>Redesigned the company website and completely revamped marketing content. The previous company website was a legacy website with very outdated and innacurate content. Utilizing newer HTML5 standards, and cleaner and more modern designs, me and a team of 3 revamped the complete website within a week. This was one of my initial projects, I primarily focused on UI/UX and marketing content. Did not completely get into front end coding at this stage.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, CSS, Javascript, Jquery, Bootstrap, SEO, SVN</p>
                </div>
                <div className="projectImageContainer">
                    <img alt="" src={Home} />
                    <img alt="" src={Services} />
                    <img alt="" src={Partners} />
                    <img alt="" src={Contact} />
                </div>
            </div>
        </div>
    )

}

export default Varsun