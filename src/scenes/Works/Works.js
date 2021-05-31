import { useEffect, useState } from "react"
import $ from 'jquery'
import Portfolio from './containers/Portfolio';
import DMCT from './containers/DMCT';
import QuantumSalesman from './containers/QuantumSalesman'
import MrPurple from './containers/Vitae'
import { useHistory } from "react-router-dom";
import AnalyticsBuilder from "./containers/AnalyticsBuilder";
import MicrositeBuilder from "./containers/MicrositeBuilder";
import Lighthouse from "./containers/Lighthouse";
import MyParents from './containers/MyParents';
import Varsun from "./containers/Varsun";
import Proverp from "./containers/Proverp";
import AQSPEC from "./containers/AQSPEC";
import PortDashView from '../../assets/Works/Portfolio/Dashboard.png';
import LighthouseDashView from '../../assets/Works/Lighthouse/Lighthouse_Dashboard.png';
import QSHome from '../../assets/Works/Quantum_Salesman/QS_Home.png';
import VitaeGameView from '../../assets/Works/Vitae/Vitae_Game.png';
import PublicView from '../../assets/Works/AQSPEC/AQSPEC_Public.png'
import ABMain from '../../assets/Works/Analytics_Builder/AB_Main.png';
import DashView from '../../assets/Works/Microsite_Builder/MB_Dash.png';
import VAHome from '../../assets/Works/Varsun/Varsun_Home.png';
import PRHome from '../../assets/Works/Proverp/Proverp_Home.png';

function Works() {
    const [filterState, setFilterState] = useState('all');
    const [projectDetail, setProjectDetail] = useState('none');
    let history = useHistory();
    let handleProjectTransition = (e) => {
        $('body').css('overflow-y', 'hidden');
        if (projectDetail === 'portfolio') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Portfolio />
            )
        }
        if (projectDetail === 'dmct') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <DMCT />
            )
        }
        if (projectDetail === 'qs') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <QuantumSalesman />
            )
        }
        if (projectDetail === 'cv') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <MrPurple />
            )
        }
        if (projectDetail === 'mp') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <MyParents />
            )
        }
        if (projectDetail === 'ab') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <AnalyticsBuilder />
            )
        }
        if (projectDetail === 'mb') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <MicrositeBuilder />
            )
        }
        if (projectDetail === 'lh') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Lighthouse />
            )
        }
        if (projectDetail === 'var') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Varsun />
            )
        }
        if (projectDetail === 'proverp') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Proverp />
            )
        }
        if (projectDetail === 'aqspec') {
            $('.defaultLogoState').fadeOut(500);
            $('.navMenu').fadeOut(500);
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <AQSPEC />
            )
        }
        else {
            $('body').css('overflow-y', 'scroll');
            $('.navMenu').show();
            $('#divWorkDetails').fadeOut()
            if(navigator.platform === 'iPhone') {
                $('#logoMrPurple').removeClass('glitch-iphone');
                setTimeout(() => { $('.stepThree').fadeIn(); $('.defaultLogoState').show(); $('#logoMrPurple').addClass('glitch-iphone-AfterWorkDetails'); }, 700)
            }
            else {
                $('#logoMrPurple').removeClass('glitch');
                setTimeout(() => { $('.stepThree').fadeIn(); $('.defaultLogoState').show(); $('#logoMrPurple').addClass('glitchAfterWorkDetails'); }, 700)
            }
        }
    }
    useEffect(() => {
        $('#divFilter div').on('click', (e, o) => {
            $('#divFilter div').removeClass('activeFilter');
            $('#' + e.currentTarget.id).addClass('activeFilter');
            let domObjs = $('.workGrid>div');
            domObjs.each((i, each) => {
                if (e.currentTarget.dataset.filter === 'all') {
                    if($(window).innerWidth() < 850) $(each).removeClass('_workItem').addClass('workItem').show();
                    else {
                        $(each).removeClass('_workItem').addClass('workItem').css('width', "155px").show();
                    }
                }
                else {
                    $(each).removeClass('workItem').addClass('_workItem');
                }
            });
            let _domObjs = $('._workItem')
            if (e.currentTarget.dataset.filter !== 'all') {
                _domObjs.each((i, each) => {
                    if (!$(each).data('filterTags').includes(e.currentTarget.dataset.filter)) {
                        // console.log($(each).data('filterTags').includes($(e).data('filter')), $(each).data('filterTags'))
                        $(each).animate({ width: "0px" }, () => {
                            $(each).hide();
                        })
                    }
                    else {
                        $(each).show().animate({ width: "155px" });
                    }
                })
            }
        });
        $('.divWorkDetails').hide();
        $('.workItem').on('click', (e) => { setProjectDetail(e.currentTarget.dataset.work) });
        $('#divFilterAll').click();
    }, [])
    useEffect(() => {
        return (() => {
            $('.navMenu').show();
            $('.defaultLogoState').show();
        }
        )
    })
    useEffect(() => {
        handleProjectTransition();
    }, [projectDetail]);
    return (
        <div id="divWorksContent" className="contentView">
            <div className="stepThree" style={{ display: 'none' }}>
                <h1>My Experience so far...</h1>
                <div id="divFilter" className="filterList">
                    <div id="divFilterAll" data-filter="all">
                        <p>All,</p>
                    </div>
                    <div id="divFilterWeb" data-filter="web">
                        <p>Web App Development,</p>
                    </div>
                    <div id="divFilterMobile" data-filter="mobile">
                        <p>Mobile App Development,</p>
                    </div>
                    <div id="divFilterDapp" data-filter="dapp">
                        <p>Smart Contract & DAPP Development,</p>
                    </div>
                    <div id="divFilterVis" data-filter="vis">
                        <p>GIS & Data Visualization,</p>
                    </div>
                    <div id="divFilterUI" data-filter="ui">
                        <p>UI/UX Design,</p>
                    </div>
                    <div id="divFilterMS" data-filter="ms">
                        <p>Marketing & Sales,</p>
                    </div>
                </div>
                <div id="divWorkGrid" className="workGrid">
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "mobile", "all"]} className="workItem" data-work="portfolio">
                        <div className="illuminateDiv">
                        </div>
                        <div className="workInfo">
                            <p className="workTitle">Portfolio</p>
                            <p className="workDescription">An Ethereum based decentralized application(dApp) utilizing the DMCT tech stack and some google machine vision to create non fungible tokens when a user uploads unique media files... </p>
                            <div className="workImages">
                                <img alt="" src={PortDashView} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_DMCT" data-filter-tags={["dapp", "all"]} className="workItem" data-work="dmct">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">DMCT</p>
                            <p className="workDescription">DMCT stands for Digital Media Copyright Token, the premise behind this protocol is to generate digital copyright NFT’s that can identify ownership of a media file on the internet... </p>
                            <div className="projectLearnContainer" style={{ height: "145px", marginTop: "15px" }}>
                                <div>
                                    <a target="_blank" rel="noreferrer" href="https://ethereum.org/en/nft/">
                                        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/220px-NFT_Icon.png" />
                                        <p>Learn More About NFT's</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="divWork_Lighthouse" data-filter-tags={["web", "mobile", "ui", "vis", "all"]} className="workItem" data-work="lh">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Lighthouse</p>
                            <p className="workDescription">Lighthouse is a enterprise analytics tool, designed specifically for predictive and presprictive maintenance of manufacturing machinery. The general idea is to utilize machine learning... </p>
                            <div className="workImages">
                                <img alt="" src={LighthouseDashView} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_QS" data-filter-tags={["web", "vis", "all"]} className="workItem" data-work="qs">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Quantum Salesman</p>
                            <p className="workDescription">A proof of concept logistics app that solves the traveling salesman problem utilizing IBM’s QISKIT framework. Qiskit provides developers access to IBM’s quantum computer... </p>
                            <div className="workImages">
                                <img alt="" src={QSHome} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_Vitae" data-filter-tags={["web", "ui", "all"]} className="workItem" data-work="cv">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Vitae</p>
                            <p className="workDescription">This website is designed primarily using ReactJs and a whole lot of SCSS animations. Alot of the color schemes and design has inspirations from various portfolio websites... </p>
                            <div className="workImages">
                                <img alt="" src={VitaeGameView} style={{ border: "1px solid #484848" }} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_MyParents" data-filter-tags={["web", "mobile", "ui", "all"]} className="workItem" data-work="mp">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">MyParents</p>
                            <p className="workDescription">A mobile application designed to connect caretakers with the elderly or sick, and allow high level communication and scheduling. The vision behind this tool was to connect... </p>
                            <div className="projectLearnContainer" style={{ height: "145px", marginTop: "15px" }}>
                                <div style={{ width: "100%" }}>
                                    <p style={{ bottom: "-30%" }}>Proprietary product, cannot disclose any screenshots or any further information</p>
                                </div>
                            </div>
                        </div>                    </div>
                    <div id="divWork_AQSPEC" data-filter-tags={["web", "ui", "vis", "all"]} className="workItem" data-work="aqspec">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">AQSPEC</p>
                            <p className="workDescription">A Sensor Analytics platform for tracking air quality and pollutant metrics for SCAQMD (South Coast Air Quality Management District). This tool utilizes ARCGIS, Highcharts and... </p>
                            <div className="workImages">
                                <img alt="" src={PublicView} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_AB" data-filter-tags={["web", "vis", "all"]} className="workItem" data-work="ab">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Analytics Builder</p>
                            <p className="workDescription">A Varsun enterprise suite tool, that I primarily developed, to allow users to design charts and graphs for various kinds of data visualization use cases. The tool utilizes vanilla... </p>
                            <div className="workImages">
                                <img alt="" src={ABMain} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_MB" data-filter-tags={["web", 'vis', "all"]} className="workItem" data-work="mb">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Microsite Builder</p>
                            <p className="workDescription">A Varsun enterprise tool, that I developed, so generic users with minimal expertise in html, css and javascript can design and link various dashboards and microsites across their... </p>
                            <div className="workImages">
                                <img alt="" src={DashView} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_Varsun" data-filter-tags={["web", "ms", "ui", "all"]} className="workItem" data-work="var">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Varsun</p>
                            <p className="workDescription">Redesigned the company website and completely revamped marketing content. The previous company website was a legacy website with very outdated and innacurate content. Utilizing newer... </p>
                            <div className="workImages">
                                <img alt="" src={VAHome} />
                            </div>
                        </div>
                    </div>
                    <div id="divWork_Proverp" data-filter-tags={["web", "ms", "ui", "all"]} className="workItem" data-work="proverp">
                        <div className="illuminateDiv"></div>
                        <div className="workInfo">
                            <p className="workTitle">Proverp</p>
                            <p className="workDescription">Redesigned the company product website with updated marketing content and cleaner UI/UX. Improved search engine optimization for website, improved sales and lead management pipelining... </p>
                            <div className="workImages">
                                <img alt="" src={PRHome} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="divWorkDetails" className="workDetails">
                <i className="fas fa-arrow-left" onClick={() => { setProjectDetail('none') }} style={navigator.platform === 'iPhone' ? {position: 'relative'} : {}}></i>
                {handleProjectTransition()}
            </div>
        </div>
    )

}

export default Works