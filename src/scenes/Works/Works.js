import { useEffect, useState } from "react"
import $ from 'jquery'
import Portfolio from './containers/Portfolio'
import { Route, Switch, useHistory } from "react-router-dom";
function Works() {
    const [filterState, setFilterState] = useState('all');
    const [projectDetail, setProjectDetail] = useState('none');
    let history = useHistory();
    let handleProjectTransition = (e) => {
        if (projectDetail === 'none') {
            $('#divWorkDetails').fadeOut()
            setTimeout(() => { $('.stepThree').fadeIn(); }, 700)
        }
        if (projectDetail == 'portfolio') {
            $('.stepThree').fadeOut();
            setTimeout(() => { $('#divWorkDetails').fadeIn() }, 700)
            return (
                <Portfolio />
            )
        }
    }
    useEffect(() => {
        $('#divFilter div').on('click', (e, o) => {
            $('#divFilter div').removeClass('activeFilter');
            $('#' + e.currentTarget.id).addClass('activeFilter');
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
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem" data-work="portfolio">
                        <div className="illuminateDiv"></div>
                        <p>Portfolio</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>DMCT</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>MrPurple</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>myParents</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>AQSPEC</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>Quantum Salesman</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>Analytics Builder</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>Microsite Builder</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>Varsun</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>Proverp</p>
                    </div>
                    <div id="divWork_Portfolio" data-filter-tags={["web", "dapp", "ui", "all"]} className="workItem">
                        <div className="illuminateDiv"></div>
                        <p>Predictive Analytics</p>
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