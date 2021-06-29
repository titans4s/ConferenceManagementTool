import React, { Component } from 'react';
import axios from 'axios';

class notapproved extends Component{
    constructor(props) {
        super(props);

        this.state = {
            notapprovedPapers:[]
        }
     
    }

    
    componentDidMount() {
        axios.get(`http://localhost:9099/research/getnotapproval/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ notapprovedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
        })
    }
      
render() {
    return (
        <div><br/>
            <h2>Not Approved research papers</h2><hr/>
            {this.state.notapprovedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                <div key={index}  >

            <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                                    <h5 class="card-title">{item.papertitle}</h5>

                  </div>  
                </div>
            </div>
           </div>
                   
                   
                </div>
    ))}
     </div>       

 
              
    )

    }
}






export default notapproved;