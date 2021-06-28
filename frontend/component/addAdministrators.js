import React, { Component } from 'react';
import axios from 'axios'
class AddAdministrator extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:'',
            usertype:'',
            password:''
        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    onSubmit(e){
        e.preventDefault();
        let admin = {
            username: this.state.username,
            password: this.state.password,
            usertype: this.state.usertype
            
        }
        console.log('Data to send', admin )
        axios.post('http://localhost:9996/administrator/create', admin)
        .then(response => {
            alert('Data inserted')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }

    render(){
        return(
            <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">

                <h1>Add Administrator</h1>
                <form onSubmit={this.onSubmit}>
                <div className="m-5 w-75 align-items-center" >
                    <div>
                        <h6><label for="exampleInputEmail1" className="form-label">Email address</label></h6>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" value={this.state.name} onChange={event => this.onChange(event)} />
                    </div>
                    </div>
                    <div className=" m-5 w-75" >
                    <h6><label for="exampleInputtype" className="form-label">Administrator Category</label></h6>
                        <input type="text" className="form-control" id="exampleInputtype" name="usertype" aria-describedby="emailHelp" value={this.state.type} onChange={event => this.onChange(event)}  />
                    </div>
                    <div className="m-5 w-75" >
                    <h6><label for="exampleInputPassword1" className="form-label">Password</label></h6>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={event => this.onChange(event)}  />
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-5">Add Administrator</button>
                    </form>
            </div>
            </div>
        )
    }
}

export default AddAdministrator;