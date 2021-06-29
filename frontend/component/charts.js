import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
state = {
  dataDoughnut: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  }
}

render() {
    return (
      
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <div className="card-img-top"></div>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />

            <div class="card-body">
              <h5 class="card-title">Doughnut chart</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}

export default ChartsPage;