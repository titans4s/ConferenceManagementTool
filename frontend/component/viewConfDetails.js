import React, { Component } from 'react';
import axios from 'axios';
class ViewConfDetails extends Component {
    constructor(props){
        super(props);
        this.state ={
            conference:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:9996/administrator/conference')
        .then(response => {
            this.setState({conference : response.data.data })
        })
    }

    handleApprove = (item) => {
        axios.put(`http://localhost:9996/administrator/approvecd/${item._id}`)   
        .then(response=>{
            alert('Details Approved');
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }
    handleNotApprove = (item) => {
        axios.put(`http://localhost:9996/administrator/disapprovecd/${item._id}`)   
        .then(response=>{
            alert('Updated Details Rejected');
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    render(){
        return(
            <div align="center" className="container-sm">
                <h4 align="center">Conference Details</h4>
                
                {this.state.conference.length > 0 && this.state.conference.map((item, index) => (
                    <div key={index} className="card w-75 mb-3" >
                        <div className="p-3 text-white bg-secondary">                       
                        <div class="row">                   
                        <h5>About: {item.about}</h5>                                           
                        </div></div>
                        <div className="p-3 text-white bg-dark">
                        <div class="row">                     
                        <h6>From: {item.FromDate}</h6>                     
                        </div></div>
                        <div className="p-3 text-white bg-dark">
                        <div class="row">                     
                        <h6>To: {item.ToDate}</h6>                     
                        </div></div>
                        <div className="p-3 text-white bg-dark">
                        <div class="row">                     
                        <h6>Venue: {item.venue} </h6>                    
                        </div></div>
                        <div className="p-2 text-white bg-dark">
                        <div class="row text-white bg-danger"> <h5>Sponsors</h5></div>
                        {item.sponsers.length > 0 && item.sponsers.map((i, index) => (
                            <div class="row"> 
                            <div key={index} class="col">
                            <h6>{i}</h6>
                            </div>                                         
                            </div>
                         ))}
                        </div>
                        <div className="p-2 text-white bg-dark">
                        <div class="row text-white bg-danger"> <h5>Key Note Speakers</h5></div>
                        {item.speakers.length > 0 && item.speakers.map((i, index) => (
                            <div class="row"> 
                            <div key={index} class="col">
                            <h6>{i}</h6>
                            </div>                                         
                            </div>
                         ))}
                        </div>
                        <div className="p-3 text-white bg-secondary">
                        <div class="row">                     
                        <h5>Status: {item.status} </h5>                   
                        </div>
                        <i class='fa fa-check' onClick={() => this.handleApprove(item)}></i>
                         <br/>
                        <i class='fa fa-ban' onClick={() => this.handleNotApprove(item)}></i>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default ViewConfDetails;