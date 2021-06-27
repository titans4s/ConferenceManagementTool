import React, { Component } from 'react';

class Login extends Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
      
        this.state = {
            email:""
        } 
        
    }

    navigate(e,email) {
        window.location=`/approve/${email}`
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
   }

    render() {
        return (
            <div className="container">
                <h1>nive</h1>
                <h3>dharu</h3>
            <form>
                <div>
                <label for="inputEmail4" class="form-label">Useremail</label>
                        <input type="text" class="form-control" id="author" name="email" value={this.state.email} onChange={this.onChange}/>
                    </div>
                  
                   
                </form>
                <button onClick={e=>this.navigate(e,this.state.email)}>Login</button>
            </div>
       
           
        )
    }
}

export default Login;

