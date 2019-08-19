import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

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
        <div className="card bg-dark text-white" >
          <Link key={barbershop._id} to={`/barbershops/${barbershop._id}`}>
            <h2 className="card-title">Shop Name: {barbershop.name}</h2>
            <h2 className="card-subtitle mb-2 text-muted">Address: {barbershop.address}</h2>
            <h2>Current Barbers: {barbershop.currentBarber}</h2>
            <img src={barbershop.image} className="card-img" />
          </Link>
        </div>
      );
    });
    return (
      <div>
        <h1>All Good</h1>
        <Link to={'/barbershops/new'}>
        <Button>Add Barbershop</Button>
        </Link>
        {barbershopList}
      </div>
    );
  }
}
