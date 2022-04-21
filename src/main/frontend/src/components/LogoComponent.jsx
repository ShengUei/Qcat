import React, {Component} from 'react';

class LogoComponent extends Component {
    render() {
        return (
            <div className={"container"} style={{display: "inline"}}>
            <nav className={"navbar"} style={{position: "fixed", marginLeft: 50}}>
                    <div onClick={(e) => {
                             window.location.href = '/home';}} >
                        <img src={"http://localhost:8080/images/qcat-logo.png"} alt={""} style={{width: 50}}/>
                        <span className="fs-4" style={{userSelect: "none"}}>Qcat</span>
                    </div>
            </nav>
            </div>
        );
    }
}

export default LogoComponent;