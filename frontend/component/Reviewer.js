import React, { Component } from 'react';
import axios from 'axios';

class ResearchReviewer extends Component{
    constructor(props) {
        super(props);
       
        this.state = {
            researches:[]
        }
    }
   
  

    componentDidMount() {
        axios.get('http://localhost:9099/research/get')
            .then(response => {
                this.setState({ researches: response.data.data });
                console.log(response.data.data);
                console.log(this.state.researches);
                console.log(this.state.researches.length);
        })
    }

    navigateSubject(e,researchid) {
        window.location=`/${researchid}`
    }

    render() {
        return (
            <div className="container">
                <h1>Research</h1>
                {this.state.researches.length > 0 && this.state.researches.map((item, index) => (
                    <div key={index} className="card mb-3" onClick={e=>this.navigateSubject(e,item._id)}> 
                        <h5>Paper_Title:{item.papertitle}</h5>
                        
                    </div>
                    
                ))}
                 
            </div>

        )     
    }
}

export default ResearchReviewer;