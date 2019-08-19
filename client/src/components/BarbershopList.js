import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

export default class BarbershopList extends Component {
  state = {
    newBarbershop: {
      name: "",
      address: "",
      currentBarber: "",
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
        <div>
          <Link key={barbershop._id} to={`/barbershops/${barbershop._id}`}>
            <h2>{barbershop.name}</h2>
            <h2>{barbershop.address}</h2>
            <h2>Current Barbers: {barbershop.currentBarber}</h2>
            <img src={barbershop.image} />
          </Link>
        </div>
      );
    });
    return (
      <div> 
        <Link to={'/barbershops/new'}>
        <Button>Add Barbershop</Button>
        </Link>
        
        {barbershopList}
      </div>
    );
  }
}
