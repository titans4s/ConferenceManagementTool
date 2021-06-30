import React, { Component} from 'react';
import axios from 'axios';

class showapprovedworkshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
     workshop:[]
    }
  }

  componentDidMount(){
      axios.get('http://localhost:8087/workshop/')
      .then(response =>{
        console.log('Aprroved Workshops',response.data)
        this.setState({workshop : response.data.data})
      })
  }
  
  navigateSubjectPage(e, id) {
    window.location = `/shows/${id}`
  }

  render() {
      return(
          <div className="container">
            <h1><span class="badge badge-secondary">Workshops</span></h1>
            {this.state.workshop.length > 0 && this.state.workshop.map((item,index) =>(
              <div key={index} className ="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                <h4 class="card-header">{item.title}</h4>
                <br/>
                <h5 class="card-text" class="text-dark">{item.Oraganization}</h5>
              </div>
            ))}

          </div>
      );
  }
}

export default showapprovedworkshop;