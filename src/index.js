import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PanelPartA extends React.Component {
    render(){
        return (
            <div>
                <h3 className="topics">EDUCATION</h3>
                <div className="details">
                    <h4>B.tech,CSE(2016 - 2020)</h4>
                    <div className="info">
                        <h5>Smvdu,Katra</h5>
                        <h5>CGPA: 8.34/10</h5>
                    </div>
                    <h4>XII(Senior Secondary),Science</h4>
                     <div className="info">
                        <h5>Year of Completion: 2016</h5>
                        <h5>CBSE Board(Presentation Convent School,Jammu)</h5>
                        <h5>Percentage: 90.00%</h5>
                    </div>
                    <h4>X(Secondary)</h4>
                    <div className="info">
                        <h5>Year of Completion: 2014</h5>
                        <h5>CBSE Board(Presentation Convent School,Jammu)</h5>
                        <h5>CGPA: 10.00/10</h5>
                    </div>
                </div>
            </div>
        );
    }
}

class PanelPartB extends React.Component {
    render() {
        return (
            <div>
                <h3> CONTACT INFO</h3>
                <ul class="fa-ul">
                    <li><i class="fa-li fa fa-envelope"></i>shruti10gandotra@gmail.com</li>
                    <li><i class="fa-li fa fa-phone"></i>9796848231</li>
                    <li><i class="fa-li fa fa-github"></i><a href="https://github.com/Sshruti10">https://github.com/Sshruti10</a></li>
                    <li><i class="fa-li fa fa-linkedin"></i><a href="https://www.linkedin.com/in/shruti-gandotra-a0522014a/">www.linkedin.com/shruti</a></li>
                    <li><i class="fa-li fa fa-twitter"></i><a href="https://twitter.com/Shruti_Gandotra">https://twitter.com/Shruti</a></li>
                    <li><i class="fa-li fa fa-quora"></i><a href="https://www.quora.com/profile/Shruti-Gandotra">www.quora.com/profile/Shruti</a></li>
                </ul>
            </div>
        );
    }
}

class Panel extends React.Component {
    render() {
        return(
        <div>
            <img className="display" src={require('./pic.jpeg')} alt="avatar"></img>
            <h1>SHRUTI</h1>
            <h4>Software Developer</h4>
            <div className="panelPartA">
                <PanelPartA />
            </div>
            <div className="panelPartB">
                <PanelPartB />
            </div>
        </div>
        );
    }

}

class Resume extends React.Component {
    render() {
        return(
            <div className ="container">
                <div className="row">
                    <div className="col-sm-3 panel">
                        <Panel />
                    </div>   
                    <div class="col-sm-9 main">
                    
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Resume />, document.getElementById('root'));

