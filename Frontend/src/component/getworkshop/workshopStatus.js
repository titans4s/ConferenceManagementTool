import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

class WorkshopStatus extends Component {
    constructor(props) {
        super(props);
        this.onClickApprove = this.onClickApprove.bind(this);
        this.onClickUnapprove = this.onClickUnapprove.bind(this);
       
        this.state = {
            workshop: []


        }
        emailjs.init('user_kRLPkd1wRJtleTR0q51YK');

    }

  
    componentDidMount() {
        axios.get(`http://localhost:8087/workshop/${this.props.match.params.id}`)
            .then(response => {
                console.log('ALL WORKSHOPS', response.data);
                this.setState({ workshop: response.data.data });
                console.log(this.state.workshop.length);
            })
            .catch(error => {
                alert(error.message)
            })
    }

    onClickApprove() {
        axios.put(`http://localhost:8087/workshop/approved/${this.props.match.params.id}`)
            .then(response => {
                alert('Workshop scuccefully Approved ')
               
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

    onClickUnapprove() {
        axios.put(`http://localhost:8087/workshop/unapproved/${this.props.match.params.id}`)
            .then(response => {
                alert('Workshop scuccefully Approved ');
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

   


    render() {
        return (
            <div className="container">
                <h1>Workshop</h1>
                <div className="card mb-3">
                    <div className="p-3">
                        <h2>{this.state.workshop.title}</h2>
                        <h4>{this.state.workshop.Oraganization}</h4>
                        <h3 name="to_name">{this.state.workshop.conductorName}</h3>
                        <h5>{this.state.workshop.address}</h5>
                        <h5>{this.state.workshop.pNumber}</h5>
                        <h5 name="to_email">{this.state.workshop.email}</h5>
                        <a href={this.state.workshop.link}>{this.state.workshop.link}</a>
                        <h5>{this.state.workshop.description}</h5>
                        <h3>{this.state.workshop.Status}</h3>
                        <button type="submit" className="btn btn-primary" onClick={this.onClickApprove} >Approve</button>
                            &nbsp;&nbsp;
                        <button type="submit" className="btn btn-primary" onClick={this.onClickUnapprove}>Unapprove</button>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default WorkshopStatus;