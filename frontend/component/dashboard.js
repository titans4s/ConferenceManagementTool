import React, { Component } from 'react';
import axios from 'axios';
class dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            paymentTot:0
        }
    }

    componentDidMount(){
        axios.get('http://localhost:9996/administrator/gettotpayment')
        .then(response => {
            this.setState({paymentTot : response.data.tot })
        })
    }


    render(){
        return(
            <div align="center" className="container-sm">
                <h4 align="center">Conference Details</h4>
                <h5> {this.state.paymentTot} </h5>
                
            </div>
        )
    }
}

export default dashboard;