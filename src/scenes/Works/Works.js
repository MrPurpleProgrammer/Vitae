import { useEffect, useState } from "react"
import $ from 'jquery'
import Portfolio from './containers/Portfolio';
import DMCT from './containers/DMCT';
import QuantumSalesman from './containers/QuantumSalesman' 
import MrPurple from './containers/MrPurple'
import { Route, Switch, useHistory } from "react-router-dom";
import AnalyticsBuilder from "./containers/AnalyticsBuilder";
import MicrositeBuilder from "./containers/MicrositeBuilder";
import Lighthouse from "./containers/Lighthouse";
import MyParents from './containers/MyParents';
import Varsun from "./containers/Varsun";
import Proverp from "./containers/Proverp";
import AQSPEC from "./containers/AQSPEC";
function Works() {
    const [filterState, setFilterState] = useState('all');
    const [projectDetail, setProjectDetail] = useState('none');
    let history = useHistory();
    let handleProjectTransition = (e) => {
        if (projectDetail == 'portfolio') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Portfolio />
            )
        }
        if (projectDetail == 'dmct') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <DMCT />
            )
        }
        if (projectDetail == 'qs') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <QuantumSalesman />
            )
        }
        if (projectDetail == 'cv') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <MrPurple />
            )
        }
        if (projectDetail == 'mp') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <MyParents />
            )
        }
        if (projectDetail == 'ab') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <AnalyticsBuilder />
            )
        }
        if (projectDetail == 'mb') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <MicrositeBuilder />
            )
        }
        if (projectDetail == 'lh') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Lighthouse />
            )
        }
        if (projectDetail == 'var') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Varsun  />
            )
        }
        if (projectDetail == 'proverp') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Proverp />
            )
        }
        if (projectDetail == 'aqspec') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <AQSPEC />
            )
        }
        else {
            $('#divWorkDetails').fadeOut()
            setTimeout(() => { $('.stepThree').fadeIn(); }, 700)
        }
    }
    useEffect(() => {
        $('#divFilter div').on('click', (e, o) => {
            $('#divFilter div').removeClass('activeFilter');
            $('#' + e.currentTarget.id).addClass('activeFilter');
            let domObjs = $('.workGrid>div');
            domObjs.each((i, each) => {
                if(e.currentTarget.dataset.filter == 'all') {
                    $(each).removeClass('_workItem').addClass('workItem');
                }
                else {
                    $(each).removeClass('workItem').addClass('_workItem');
                }
            });
            let _domObjs = $('._workItem')
            _domObjs.each((i, each) => {
                if(!$(each).data('filterTags').includes(e.currentTarget.dataset.filter)) {
                    // console.log($(each).data('filterTags').includes($(e).data('filter')), $(each).data('filterTags'))
                    $(each).animate({width: "0px"}, () => {
                        $(each).hide();
                    })
                }
                else {
                    $(each).show().animate({width: "155px"});
                }
            })
        });
        $('.divWorkDetails').hide();
        $('.workItem').on('click', (e) => { setProjectDetail(e.currentTarget.dataset.work) });
        $('#divFilterAll').click();
    }, [])
    useEffect(() => {
        handleProjectTransition();
    }, [projectDetail]);
    return (
        <div id="divWorksContent" className="contentView">
            <div className="stepThree" style={{display: 'none'}}>
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
                        <p>Portfolio</p>
                    </div>
                    <div id="divWork_DMCT" data-filter-tags={["dapp", "all"]} className="workItem" data-work="dmct">
                        <div className="illuminateDiv"></div>
                        <p>DMCT</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "mobile", "ui", "vis", "all"]} className="workItem" data-work="lh">
                        <div className="illuminateDiv"></div>
                        <p>Ligthouse</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "vis", "all"]} className="workItem" data-work="qs">
                        <div className="illuminateDiv"></div>
                        <p>Quantum Salesman</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "ui", "all"]} className="workItem" data-work="cv">
                        <div className="illuminateDiv"></div>
                        <p>MrPurple</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "mobile", "ui", "all"]} className="workItem" data-work="mp">
                        <div className="illuminateDiv"></div>
                        <p>myParents</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "ui", "vis", "all"]} className="workItem" data-work="aqspec">
                        <div className="illuminateDiv"></div>
                        <p>AQSPEC</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "vis", "all"]} className="workItem" data-work="ab">
                        <div className="illuminateDiv"></div>
                        <p>Analytics Builder</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", 'vis', "all"]} className="workItem" data-work="mb">
                        <div className="illuminateDiv"></div>
                        <p>Microsite Builder</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "ms", "ui", "all"]} className="workItem" data-work="var">
                        <div className="illuminateDiv"></div>
                        <p>Varsun</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "ms", "ui", "all"]} className="workItem" data-work="proverp">
                        <div className="illuminateDiv"></div>
                        <p>Proverp</p>
                    </div>
                </div>
            </div>
            <div id="divWorkDetails" className="workDetails">
                <i className="fas fa-arrow-left" onClick={() => {setProjectDetail('none')}}></i>
                {handleProjectTransition()}
            </div>
        </div>
    )

}

export default Works