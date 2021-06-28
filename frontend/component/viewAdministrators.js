import React, { Component } from 'react';
import axios from 'axios';
class ViewAdministrator extends Component {
    constructor(props){
        super(props);
        this.state ={
            administrators:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:9996/administrator/')
        .then(response => {
            this.setState({administrators : response.data.data })
        })
    }

    render(){
        return(
            <div className="container-sm">
                <h5>View Administrators</h5>
                <div className="card mb-3 w-75 " >
                <div className="p-3"> 
                    <div class="row">
                        <div class="col-sm-3">
                       <h6>Username</h6> 
                        </div>
                        <div class="col">
                        <h6>User Type</h6>   
                        </div>
                        <div class="col-sm-3">
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.administrators.length > 0 && this.state.administrators.map((item, index) => (
                    <div key={index} className="card w-75 mb-3" >
                        <div className="p-3">                       
                        <div class="row">
                        <div class="col">
                        {item.username}
                        </div>
                        <div class="col">
                        {item.usertype}    
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-3 p-1">
                        <a href="#">
                        <i class='fas fa-pencil-alt'></i>
                        </a>
                        </div>
                        <div class="col-sm-3">
                        <a href="#">
                        <i class="fas fa-trash-alt"></i>                        
                        </a>
                        </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ViewAdministrator;