import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            paperid: this.props.match.params.id,
            email: "",
            cardholder: "",
            cardnumber: "",
            month: "",
            year: "",
            cvc: ""
        }

        emailjs.init('user_POwld6FyKa1zfCwDXeUOV')

    }
    onUpdate() {
        axios.put(`http://localhost:9099/research/updatepayment/${this.props.match.params.id}`)
            .then(response => {
                alert('Payment status changed');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
        const btn = document.getElementById('button');

        document.getElementById('form')
            .addEventListener('submit', function (event) {
                event.preventDefault();

                btn.value = 'Sending...';

                const serviceID = 'default_service';
                const templateID = 'template_pcbvlbl';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Send Email';
                        alert('Sent!');
                    }, (err) => {
                        btn.value = 'Send Email';
                        alert(JSON.stringify(err));
                    });
            });

    }

    onSubmit(e) {
        e.preventDefault();
        let payment = {
            paperid: this.state.paperid,
            email: this.state.email,
            cardholder: this.state.cardholder,
            cardnumber: this.state.cardnumber,
            month: this.state.month,
            year: this.state.year,
            cvc: this.state.cvc
        }
        console.log('Data to send', payment);
        axios.post('http://localhost:9099/payment/create', payment)
            .then(response => {
                alert('Payment Successful');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })


    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (

            <div>
                <div class="col-md-6 offset-md-3">
                    <br />

                    <div class="card card-outline-secondary">
                        <div class="card-body">
                            <h3 class="text-center">Credit Card Payment</h3>
                            <hr />
                            <div class="alert alert-info p-2 pb-3">
                                <a class="close font-weight-normal initialism" data-dismiss="alert" href="#"><samp>×</samp></a>
                                CVC code is required.
                            </div>


                            <form class="form" role="form" id="form" onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="cc_name">Email address</label>
                                    <input type="email" class="form-control" id="email" name="email" required="required" value={this.state.email} onChange={this.onChange} />
                                </div>

                                <div class="form-group">
                                    <label for="cc_name">Card Holder's Name</label>
                                    <input type="text" class="form-control" id="cc_name" name="cardholder" required="required" value={this.state.cardholder} onChange={this.onChange} />
                                </div>

                                <div class="form-group">
                                    <label>Card Number</label>
                                    <input type="text" class="form-control" autocomplete="off" maxlength="20" name="cardnumber" required="" value={this.state.cardnumber} onChange={this.onChange} />
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-12">Card Exp. Date</label>
                                    <div class="col-md-4">
                                        <select class="form-control" name="month" size="0" value={this.state.month} onChange={this.onChange}>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <select class="form-control" name="year" size="0" value={this.state.year} onChange={this.onChange}>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" name="cvc" autocomplete="off" maxlength="3" title="Three digits at back of your card" required="" placeholder="CVC" value={this.state.cvc} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-md-12">Amount</label>
                                </div>

                                <div class='form-row'>
                                    <div class='col-md-12'>
                                        <div class='form-control total btn btn-info'>
                                            Total:
                                            <span class='amount'>Rs.300</span>
                                        </div>
                                    </div>

                                </div>
                                <hr />






                                <input type="hidden" name="to_name" id="to_name" value={this.state.cardholder} />
                                <input type="hidden" name="to_email" id="to_email" value={this.state.email} />

                                <button type="submit" id="button" class="btn btn-success btn-lg btn-block" onClick={this.onUpdate}>Submit</button>


                                <script type="text/javascript"
                                    src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>


                            </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Payment;
