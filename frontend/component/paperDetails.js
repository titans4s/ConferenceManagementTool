import React, { Component } from 'react';
import axios from 'axios';

class Paper extends Component{
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this),
            this.onUpdatenotapproval = this.onUpdatenotapproval.bind(this);
            this.onDelete = this.onDelete.bind(this);
        this.state = {
           
            Papers:''
        }
    }

    componentDidUpdate() {
        this.onDelete;
    }
    onDelete() {
        axios.delete(`http://localhost:9099/research/delete/${this.props.match.params.id}`)
       
        .then(response=>{
            alert('Research paper is deleted');
            window.location = `/`;
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    onUpdate() {
        axios.put(`http://localhost:9099/research/update/${this.props.match.params.id}`)
        .then(response=>{
            alert('Research paper is approved');
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }
    onUpdatenotapproval() {
        axios.put(`http://localhost:9099/research/update/disapproved/${this.props.match.params.id}`)
        .then(response=>{
            alert('Research paper is not approved');
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    componentDidMount() {

        axios.get(`http://localhost:9099/research/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ Papers: response.data.data })
                console.log(this.state.Papers);
             
               
            }).catch(error => {
                alert(error.message);
            });
       
    }

    render() {
        return (
            <div className="container">
                

                <h1>{this.state.Papers.papertitle}</h1>
              
                <h3>Abstract</h3>
                {this.state.Papers.abstract}<br></br>
               <h2><a href={this.state.Papers.url}>View the paper</a></h2> 

                <div>
                    <button onClick={this.onUpdate}>Approve</button>
                </div>

                <div>
                    <button onClick={this.onUpdatenotapproval}>disApprove</button>
                </div>
                <div>
                <button onClick={this.onDelete}>Delete</button>
                </div>
                
            </div>
    )
    }
}

export default Paper;