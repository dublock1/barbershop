import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class BarbershopList extends Component {
  state = {
    newBarbershop: {
      name: "",
      address: "",
      currentBarbers: "",
      image: ""
    },
    barbershops: []
  };

  componentDidMount() {
    this.getAllBarbershops();
  }

  getAllBarbershops = () => {
    axios.get("/api/barbershops").then(res => {
      this.setState({ barbershops: res.data });
    });
  };

  render() {
    const barbershopList = this.state.barbershops.map(barbershop => {
      return (
        <div className="card mb-3" style={{ flexWrap: "wrap" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={barbershop.image} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link
                  key={barbershop._id}
                  to={`/barbershops/${barbershop._id}`}
                >
                  <h2 className="card-title">Shop Name: {barbershop.name}</h2>
                  <h2 className="card-text">Address: {barbershop.address}</h2>
                  <p className="card-text">
                    <small style={{ color: "black" }}>
                      Click to view Barbers
                    </small>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Link to={"/barbershops/new"}>
          <Button>Add Barbershop</Button>
        </Link>

        {barbershopList}
      </div>
    );
  }
}
