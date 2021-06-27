import React, { Component } from 'react';
import axios from 'axios';

class approved extends Component{
    constructor(props) {
        super(props);

        this.state = {
            approvedPapers:[]
        }
     
    }

    navigateSubject(e,paperid) {
        window.location=`/payment/${paperid}`
    }
    
    componentDidMount() {
        axios.get(`http://localhost:9099/research/get/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ approvedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
        })
    }
      
render() {
    return (
        <div><br/>
            <h2>Approved research papers</h2><hr/>
            {this.state.approvedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                <div key={index}  >

            <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                                    <h5 class="card-title">{item.papertitle}</h5>
                                    
                                    { item.payment.equals("not paid") } ? (
                                        <button  onClick={e=>this.navigateSubject(e,item._id)}>make payment</button>
                                    )
                                    <p class="card-text"></p>
                        
                    <button  onClick={e=>this.navigateSubject(e,item._id)}>make payment</button>
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






export default approved;