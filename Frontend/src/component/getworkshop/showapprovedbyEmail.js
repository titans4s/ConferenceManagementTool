import React, { Component } from 'react';
import axios from 'axios';

class showapprovedbyEmail extends Component{
    constructor(props) {
        super(props);

        this.state = {
            approvedWorkshop:[]
        }
     
    }

    
    
    componentDidMount() {
        axios.get(`http://localhost:8087/workshop/email/approve/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ approvedWorkshop: response.data.data });
                console.log(this.state.approvedWorkshop);
            }).catch(error => {
                alert('error.message');
        })
    }
      
render() {
    return (
        <div className="container"><br/>
            <h2>Approved Workshops</h2><hr/>
            {this.state.approvedWorkshop.length > 0 && this.state.approvedWorkshop.map((item, index) => (
                <div key={index}  >

            
            <div className="card mb-3">
                    <div className="p-3">
                <h4>{item.title}</h4>
                <h5>{item.Oraganization}</h5>
                <h5>{item.conductorName}</h5>
                <h5>{item.address}</h5>
                <h5>{item.pNumber}</h5>
                <h5>{item.email}</h5>
                <h5>{item.description}</h5>
                <h5>{item.link}</h5>
                <h5>{item.Status}</h5>
                                                            
                                                          
                </div>
                </div>
            </div>
          
                   
                   
               
    ))}
            
         </div>   
              
              
    )

    }
}






export default showapprovedbyEmail;