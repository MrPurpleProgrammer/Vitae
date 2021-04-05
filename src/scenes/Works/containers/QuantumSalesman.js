import QSHome from '../../../assets/Works/Quantum_Salesman/QS_Home.png';
import QSMobile from '../../../assets/Works/Quantum_Salesman/QS_Mobile.png';

function QuantumSalesman(props) {
    return (
        <div className="projectContainer">
            <div id="divProjectStatus" className="projectStatusContainer">
                <div className="projectLinks">
                    <a target="_blank" href="https://github.com/MrPurpleProgrammer/Quantum-Salesman"><h1>Repository</h1></a>
                    <a target="_blank" href="https://qs.mrpurple.org"><h1>Website</h1></a>
                </div>
                <div className="projectStatus"><h1>(Status: Online)</h1></div>
            </div>
            <div className="projectContent">
                <h1>Quantum Salesman</h1>
                <p>A proof of concept logistics app that solves the traveling salesman problem utilizing IBM’s QISKIT framework. Qiskit provides developers access to IBM’s quantum computer. The basic premise behind this tool is to test the current capabilities and infrastructure of the QISKIT framework and see if utilizing Quantum Computers for NP problems like this is viable.</p>
                <div className="projectTechnologies">
                    <h1>Technologies</h1>
                    <p>HTML, SCSS, ReactJS, NodeJS, Python, Flask, Mapbox API, MapboxJS, QISKIT, GIT, Github, Conda, NPM, ATSP</p>
                </div>
                <div className="projectLearnContainer">
                    <div>
                        <a target="_blank" href="https://qiskit.org/">
                            <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52772988%2F253573767630%2F1%2Foriginal.jpg?auto=compress&s=202521af6b6f3033b335dea470079d93" />
                            <p>Learn More About QISKIT</p>
                        </a>
                    </div>
                    <img src={QSHome} />
                    <img src={QSMobile} />
                </div>
            </div>
        </div>
    )

}

export default QuantumSalesman