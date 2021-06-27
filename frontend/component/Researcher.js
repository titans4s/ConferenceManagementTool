import React, { Component } from 'react';
import axios from 'axios';

class Researcher extends Component{
    constructor(props) {
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
        authorname:'',
        papertitle:'',
        email:'',
        Designation:'',
        noofauthors:0,
        researchfield:'',
        referedby:'',
        noofpages: 0,
        url:'',
        abstract: '',
          status: "",
        paid:"not paid"
     
        }

    }
onChange(e)
{
    this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
    e.preventDefault();
   let subject={
    authorname: this.state.authorname,
      papertitle: this.state.papertitle,
      email: this.state.email,
      Designation: this.state.Designation,
      noofauthors: this.state.noofauthors,
      researchfield: this.state.researchfield,
      referedby: this.state.referedby,
      noofpages: this.state.noofpages,
      url: this.state.url,
     abstract: this.state.abstract,
     status: "null",
     payment:this.state.paid
    
      
   } 
   console.log('Data to send',subject);
   axios.post('http://localhost:9099/research/create',subject)
   .then(response=>{
       alert('Data successfully inserted');
   }).catch(error=>{
       console.log(error.message);
       alert(error.message);
   })
  
  
}

    render(){
      return (
         
          <div className="container">
            <div class="col-md-6 offset-md-3">
                    
            <br/>
                  <div class="card card-outline-secondary p-3 mb-2 bg-secondary  text-white border-secondary mb-3" color="blue">
                        <div class="card-body">
                       
                         
                           
              
            <h3>Use the form below to submit your paper for publication.</h3><hr/>
              
                        <form  onSubmit={this.onSubmit} class="row g-3 ">
                          <div class="col-md-6 ">
                            <label for="inputEmail4" class="form-label">AuthorName</label>
                <input type="text" class="form-control" id="author" name="authorname" value={this.state.authorname} onChange={this.onChange}/>
                          </div>
                          <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.onChange}/>
                          </div>
                          <div class="col-12">
                            <label for="inputAddress" class="form-label">Paper Title</label>
                            <input type="text" class="form-control" id="inputAddress" name="papertitle" value={this.state.papertitle} onChange={this.onChange}/>
                          </div>
                          <div class="col-md-4">
                            <label for="inputState" class="form-label">Research Field</label>
                            <select id="inputState" class="form-select" name="researchfield" value={this.state.researchfield}  onChange={this.onChange}>
                              <option selected>Choose...</option>
                              <option>IT</option>
                            <option>Agriculture</option>
                            <option>BioTechnology</option>

                            </select>
                          </div>
                          <div class="col-md-4">
                          <label for="inputEmail4" class="form-label">No of pages</label>
                            <input type="Number" class="form-control" id="inputEmail4" name="noofpages" value={this.state.noofpages} onChange={this.onChange}/>
                          </div>
                        
                          <div class="col-md-4">
                            <label for="inputState" class="form-label">Designation</label>
                            <select id="inputState" class="form-select" name="Designation" value={this.state.Designation}  onChange={this.onChange}>
                              <option selected>Choose...</option>
                            <option>Student(Any degree)</option>
                            <option>Research Scholar</option>
                            <option>Assistant Professer</option>
                            <option> Professer</option>
                            <option> Doctrate Degree holder</option>
                           <option> Other</option>

                            </select>
                                            </div>
                                            
                          <div class="col-md-4">
                            <label for="inputState" class="form-label">Refered By</label>
                            <select id="inputState" class="form-select" name="referedby" value={this.state.referedby}  onChange={this.onChange}>
                              <option selected>Choose...</option>
                            <option>Search Engines</option>
                            <option>From facebook</option>
                            <option>Friend or Guide</option>
                            <option>Already an Author</option>
                            <option>Other</option>
                            </select>
                        </div>
                                            
                        <div class="col-md-4">
                          <label for="inputEmail4" class="form-label">No of Authors</label>
                            <input type="Number" class="form-control" id="inputEmail4" name="noofauthors" value={this.state.noofauthors} onChange={this.onChange}/>
                                            </div>

                                            <label for="floatingTextarea" >Paper abstract</label>
                  <div class="form-floating">
                 
                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="abstract" value={this.state.abstract} onChange={this.onChange}></textarea>
                          
                                            </div>
                                            <div class="col-12">
                            <label for="inputAddress" class="form-label">URL</label>
                            <input type="text" class="form-control" id="inputAddress" name="url" value={this.state.url} onChange={this.onChange}/>
              </div>
              
            
                         
                  <div class="col-12">
                  <div class="d-flex justify-content-center ">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                          </div>
                        </form>
                </div>
                </div>
                    </div>
                </div>
          
        )
    }
}

export default Researcher;