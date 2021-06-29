import React, { Component } from 'react';
import axios from 'axios';


import { Cookies, useCookies } from 'react-cookie';

class approved extends Component{
   
    constructor(props) {
        super(props);
        
      
        this.state = {
            name: '',
            pwd: '',
          
         
            approvedPapers: []
        };
       this.useCookies=['user']
     
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
        <div>
           
            <h1>Approved research papers</h1>
            {Cookies.Name}
            {this.state.approvedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                <div key={index} className="card mb-3" >
                    <h5>{item.papertitle}</h5>
                  
                    <h5>{item.payment}</h5>
                    <button  onClick={e=>this.navigateSubject(e,item._id)}>make payment</button>
                </div>
    ))}
            
         </div>   
              
              
    )

    }
}






export default approved;