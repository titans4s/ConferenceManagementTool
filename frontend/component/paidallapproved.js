import React, { Component } from 'react';
import axios from 'axios';




class paidallapproved extends Component{
   
    constructor(props) {
        super(props);
        
      
        this.state = {
          approvedPapers: []
        };
       
     
    }

   

 
    navigateSubject(e,paperid) {
        window.location=`/onepaper/${paperid}`
    }
    
    componentDidMount() {
        axios.get(`http://localhost:9099/research/getallapproved`)
            .then(response => {
                this.setState({ approvedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
        })
    }
      
render() {
    return (
        <div>
            {this.state.name}
            <h1>Approved research papers</h1>
            {this.state.approvedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                <div key={index} className="card mb-3"onClick={e=>this.navigateSubject(e,item._id)} >
                    <h5>{item.papertitle}</h5>
                  
                   
                  
                </div>
    ))}
            
         </div>   
              
              
    )

    }
}






export default paidallapproved;