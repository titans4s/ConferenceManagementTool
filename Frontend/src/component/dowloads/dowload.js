import React, { Component } from 'react';
 import axios from 'axios';

class Download extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
           
            Papers:''
        }
    }

   

    render() {
        return (

            <div>
                
                <br/> <br/>
                <h1>Workshop Outline Templates</h1>  <br/> <br/>
                <img src={"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"}alt="new" />
                <div class="card-group">
                    <div class="card">
                    <h2>Workshop ToDo sheet</h2>
                        <img class="card-img-top" src="https://v1.nitrocdn.com/zciqOWZgDznkuqFpvIJsLUeyHlJtlHxe/assets/static/optimized/rev-c9a56c8/wp-content/uploads/2014/11/Free-Excel-Templates-Printable-To-do-list.png"/>
                        <div class="card-body">
                        <h5 class="card-title">Details</h5>
                            <p class="card-text">File format : Excel</p>
                            <p class="card-text">Size: 10KB</p>
                            <a href="https://trumpexcel.com/wp-content/uploads/2015/09/Excel-To-Do-List-Template-Print.xlsx">Download</a>
                        </div>
                    </div>
                    <div class="card">
                        <h2>Workshop Evaluation Form</h2>
                        <img class="card-img-top" src="https://images.sampletemplates.com/wp-content/uploads/2015/09/Workshop-Evaluation-Form-Template.jpg?width=480" />
                        <div class="card-body">
                            <h5 class="card-title">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 62KB</p>
                            <a href="https://images.sampletemplates.com/wp-content/uploads/2015/09/22144210/WorkshopEvaluationForm.pdf.zip">Download</a>
                        </div>
                    </div>
                    <div class="card">
                    <h2> Business Research Paper Outline</h2>
                        <img class="card-img-top" src="https://images.template.net/wp-content/uploads/2017/06/International-Business-Research-Paper.jpg?width=320/100px160" alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 71KB</p>
                            <a href="https://images.template.net/wp-content/uploads/2017/06/International-Business-Research-Paper.zip">Download</a>
                        </div>
                    </div>

                    <div class="card">
                    <h2> Business School Research Paper Outline</h2>
                    <img class="card-img-top" src="https://images.template.net/wp-content/uploads/2017/06/Basic-Research-Paper-Outline.jpg?width=320/100px160" alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 61KB</p>
                            <a href="https://images.template.net/wp-content/uploads/2017/06/Business-School-Research-Paper1.zip">Download</a>
                        </div>
                    </div>

                    
                </div>

            </div>
            


            
                )
           
    }
}

export default Download;