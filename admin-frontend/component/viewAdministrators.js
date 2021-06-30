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
    
    handleEditAdmin = (id) => {
        window.location=`/update/${id}`
    }
    
    handleDeleteAdmin = (item) => {
        axios.delete(`http://localhost:9996/administrator/delete/${item._id}`)   
        .then(response=>{
            alert('Administrator Removed');
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    render(){
        return(
            <div align="center" className="container-sm">
                <h5 align="center">Administrators</h5>
                <div className="card mb-3 w-75 " >
                    <div className="p-3 text-white bg-dark"> 
                    <div class="row ">
                        <div class="col">
                       <h6>Username</h6> 
                        </div>
                        <div class="col">
                        <h6>User Type</h6>   
                        </div>
                        <div class="col">
                        <h6>Actions</h6>
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.administrators.length > 0 && this.state.administrators.map((item, index) => (
                    <div key={index} className="card w-75 mb-3" >
                        <div className="p-3 text-black bg-light">                       
                        <div class="row">
                        <div class="col">
                        {item.username}
                        </div>
                        <div class="col">
                        {item.usertype}    
                        </div>
                        
                        <div class="col">
                        <div class="col-sm-3 p-1">
                       
                        <i class='fas fa-pencil-alt' onClick={this.handleEditAdmin.bind(this, item._id)}></i>
                         <br/>
                        {/* <a href="#"> */}
                        <i class="fas fa-trash-alt" onClick={() => this.handleDeleteAdmin(item)}></i>                        
                        {/* </a> */}
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

export default ViewAdministrator;